import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import findUserRecordByEmail from '../../helpers/findUserRecordByEmail'
import getLocalStorageData from '../../helpers/getLocalStorageData'
import { useLocation } from 'react-router-dom'

const AuthContext = createContext({})

export const useAuth = () => {
  return useContext(AuthContext)
}

interface IAuthProviderProps {
  children: ReactNode
}

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuth, setIsAuth] = useState(false)
  const [userData, setUserData] = useState({})
  const location = useLocation()

  useEffect(() => {
    const user = getLocalStorageData('auth')
    if (user) {
      setIsAuth(true)
      setUserData(findUserRecordByEmail(user.email))
    }
    setIsLoading(false)
  }, [location])

  return (
    <AuthContext.Provider value={{ isAuth, userData }}>
      {isLoading ? 'Wczytywanie...' : children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
