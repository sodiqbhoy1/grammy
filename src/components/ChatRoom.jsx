import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import socket from '../socket';
import axios from 'axios';

const ChatRoom = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    // This effect handles user session management.
    const storedUser = sessionStorage.getItem('chatUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // If no user data is found in sessionStorage, redirect to the landing page.
      alert('Please enter your details to join the chat.');
      navigate(`/`); // Navigate to the join page for the specific room
    }
  }, [roomId, navigate]);

  useEffect(() => {
    // This effect handles fetching messages and socket communication.
    if (!user || !roomId) return;

    const fetchMessages = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/messages/${roomId}`);
        setMessages(res.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchMessages();

    // --- Socket Connection Logic ---
    
    // 1. Manually connect to the socket
    socket.connect();

    // 2. Define event handlers
    const onConnect = () => {
      console.log('Socket connected, joining room:', roomId);
      socket.emit('join_room', { roomId, username: user.name });
    };

    const onReceiveMessage = (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    };

    // 3. Attach event listeners
    socket.on('connect', onConnect);
    socket.on('receive_message', onReceiveMessage);

    // 4. Cleanup on component unmount
    return () => {
      console.log('Leaving room and disconnecting socket.');
      socket.off('connect', onConnect);
      socket.off('receive_message', onReceiveMessage);
      socket.disconnect();
    };
  }, [roomId, user]);

  useEffect(() => {
    // Auto-scroll to the latest message
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (text.trim() === '' || !user || !socket.connected) {
      if (!socket.connected) {
        console.error('Cannot send message, socket is not connected.');
        alert('Connection lost. Please refresh the page.');
      }
      return;
    }

    const messageData = {
      roomId,
      content: text,
      sender: user.name,
      type: 'text'
    };

    socket.emit('send_message', messageData);
    setText('');
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Check file size (limit to 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB');
        return;
      }
      setSelectedFile(file);
    }
  };

  const uploadFile = async () => {
    if (!selectedFile || !user) return;

    if (!socket.connected) {
      console.error('Cannot send file, socket is not connected.');
      alert('Connection lost. Please refresh the page.');
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('roomId', roomId);
    formData.append('sender', user.name);

    try {
      await axios.post(`${import.meta.env.VITE_APP_API_URL}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 30000, // 30 second timeout for production
        
      });
       // Clear the selected file from the UI after successful upload.
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      console.error('Error response:', error.response?.data);
     let errorMessage = 'Failed to upload file. ';
      if (error.code === 'ECONNABORTED') {
        errorMessage += 'Request timeout - the file might be too large or your connection is slow.';
      } else if (error.response?.status === 413) {
        errorMessage += 'The file is too large.';
      } else if (error.response?.data?.error) {
        errorMessage += error.response.data.error;
      } else {
        errorMessage += 'Please try again.';
      }  
       alert(errorMessage);
    } finally {
      setIsUploading(false);
    }
  };
  
  // Helper to find and wrap URLs in anchor tags
  const linkify = (text) => {
    const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%?=~_|])/ig;
    // Using a simple regex to find URLs and wrap them in anchor tags.
    return text.replace(urlRegex, (url) => {
      return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="underline underline-offset-2 hover:opacity-80">${url}</a>`;
    });
  };

  const renderMessage = (msg) => {
    const messageType = msg.type || msg.messageType;

    if (messageType === 'image') {
      // Construct proper image URL
      let imageUrl;
      if (msg.fileUrl && msg.fileUrl.startsWith('http')) {
        imageUrl = msg.fileUrl;
      } else if (msg.fileUrl && msg.fileUrl.startsWith('/uploads/')) {
        imageUrl = `${import.meta.env.VITE_APP_API_URL}${msg.fileUrl}`;
      } else {
        imageUrl = `${import.meta.env.VITE_APP_API_URL}/uploads/${msg.content}`;
      }
      
      return (
        <div>
          <p className="text-sm font-semibold text-gray-600">{msg.sender}</p>
          <img 
            src={imageUrl}
            alt={msg.originalName || msg.fileName || 'Shared image'} 
            className="max-w-[150px] rounded-lg mt-2 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setLightboxImage(imageUrl)}
            onError={(e) => {
              console.error('Image failed to load:', imageUrl);
              e.target.style.display = 'none';
            }}
          />
          <p className="text-xs text-gray-500 mt-1">{msg.originalName || msg.fileName}</p>
        </div>
      );
    } else { // This handles text messages
      return (
        <div>
          <p className="text-sm font-semibold text-gray-600">{msg.sender}</p>
          <p 
            className="text-gray-800"
            style={{ wordBreak: 'break-word' }}
            dangerouslySetInnerHTML={{ __html: linkify(msg.content) }} 
          />
        </div>
      );
    }
  };

  const leaveRoom = () => {
    if (!window.confirm('Leave this room?')) return;

    try {
      if (socket) {
        socket.emit?.('leave', { roomId, user });
        socket.disconnect?.();
      }
    } catch (e) {
      console.log(e);
    }

    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/admin-dashboard/rooms', { replace: true });
    }
  };

  // Render a loading state or null while checking for user session
  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Leave bar */}
      <header className="flex items-center justify-between gap-3 p-3 border-b bg-white/90 backdrop-blur sticky top-0 z-10">
        <div className="min-w-0">
          <p className="text-xs text-gray-500">Room</p>
          <h2 className="text-sm sm:text-base font-semibold truncate">{roomId}</h2>
        </div>
        <button
          onClick={leaveRoom}
          className="inline-flex items-center gap-2 px-3 py-2 border border-gray-900 text-gray-900 text-sm font-medium hover:bg-black hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
          </svg>
          Leave
        </button>
      </header>

      <main className="flex-1 overflow-y-auto px-3 sm:px-4 py-4">
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.sender === user.name ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] p-3 sm:p-4 rounded-2xl ${
                  msg.sender === user.name
                    ? 'bg-[#B69859] text-white rounded-br-sm'
                    : 'bg-gray-100 border border-gray-200 text-gray-900 rounded-bl-sm'
                }`}
              >
                {renderMessage(msg)}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </main>

      <footer className="bg-white/90 backdrop-blur p-3 sm:p-4 border-t">
        {/* File Preview */}
        {selectedFile && (
          <div className="mb-4 p-3 bg-[#FFF8E7] border border-[#EAD7A1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center min-w-0 flex-1">
              <svg className="w-6 h-6 text-[#B69859] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
              <span className="text-sm text-gray-700 truncate">{selectedFile.name}</span>
              <span className="text-xs text-gray-500 ml-2 whitespace-nowrap">
                ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
              </span>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={uploadFile}
                disabled={isUploading}
                className="flex-1 sm:flex-none bg-[#B69859] text-white px-4 py-1 text-sm hover:bg-[#A08849] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isUploading ? 'Uploading...' : 'Send'}
              </button>
              <button
                onClick={() => {
                  setSelectedFile(null);
                  if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                  }
                }}
                className="flex-1 sm:flex-none bg-gray-900 text-white px-4 py-1 text-sm hover:bg-black"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className="max-w-3xl mx-auto flex items-center gap-2 w-full">
          <input
            type="text"
            placeholder="Type a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            className="flex-1 min-w-0 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B69859] focus:border-[#B69859]"
          />
          
          {/* File Upload Button */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept="image/*"
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex-shrink-0 bg-white border border-gray-300 text-gray-700 rounded-full p-2 sm:p-3 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#B69859]"
            title="Upload file"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
          </button>

          <button
            onClick={sendMessage}
            className="flex-shrink-0 bg-black text-white rounded-full p-2 sm:p-3 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-[#B69859]"
            title="Send message"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </footer>

      {/* Lightbox for viewing images */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <img 
            src={lightboxImage} 
            alt="Lightbox" 
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image itself
          />
          <button 
            onClick={() => setLightboxImage(null)} 
            className="absolute top-4 right-4 text-white text-4xl font-bold"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};
export default ChatRoom;