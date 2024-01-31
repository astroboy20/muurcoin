import axios from "axios"


const API_URL = "http://162.254.35.120/api/auth"

//reister user
const register = async (userData) =>{
    const response = await axios.post(`${API_URL}/register`, userData)
    return response.data
}

const authService={
    register
}

export default authService