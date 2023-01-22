export const getDog = async (breed: string) => {
  const url = `https://dog.ceo/api/breed/${breed}/images/random`

  const response = await fetch(url)
  const data = await response.json()

  return data
}

export const getAllBreeds = async () => {
  const url = `https://dog.ceo/api/breeds/list/all`

  const response = await fetch(url)
  const responseData = await response.json()
  const results = Object.keys(responseData?.message)

  return {
    data: results
  }
}