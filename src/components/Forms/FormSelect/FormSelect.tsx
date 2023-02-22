// @ts-nocheck
import styles from './FormSelect.module.scss'
const FormSelect = ({ defaultValue, placeholder, name, id, children }: any) => {
  return (
    <select
      className={styles.select}
      defaultValue={defaultValue}
      placeholder={placeholder}
      name={name}
      id={id}
    >
      {children}
    </select>
  )
}

export default FormSelect
