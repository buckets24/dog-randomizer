import { useCallback, useEffect, useState } from "react"
import { getAllBreeds } from "../../../services/dog.api"
import { extractSimilarArrayValue, getLongestValue } from "../../../utils/compareValues"

const useBreed = (userName: string) => {
  const [breeds, setBreeds] = useState<string[] | null>(null)
  const [breed, setBreed] = useState("")
  /**
   * Holds the values with similar letter ordering
   * as per userName
   * ex: kelpie / kellie = ["kel", "ke", "k"]
   */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const extractedBreedValues: string[] = []

  /**
   * Trim down the Breed array by getting all the breeds that start with
   * first letter of userName
   */
  const filteredBreeds = breeds?.filter((breed) => breed.startsWith(userName[0]))

  /** 
   * Map through the remaining breeds
   * and push the similar values between the userName and the filteredBreeds item.
  */
  filteredBreeds?.map((item) => {
    return extractedBreedValues.push(extractSimilarArrayValue(item, userName))
  })

  /**
   * Get the exact breed name by matching the breed item 
   * to a Reg exp of the longest value in the extractedBreedValues array
   */
  const getBreed = useCallback((value: string) => {
    if (value) {
      return filteredBreeds?.filter(name => name.match(new RegExp(value, "i")))
        .map(name => setBreed(name))
    }
  }, [filteredBreeds])

  useEffect(() => {
    if (userName) {
      getBreed(getLongestValue(extractedBreedValues))
    }
  }, [extractedBreedValues, getBreed, userName])

  /**
   * Get all breeds when this hooks is initialized
   */
  useEffect(() => {
    getAllBreeds()
      .then(({ data }) => setBreeds(data))
  }, [])

  return {
    breed
  }
}

export {
useBreed
}
