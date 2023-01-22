import { FC, useMemo, useState } from "react"
import DogDisplay from "./components/DogDisplay"
import UserForm from "./components/UserForm"
import { useBreed } from "./hooks/useBreed.hook"
import { useDog } from "./hooks/useDog.hook"
import { DogRandomizerProvider } from "./hooks/useDogRandomizer"
import styles from "./styles.module.css"

const DogRandomizer: FC = () => {
  /**
   * State
   */
  const [userName, setUserName] = useState("")

  /**
   * Hooks
   */
  const { breed } = useBreed(userName)
  const { dog, isLoading } = useDog(breed)

  const handleUserName = (value: string) => {
    setUserName(value)
  }

  /**
   * Memoized the provider values
   */
  const memoizedValues = useMemo(() => ({
    breed,
    imageUrl: dog?.message ?? "",
    userName,
    isLoading: isLoading,
    handleUserName
  }), [breed, dog?.message, isLoading, userName])

  return (
    <DogRandomizerProvider value={memoizedValues}>
      <div className={styles.container}>
        <DogDisplay />
        <UserForm />
      </div>
    </DogRandomizerProvider>
  )
}

export {
DogRandomizer
}
