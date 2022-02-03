import { useContext, useState, memo, useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { AUTH_TOKEN } from '@common/constants';
import { getUserData, setToken } from '@common/api';
import UserContext from '@common/contexts/UserContext';

const Protected = ({ children }) => {
    let location = useLocation();

    const [isFetching, setFetching] = useState(false);
    const jwt = localStorage.getItem(AUTH_TOKEN);
    const { user, setUser} = useContext(UserContext);
    
    useEffect(async () => {
        if (!user && jwt) {
            setFetching(() => true);
            setToken(jwt);
            getUserData()
                .then(res => {
                    setUser(res);
                })
                .finally(() => {
                    setFetching(() => false);
                })
        }
      }, [user, jwt]);

    if (isFetching) {
      return null;
    }

    if (!user && !isFetching && !jwt) { 
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default memo(Protected);