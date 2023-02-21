import { useEffect } from 'react'
import setLocalStorageItem from './helpers/setLocalStorageItem'
import Pages from './Pages'

const initialLocalStorageState = [{ email: 'example@gmail.com', password: '123456' }]

const App = () => {
  // A helper so I don't have to type in manually.
  // useEffect(() => {
  //   setLocalStorageItem('userRecords', initialLocalStorageState)
  // }, [])

  return (
    <div className='App'>
      <Pages />
    </div>
  )
}

export default App
