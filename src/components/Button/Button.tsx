// @ts-nocheck
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const Button = ({ onClick, children, type, href }: any) => {
  return href ? (
    <Link className={styles.button} to={href}>
      {children}
    </Link>
  ) : (
    <button className={styles.button} onClick={onClick} type={type}>
      {children}
    </button>
  )
}

export default Button
