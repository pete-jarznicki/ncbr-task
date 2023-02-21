// @ts-nocheck

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../providers/AuthProvider/AuthProvider'
import { asyncLocalStorage } from '../../../services/asyncLocalStorage'

const AccountForm = () => {
  const { userData } = useAuth()
  const [allUsersData, setAllUsersData] = useState({} as any)
  const [isLoading, setIsLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    const handleAsync = async () => {
      try {
        const allUsersData = await asyncLocalStorage.getItem('userRecords')
        setAllUsersData(allUsersData)
      } catch (error) {
        console.log(error)
      }
    }

    handleAsync()
    setIsLoading(false)
  }, [])

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      firstName: { value: string }
      lastName: { value: string }
      sex: { value: string }
      dateOfBirth: { value: string }
      address: { value: string }
      phoneNumber: { value: number }
      experience: { value: number }
    }
    const firstName = target.firstName.value
    const lastName = target.lastName.value
    const sex = target.sex.value
    const dateOfBirth = target.dateOfBirth.value
    const address = target.address.value
    const phoneNumber = target.phoneNumber.value
    const experience = target.experience.value

    const newState = allUsersData.filter((user) => user.email !== userData.email)
    await asyncLocalStorage('userRecords', [
      ...newState,
      {
        ...userData,
        info: {
          firstName,
          lastName,
          sex,
          dateOfBirth,
          address,
          phoneNumber,
          experience,
        },
      },
    ])
    return navigate('/')
  }

  return isLoading ? (
    <h1>Wczytywanie...</h1>
  ) : (
    <form
      style={{ display: 'flex', flexDirection: 'column', maxWidth: '600px' }}
      onSubmit={handleOnSubmit}
    >
      <input
        defaultValue={userData.info.firstName}
        id='firstName'
        name='firstName'
        placeholder='Imię'
        type='text'
      />
      <input
        defaultValue={userData.info.lastName}
        id='lastName'
        name='lastName'
        placeholder='Nazwisko'
        type='text'
      />
      <input
        defaultValue={userData.info.address}
        id='address'
        name='address'
        placeholder='Adres zamieszkania'
        type='text'
      />
      <input
        defaultValue={userData.info.phoneNumber}
        id='phoneNumber'
        name='phoneNumber'
        placeholder='Numer telefonu'
        type='number'
      />
      <select defaultValue={userData.info.sex} placeholder='Wybierz płeć' name='sex' id='sex'>
        <option value='Mężczyzna'>Mężczyzna</option>
        <option value='Kobieta'>Kobieta</option>
      </select>
      <input
        defaultValue={userData.info.dateOfBirth}
        type='date'
        id='dateOfBirth'
        name='dateOfBirth'
      />
      <input
        defaultValue={userData.info.experience}
        placeholder='Lata doświadczenia'
        type='number'
        id='experience'
        name='experience'
      />
      <button type='submit'>Uzupełnij</button>
    </form>
  )
}

export default AccountForm
