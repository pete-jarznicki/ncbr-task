import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../providers/AuthProvider/AuthProvider'
import LoginForm from '../Forms/LoginForm'
import styles from './Login.module.scss'

const Login = () => {
  const { isAuth } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuth) {
      return navigate('/')
    }
  }, [isAuth])

  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  )
}

export default Login
