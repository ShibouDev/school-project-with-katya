import axios from "axios"
export const instanceDontAuth = axios.create({
    baseURL: 'http://localhost:7777/'
})
export const instanceWithAuth = (token) => axios.create({
    baseURL: 'http://localhost:7777/',
    headers: { "Authorization": `Bearer ${token}` }
})