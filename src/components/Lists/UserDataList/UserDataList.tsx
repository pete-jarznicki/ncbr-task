const labels = [
  'Imię',
  'Nazwisko',
  'Płeć',
  'Data urodzenia',
  'Adres zamieszkania',
  'Numer telefonu',
  'Lata doświadczenia',
]

const UserDataList = ({ userData }: { userData: any }) => {
  if (!userData.info) {
    return <h2>Brak danych o użytkowniku</h2>
  }

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
