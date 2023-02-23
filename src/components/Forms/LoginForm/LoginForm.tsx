import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import checkIfValidUser from '../../../helpers/checkIfValidUser'
import { asyncLocalStorage } from '../../../services/asyncLocalStorage'
import Button from '../../Button'
import FormInput from '../FormInput/FormInput'
import styles from './LoginForm.module.scss'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Wprowadź poprawny adres email').required('Wprowadź adres email'),
  password: Yup.string().min(6, 'Hasło jest zbyt krótkie').required('Wprowadź hasło'),
})

const LoginForm = () => {
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleOnSubmit = async (email: string, password: string) => {
    const isValidUser = await checkIfValidUser(email, password)
    if (isValidUser) {
      await asyncLocalStorage.setItem('auth', { email })
      return navigate('/')
    }
    setError(true)
  }

  return (
    <>
      <Formik
        initialValues={{
          password: '',
          email: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={({ email, password }) => {
          handleOnSubmit(email, password)
        }}
      >
        {() => (
          <Form className={styles.container}>
            <p className={styles.cred_info}>Email: testuser@gmail.com, hasło: testuser123</p>

            <Field placeholder='Adres email' type='email' name='email' component={FormInput} />
            <ErrorMessage name='email' />
            <Field placeholder='Hasło' type='password' name='password' component={FormInput} />
            <ErrorMessage name='password' />
            <Button type='submit'>Zaloguj się</Button>
            {error ? <p>Użytkownik nie istnieje, spróbuj jeszcze raz</p> : ''}
          </Form>
        )}
      </Formik>
    </>
  )
}

export default LoginForm
