import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { asyncLocalStorage } from '../../services/asyncLocalStorage'

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
    const handleAsync = async () => {
      try {
        const authUser = await asyncLocalStorage.getItem('auth')
        if (!authUser) {
          setIsAuth(false)
          return
        }
        const usersRecords = await asyncLocalStorage.getItem('userRecords')
        const userData = usersRecords.find((user: any) => user.email === authUser.email)
        setUserData(userData)
        setIsAuth(true)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    handleAsync()
  }, [location])

  return (
    <AuthContext.Provider value={{ isAuth, userData }}>
      {isLoading ? <h1>Wczytywanie...</h1> : children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
