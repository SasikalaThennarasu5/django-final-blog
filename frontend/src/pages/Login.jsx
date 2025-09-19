import React, {useState} from 'react'
import client, { setToken } from '../api'

export default function Login(){
  const [username,setUsername]=useState(''), [password,setPassword]=useState(''), [msg,setMsg]=useState('')
  async function submit(e){ e.preventDefault()
    try{
      const res = await client.post('/auth-token/', {username,password})
      const token = res.data.token
      localStorage.setItem('token', token); setToken(token); setMsg('Logged in')
    }catch(err){ setMsg('Login failed') }
  }
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={submit} className="space-y-3">
        <input value={username} onChange={e=>setUsername(e.target.value)} placeholder="Username" className="w-full p-2 border rounded"/>
        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" className="w-full p-2 border rounded"/>
        <div><button className="bg-indigo-600 text-white px-4 py-2 rounded">Login</button></div>
        {msg && <p className="text-sm text-green-600">{msg}</p>}
      </form>
    </div>
  )
}
