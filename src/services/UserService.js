import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    withCredentials: false, // This is the default
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    timeout: 10000
  })


  export default {
    login(payload){
      return apiClient.post('login/', payload)
    }
  }