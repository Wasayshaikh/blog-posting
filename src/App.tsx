import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Blog, Home, Login, Register } from './pages'
import Header from './components/Header'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<><Header /><p>Error: 404 Not Found</p></>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
