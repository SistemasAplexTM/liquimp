import axios from 'axios'
import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: 'http://localhost:8000/api/', // api base_url
  timeout: 5000,
  headers: {
    'Authorization': 'Bearer ' + getToken(),
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  }
})

export default service
