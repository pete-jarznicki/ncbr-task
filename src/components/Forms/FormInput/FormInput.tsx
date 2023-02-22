// @ts-nocheck
import styles from './FormInput.module.scss'
const FormInput = ({ id, name, placeholder, type, defaultValue }: any) => {
  return (
    <input
      defaultValue={defaultValue}
      className={styles.container}
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
    />
  )
}

export default FormInput
