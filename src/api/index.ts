import axios from 'axios'

const api = axios.create({
    baseURL: 'http://164.90.199.10',
    headers: { "Content-type": "application/json" }
})

export default api