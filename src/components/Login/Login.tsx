// @ts-nocheck
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../providers/AuthProvider/AuthProvider'
import LoginForm from '../Forms/LoginForm'

const Login = () => {
  const { isAuth } = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if (isAuth) {
      return navigate('/')
    }
  }, [isAuth])
  return <LoginForm />
}

export default Login
