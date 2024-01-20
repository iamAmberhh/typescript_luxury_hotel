import axios from 'axios'
// const { VITE_APP_API } = import.meta.env;

const service = axios.create()

export default function axiosReq(config) {
  return service({
    baseURL: `https://freyja-1d2y.onrender.com/api/v1`,
    // baseURL: 'http://localhost:3005/api/v1',
    timeout: 8000,
    ...config
  })
}