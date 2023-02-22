// @ts-nocheck
import { useAuth } from '../../../providers/AuthProvider/AuthProvider'
import styles from './UserDataList.module.scss'
const labels = [
  'Imię',
  'Nazwisko',
  'Płeć',
  'Data urodzenia',
  'Adres zamieszkania',
  'Numer telefonu',
  'Lata doświadczenia',
]

const UserDataList = () => {
  const { userData } = useAuth()

  return (
    <ul className={styles.list_container}>
      {Object.values(userData.info).map((info: any, index: any) => (
        <li className={styles.list_item} key={index}>
          <p className={styles.label}>{labels[index]}: </p>
          <p className={styles.value}>{info || 'Brak danych'}</p>
        </li>
      ))}
    </ul>
  )
}

export default UserDataList
