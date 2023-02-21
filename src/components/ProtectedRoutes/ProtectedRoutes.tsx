// @ts-nocheck
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../providers/AuthProvider/AuthProvider'

const ProtectedRoutes = () => {
  const { isAuth } = useAuth()
  return isAuth ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoutes
