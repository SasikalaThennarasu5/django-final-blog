import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Posts from './pages/Posts'
import PostDetail from './pages/PostDetail'
import Login from './pages/Login'
import CreatePost from './pages/CreatePost'

export default function App(){
  return (
    <div className="min-h-screen">
      <nav className="bg-gradient-to-r from-indigo-600 to-pink-500 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="font-bold text-xl">Colorful Blog</Link>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Posts</Link>
            <Link to="/create" className="hover:underline">Create</Link>
            <Link to="/login" className="hover:underline">Login</Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Posts/>} />
          <Route path="/posts/:id" element={<PostDetail/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/create" element={<CreatePost/>} />
        </Routes>
      </main>
      <footer className="text-center p-6 text-sm text-gray-600">Made with ❤️ — Blog App Demo</footer>
    </div>
  )
}
