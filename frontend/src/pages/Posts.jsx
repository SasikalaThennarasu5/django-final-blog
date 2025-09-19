import React, {useEffect, useState} from 'react'
import client from '../api'
import { Link } from 'react-router-dom'

export default function Posts(){
  const [posts, setPosts] = useState([]); const [page, setPage] = useState(1); const [next, setNext] = useState(null)
  useEffect(()=>{ fetchPosts() },[page])
  async function fetchPosts(){
    const res = await client.get(`/posts/?page=${page}`)
    setPosts(res.data.results || res.data); setNext(res.data.next)
  }
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-indigo-700">Latest Posts</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {posts.map(p=>(
          <div key={p.id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold text-xl">{p.title}</h2>
            <p className="text-sm text-gray-600">by {p.author_username} • {new Date(p.created_at).toLocaleString()}</p>
            <p className="mt-2 text-gray-800">{p.content.slice(0,160)}...</p>
            <div className="mt-3 flex justify-between items-center">
              <Link to={`/posts/${p.id}`} className="text-indigo-600 hover:underline">Read</Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-between">
        <button disabled={page===1} onClick={()=>setPage(page-1)} className="px-4 py-2 bg-white border rounded">Previous</button>
        <button disabled={!next} onClick={()=>setPage(page+1)} className="px-4 py-2 bg-white border rounded">Next</button>
      </div>
    </div>
  )
}
