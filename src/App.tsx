import { useEffect } from 'react'
import LoginForm from './components/Forms/LoginForm'
import setLocalStorageItem from './helpers/setLocalStorageItem'

const initialLocalStorageState = [{ email: 'example@gmail.com', password: '123456' }]

const App = () => {
  // A helper so I don't have to type it in manually.
  useEffect(() => {
    setLocalStorageItem('userRecords', initialLocalStorageState)
  }, [])

  return (
    <div className='App'>
      <LoginForm />
    </div>
  )
}

export default App
