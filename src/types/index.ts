export interface IUser {
  email: string
  password: string
  info: {
    firstName: string
    lastName: string
    dateOfBirth: string
    address: string
    phoneNumber: number
    experience: number
  }
}
