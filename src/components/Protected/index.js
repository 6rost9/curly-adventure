import { useLocation, Navigate } from "react-router-dom";
import { AUTH_TOKEN } from '../../common/constants';

const Protected = ({ children }) => {
    let location = useLocation();
    
    const jwt = localStorage.getItem(AUTH_TOKEN);

    console.log('jwt', jwt);

    if (!jwt) { 
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
}

export default Protected;