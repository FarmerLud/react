import axios from 'axios'

const axiosInstance = axios.create()

axiosInstance.defaults.baseURL = import.meta.env.VITE_REACT_URL_API

export { axiosInstance }
