import { headers } from "@/next.config";
import axios from "axios";

const API_URL = "http://162.254.35.120/api/auth";
const token =typeof window !=="undefined" && localStorage.getItem("token")


//register user
const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

//login user
const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData,{
    headers:{
      "Content-Type":"application/vnd.api+json",
      
    }
  });
  return response.data;
};

//logout
const logout = async () => {
  const response = await axios.post(`${API_URL}/logout`,{
    headers:{
        Authorization: `Bearer ${token}`
    }
  });
  return response.data;
};
//reset email
const reset_with_email = async (email) => {
  const response = await axios.post(`${API_URL}/forgot-password`,email)
  return response.data;
};

//reset email
const reset_Password = async (email) => {
  const response = await axios.post(`${API_URL}/reset-password`,email)
  return response.data;
};

const authService = {
  register,
  login,
  logout,
  reset_with_email,
  reset_Password
};

export default authService;
