import styles from "./styles.module.css"
import { FC, InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const FormInput: FC<Props> = ({ label, ...props }) => {
  return (
    <div
      className={styles.container}
    >
      <span 
        className={styles.label}
      >
        {label}
      </span>
      <input
        className={styles.input}
        {...props}
      />
    </div>
  )
}

export {
  FormInput
}