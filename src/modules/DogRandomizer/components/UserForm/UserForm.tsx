import { useContext, useReducer, useState } from "react"
import Button from "../../../../components/Button"
import FormInput from "../../../../components/Form/FormInput"
import { validateEmail } from "../../../../services/email.api"
import { DogRandomizerContext } from "../../hooks/useDogRandomizer"
import styles from "./styles.module.css"

interface iValues {
  userName: string
  userEmail: string
}

const UserForm = () => {
  /**
   * Context
   */
  const ctxDogRandomizer = useContext(DogRandomizerContext)
   /**
   * State
   */
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true)

  const values: iValues = {
    userName: "",
    userEmail: ""
  }

  const [formValues, setFormValues] = useReducer(
    (currentValues: any, newValues: any) =>
      ({ ...currentValues, ...newValues }), values)

  const handleFormChange = (event: { target: { name: string; value: string; }; }) => {
    const { name, value } = event.target
    setFormValues({ [name]: value })
  }

  const handleEmailValidate = () => {
    validateEmail(formValues?.userEmail)
      .then((data) => setIsValidEmail(data?.isValid))
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    return ctxDogRandomizer?.handleUserName(formValues?.userName)
  }

  return (
    <div>
      <div className={styles.error}>
        {isValidEmail ? "" : "Email is invalid."}
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className={styles.container}>
          <FormInput
            name="userEmail"
            label="Email Address"
            type="text"
            value={formValues?.userEmail}
            onChange={handleFormChange}
            onBlur={handleEmailValidate}
          />
          <FormInput
            name="userName"
            label="Name"
            type="text"
            value={formValues?.userName}
            onChange={handleFormChange}
          />
          <Button 
            disabled={formValues?.userName === "" || !isValidEmail}
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export {
UserForm
}
