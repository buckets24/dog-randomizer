import { useEffect, useState } from "react"
import { getDog } from "../../../services/dog.api"

interface iDog { 
  status: string, 
  message: string
}

const useDog = (breed: string) => {
  /**
   * State
   */
  const [dog, setDog] = useState<iDog | null>(null)
  const [isLoading, setLoading] = useState<boolean>(false)

  const fetchRandomDog = async (breed: string) => {
    setLoading(true)
    /**
     * extract the data object and assign it to dog state
     */
    await getDog(breed)
      .then(data => {
        setDog(data)
        setLoading(false)
      })
      .catch(() => {
        setDog(null)
        setLoading(false)
      })
  }

  useEffect(() => {
    breed && fetchRandomDog(breed)
  }, [breed])

  return {
    dog,
    isLoading
  }
}

export {
useDog
}
