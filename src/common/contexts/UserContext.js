import { createContext, useState } from 'react'

const UserContext = createContext()

export const UserConsumer = UserContext.Consumer

export const UserProvider = ({ children }) => {

    const [userData, setUserData] = useState(null);

    const setUser = (user) => {
        setUserData({...user})
    }
  
    return (
    <UserContext.Provider
        value={{
            user: userData,
            setUser,
        }}
    >
        {children}
    </UserContext.Provider>
    )
};

export default UserContext