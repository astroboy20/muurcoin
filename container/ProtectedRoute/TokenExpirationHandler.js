import {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { clearUser } from '@/feature/slice/authSlice'
import { useRouter } from 'next/router'
const TokenExpirationHandler = () => {
    const dispatch = useDispatch()
    const {user} = useSelector((state)=>state.auth)
    const router = useRouter()
    useEffect(() => {
        if (!user) { // Token is null or undefined
          dispatch(clearUser());
          router.push('/'); // Redirect to login page when token is null
        }
      }, [user]);
    
    
  return null
}

export default TokenExpirationHandler