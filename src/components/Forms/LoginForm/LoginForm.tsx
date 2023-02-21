import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import checkIfValidUser from '../../../helpers/checkIfValidUser'
import { asyncLocalStorage } from '../../../services/asyncLocalStorage'

const LoginForm = () => {
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      email: { value: string }
      password: { value: string }
    }
    const email = target.email.value
    const password = target.password.value
    const isValidUser = await checkIfValidUser(email, password)

    if (isValidUser) {
      await asyncLocalStorage.setItem('auth', { email })
      return navigate('/')
    }
    setError(true)
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input id='email' name='email' placeholder='Wprowadź adres email' type='email' />
      <input id='password' name='password' placeholder='Wprowadź hasło' type='password' />
      <button type='submit'>Zaloguj się</button>
      {error ? 'Nieprawidłowe dane, spróbuj jeszcze raz' : ''}
    </form>
  )
}

export default LoginForm
