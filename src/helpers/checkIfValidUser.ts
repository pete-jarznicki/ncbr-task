import { IUser } from '../types'
import getLocalStorageData from './getLocalStorageData'

const checkIfValidUser = (email: string, password: string): boolean => {
  const usersData = getLocalStorageData('userRecords')
  const user = usersData.find((user: IUser) => user.email === email && user.password === password)
  return Boolean(user)
}

export default checkIfValidUser
