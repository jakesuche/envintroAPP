import axios from 'axios'
import { Plugins} from '@capacitor/core'
const { Storage } = Plugins

const result = JSON.parse(localStorage.getItem('_cap_user')) ||  ''
const axiosInstance = axios.create({
    baseURL:"http://localhost:3000",
    timeout:3000,
    'Cache-Control': "no-store, no-cache, must-revalidate, post-check=0, pre-check=0",
    'Pragma': "no-cache",
    headers:{'authorization':`Bearer ${result.token || '' }`}
   
})

export default axiosInstance