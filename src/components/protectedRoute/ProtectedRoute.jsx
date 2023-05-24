import { useAuthData } from '../../context/AuthProvider'
import { useNavigate } from 'react-router-dom'
const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const { currentUser, protectedLoading } = useAuthData();
  
    if (!protectedLoading) {
      if (currentUser) {
        return children;
      } else {
        navigate("/login");
        return null; // Return null when user is not authenticated
      }
    }
  
    return null; // Return null during the loading state
  };

export default ProtectedRoute
