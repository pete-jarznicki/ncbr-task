// @ts-nocheck
import { Link, useNavigate } from 'react-router-dom'
import { asyncLocalStorage } from '../../services/asyncLocalStorage'
import UserDataList from '../Lists/UserDataList'

const Account = () => {
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await asyncLocalStorage.deleteItem('auth')
    return navigate('/login')
  }
  return (
    <div>
      <button onClick={handleSignOut}>Wyloguj się</button>
      <h1>Dane użytkownika</h1>
      <UserDataList />
      <Link to='/account-form'>Przejdź do formularza danych</Link>
    </div>
  )
}

export default Account
