import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

interface IButtonProps {
  onClick?: () => void
  children: ReactNode
  type?: 'submit' | 'reset' | 'button'
  href?: string
}

const Button = ({ onClick, children, type, href }: IButtonProps) => {
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
