import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../providers/AuthProvider/AuthProvider'
import { asyncLocalStorage } from '../../../services/asyncLocalStorage'
import Button from '../../Button'
import FormInput from '../FormInput/FormInput'
import styles from './AccountForm.module.scss'
import { Formik, Form, Field } from 'formik'
import { IUser } from '../../../types'

const AccountForm = () => {
  const { userData } = useAuth()
  const navigate = useNavigate()

  const handleOnSubmit = async (
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    address: string,
    phoneNumber: number,
    experience: number,
  ) => {
    const allUsersData = (await asyncLocalStorage.getItem('userRecords')) as IUser[]
    const newState = allUsersData.filter((user) => user.email !== userData!.email)
    await asyncLocalStorage.setItem('userRecords', [
      ...newState,
      {
        ...userData,
        info: {
          firstName,
          lastName,
          dateOfBirth,
          address,
          phoneNumber,
          experience,
        },
      },
    ])
    return navigate('/')
  }

  return (
    <div className={styles.container}>
      <div className={styles.info_box}>
        <Formik
          initialValues={{
            firstName: userData!.info.firstName,
            lastName: userData!.info.lastName,
            dateOfBirth: userData!.info.dateOfBirth,
            address: userData!.info.address,
            phoneNumber: userData!.info.phoneNumber,
            experience: userData!.info.experience,
          }}
          onSubmit={({ firstName, lastName, dateOfBirth, address, phoneNumber, experience }) => {
            handleOnSubmit(firstName, lastName, dateOfBirth, address, phoneNumber, experience)
          }}
        >
          {() => (
            <Form className={styles.form}>
              <Field
                id='firstName'
                name='firstName'
                placeholder='Imię'
                type='text'
                component={FormInput}
              />
              <Field
                id='lastName'
                name='lastName'
                placeholder='Nazwisko'
                type='text'
                component={FormInput}
              />
              <Field
                id='address'
                name='address'
                placeholder='Adres zamieszkania'
                type='text'
                component={FormInput}
              />
              <Field
                placeholder='Lata doświadczenia'
                type='number'
                id='experience'
                name='experience'
                component={FormInput}
              />
              <Field
                placeholder='Numer telefonu'
                type='number'
                id='phoneNumber'
                name='phoneNumber'
                component={FormInput}
              />
              <Field type='date' id='dateOfBirth' name='dateOfBirth' component={FormInput} />
              <Button type='submit'>Uzupełnij</Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default AccountForm
