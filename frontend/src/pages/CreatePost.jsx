import React, {useState} from 'react'
import client from '../api'
import { useNavigate } from 'react-router-dom'

export default function CreatePost(){
  const [title,setTitle]=useState(''), [content,setContent]=useState('')
  const nav = useNavigate()
  async function submit(e){ e.preventDefault()
    try{
      const token = localStorage.getItem('token')
      if(token) client.defaults.headers.common['Authorization']='Token '+token
      const res = await client.post('/posts/', {title, content})
      nav(`/posts/${res.data.id}`)
    }catch(err){ alert('Error creating post. Make sure you are logged in.') }
  }
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Create New Post</h2>
      <form onSubmit={submit} className="space-y-3">
        <input required value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" className="w-full p-3 border rounded"/>
        <textarea required value={content} onChange={e=>setContent(e.target.value)} rows="8" placeholder="Write your post..." className="w-full p-3 border rounded"></textarea>
        <div><button className="bg-pink-500 text-white px-4 py-2 rounded">Publish</button></div>
      </form>
    </div>
  )
}
