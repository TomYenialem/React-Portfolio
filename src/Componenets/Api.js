import axios from 'axios'


const axiosBase=axios.create({
    baseURL: 'https://localhost:5000', 
   
})

export default axiosBase