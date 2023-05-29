import { useEffect } from 'react';
import { useAuthData } from '../../context/AuthProvider'
import { useNavigate } from 'react-router-dom'
const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const { currentUser, protectedLoading } = useAuthData();

    useEffect(()=>{
      if (!protectedLoading) {
        if (!currentUser) {
          navigate("/login");
        }
      }
    },[])

    return children;
  };


export default ProtectedRoute
