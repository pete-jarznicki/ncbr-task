// @ts-nocheck
import getLocalStorageData from './getLocalStorageData'

const findUserRecordByEmail = (email: string) => {
  const usersData = getLocalStorageData('userRecords')
  return usersData.find((user) => user.email === email)
}

export default findUserRecordByEmail
