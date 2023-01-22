import { ButtonHTMLAttributes, FC, ReactNode } from "react"
import styles from "./styles.module.css"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={styles.btnDefault}
    >
      {children}
    </button>
  )
}

export {
  Button
}