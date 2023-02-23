import { useEffect } from 'react'
import Pages from './Pages'
import { asyncLocalStorage } from './services/asyncLocalStorage'

const initialLocalStorageState = [
  {
    email: 'testuser@gmail.com',
    password: 'testuser123',
    info: {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      address: '',
      phoneNumber: '',
      experience: '',
    },
  },
]

const App = () => {
  useEffect(() => {
    const handleAsync = async () => {
      try {
        const localStorageUsersState = await asyncLocalStorage.getItem('userRecords')
        if (localStorageUsersState !== null) {
          await asyncLocalStorage.setItem('userRecords', localStorageUsersState)
          return
        }
        await asyncLocalStorage.setItem('userRecords', initialLocalStorageState)
      } catch (error) {
        console.log(error)
      }
    }

    handleAsync()
  }, [])

  return <Pages />
}

export default App
