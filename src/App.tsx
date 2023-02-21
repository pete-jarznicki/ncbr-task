import { useEffect } from 'react'
import Pages from './Pages'
import { asyncLocalStorage } from './services/asyncLocalStorage'

const initialLocalStorageState = [
  {
    email: 'example@gmail.com',
    password: '123456',
    info: {
      firstName: '',
      lastName: '',
      sex: '',
      dateOfBirth: '',
      address: '',
      phoneNumber: '',
      experience: '',
    },
  },
  {
    email: 'piotr.jarznicki@britenet.com.pl',
    password: '111111',
    info: {
      firstName: '',
      lastName: '',
      sex: '',
      dateOfBirth: '',
      address: '',
      phoneNumber: '',
      experience: '',
    },
  },
  {
    email: 'admin@gmail.com',
    password: 'admin123',
    info: {
      firstName: '',
      lastName: '',
      sex: '',
      dateOfBirth: '',
      address: '',
      phoneNumber: '',
      experience: '',
    },
  },
]

const App = () => {
  // A helper so I don't have to type in manually.
  // useEffect(() => {
  //   const handleAsync = async () => {
  //     try {
  //       await asyncLocalStorage.setItem('userRecords', initialLocalStorageState)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  //   handleAsync()
  // }, [])

  return (
    <div className='App'>
      <Pages />
    </div>
  )
}

export default App
