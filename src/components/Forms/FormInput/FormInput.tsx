import styles from './FormInput.module.scss'

interface IFormInputProps {
  field: { name: string; onBlur: () => void; onChange: () => void; value: '' }
}

const FormInput = ({ field, ...props }: IFormInputProps) => {
  return <input className={styles.input} {...field} {...props} />
}

export default FormInput
