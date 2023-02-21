// @ts-nocheck
import { useAuth } from '../../../providers/AuthProvider/AuthProvider'

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
    <ul>
      {Object.values(userData.info).map((info: any, index: any) => (
        <li key={index} style={{ display: 'flex' }}>
          <p>{labels[index]}: </p>
          <p>{info || 'Brak danych'}</p>
        </li>
      ))}
    </ul>
  )
}

export default UserDataList
