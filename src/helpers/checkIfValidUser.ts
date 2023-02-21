import { asyncLocalStorage } from './../services/asyncLocalStorage'
import { IUser } from '../types'

const checkIfValidUser = async (email: string, password: string) => {
  const usersData = await asyncLocalStorage.getItem('userRecords')
  const user = usersData.find((user: IUser) => user.email === email && user.password === password)
  return Boolean(user)
}

export default checkIfValidUser
