import { useState } from 'react'
import checkIfValidUser from '../../helpers/checkIfValidUser'

const LoginForm = () => {
  const [error, setError] = useState(false)

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      email: { value: string }
      password: { value: string }
    }
    const email = target.email.value
    const password = target.password.value
    const isValidUser = checkIfValidUser(email, password)
    setError(!isValidUser)
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
