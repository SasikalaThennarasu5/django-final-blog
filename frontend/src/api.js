import axios from 'axios'
const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8000/api/v1'
const client = axios.create({ baseURL: API_BASE })
export function setToken(token){
  if(token) client.defaults.headers.common['Authorization'] = 'Token ' + token
  else delete client.defaults.headers.common['Authorization']
}
export default client
