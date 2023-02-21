// @ts-nocheck
import { Link, useNavigate } from 'react-router-dom'
import handleDeleteLocalStorageItem from '../../helpers/deleteLocalStorageItem'
import { useAuth } from '../../providers/AuthProvider/AuthProvider'
import UserDataList from '../Lists/UserDataList'

const Account = () => {
  const { userData } = useAuth()
  const navigate = useNavigate()

  const handleSignOut = () => {
    handleDeleteLocalStorageItem('auth')
    return navigate('/')
  }
  return (
    <div>
      <button onClick={handleSignOut}>Wyloguj się</button>
      <h1>Dane użytkownika</h1>
      <UserDataList userData={userData} />
      <Link to='/account-form'>Przejdź do formularza danych</Link>
    </div>
  )
}

export default Account
