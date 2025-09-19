import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import client, { setToken } from '../api'

export default function PostDetail(){
  const { id } = useParams()
  const [post, setPost] = useState(null); const [comments, setComments] = useState([])
  useEffect(()=>{ fetch() },[])
  async function fetch(){
    const res = await client.get(`/posts/${id}/`)
    setPost(res.data)
    const cres = await client.get(`/comments/?post=${id}`)
    setComments(cres.data.results || cres.data)
  }
  return (
    <div>
      {!post ? <p>Loading...</p> : (
        <div className="bg-white p-6 rounded shadow">
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <p className="text-sm text-gray-600">by {post.author_username} • {new Date(post.created_at).toLocaleString()}</p>
          <div className="mt-4 text-gray-800 whitespace-pre-line">{post.content}</div>
          <div className="mt-6">
            <h3 className="font-semibold">Comments</h3>
            <div className="space-y-3 mt-3">
              {comments.map(c=>(
                <div key={c.id} className="p-3 bg-slate-50 rounded">
                  <p className="text-sm text-gray-600">{c.author_username} • {new Date(c.created_at).toLocaleString()}</p>
                  <p className="mt-1">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
