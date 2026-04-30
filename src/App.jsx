import { useState, useEffect } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'
import { useDarkMode } from './hooks/useDarkMode'

function CursorGlow() {
  const [pos, setPos] = useState({ x: -999, y: -999 })

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move, { passive: true })
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 hidden lg:block"
      style={{
        background: `radial-gradient(450px circle at ${pos.x}px ${pos.y}px, rgba(181,69,32,0.055), transparent 70%)`,
      }}
    />
  )
}

export default function App() {
  const [dark, toggleDark] = useDarkMode()

  return (
    <HashRouter>
      <CursorGlow />
      <Navbar dark={dark} onToggle={toggleDark} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </HashRouter>
  )
}
