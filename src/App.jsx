import { Route, Routes } from "react-router"
import Homepage from "./components/Homepage"

const App = () => {
  return (
    <>

<Routes>
  <Route path='/' element={<Homepage/>}/>
</Routes>
    </>
  )
}

export default App
