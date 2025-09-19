import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import AdminHome from "./admin/AdminHome";
import AdminSignup from "./admin/AdminSignup";
import ForgotPassword from "./admin/ForogtPassword";
import ResetPassword from "./admin/ResetPassword";
import LandingPage from "./components/LandingPage";
import ChatRoom from "./components/ChatRoom";
import Rooms from "./admin/Rooms";
import Profile from "./admin/Profile";
import AdminDashboard from "./admin/AdminDashboard";
import ProtectedRoute from "./admin/ProtectedRoute";
import Dashboard from "./admin/Dashboard";
import NotFound from "./components/NotFound";
import Users from "./admin/Users";
import AdminSignin from "./admin/AdminSignin";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/admin/home" element={<AdminHome/>} />
        <Route path="/admin/login" element={<AdminSignin/>} />
        <Route path="/admin/signup" element={<AdminSignup/>} />
        <Route path="/admin/forgot-password" element={<ForgotPassword/>} />
        <Route path="/admin/reset-password/:token"
          element={<ResetPassword/>}
        />

        <Route path="/join/:roomId" element={<LandingPage/>} />
        <Route path="/chat/:roomId" element={<ChatRoom/>} />

        {/* admin dashboard now protected */}
        <Route
          path="/admin-dashboard/*"
          element={
            <ProtectedRoute>
              <AdminDashboard/>
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard/>} />
          <Route path="rooms" element={<Rooms/>} />
          <Route path="users" element={<Users/>} />
          <Route path="profile" element={<Profile/>} />
        </Route>

        {/* 404 Not Found - This should be the last route */}
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
};

export default App;