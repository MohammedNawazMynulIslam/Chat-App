import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import SignUp from './pages/Signup/Signup'

function App() {
  return (
    <>
    <div className='p-4 h-screen items-center justify-center flex'>
    <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="/login" element={<Login/>} />
      <Route  path="/signup" element={<SignUp/>} />
    </Routes>
    </div>
    </>
  )
}

export default App
