import { FC, InputHTMLAttributes } from "react"
import styles from "./styles.module.css"

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
        {...props}
      />
    </div>
  )
}

export {
FormInput
}
