import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Blog, Home, Login, Register } from './pages'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
