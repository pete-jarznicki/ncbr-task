// @ts-nocheck
import { useNavigate } from 'react-router-dom'
import { asyncLocalStorage } from '../../services/asyncLocalStorage'
import Button from '../Button'
import UserDataList from '../Lists/UserDataList'
import styles from './Account.module.scss'

const Account = () => {
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await asyncLocalStorage.deleteItem('auth')
    return navigate('/login')
  }
  return (
    <div className={styles.container}>
      <div className={styles.info_box}>
        <h1 className={styles.heading}>Dane użytkownika</h1>
        <UserDataList />
        <div className={styles.button_container}>
          <Button href='/account-form'>Uzupełnij dane</Button>
          <Button onClick={handleSignOut}>Wyloguj się</Button>
        </div>
      </div>
    </div>
  )
}

export default Account
