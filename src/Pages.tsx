import { Route, Routes } from 'react-router-dom'
import Account from './components/Account/Account'
import AccountForm from './components/Forms/AccountForm'
import Login from './components/Login'
import ProtectedRoutes from './components/ProtectedRoutes'

const Pages = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path='/' element={<Account />} />
        <Route path='/account-form' element={<AccountForm />} />
      </Route>
    </Routes>
  )
}

export default Pages
