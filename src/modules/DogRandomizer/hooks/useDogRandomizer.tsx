import React, { ReactNode } from "react"

interface DogRandomizerProviderContextProps {
  breed: string
  userName: string
  imageUrl: string
  isLoading: boolean
  handleUserName: (userName: string) => void
}

export const DogRandomizerContext = React.createContext<DogRandomizerProviderContextProps | null>(null)

const DogRandomizerProvider = (props: { value: DogRandomizerProviderContextProps, children: ReactNode }) => {
  return (
    <DogRandomizerContext.Provider
      {...props}
    >
      {props.children}
    </DogRandomizerContext.Provider>
  )
}

const useDogRandomizer = () => {
  const context = React.useContext(DogRandomizerContext)
  if (context === undefined) {
    throw new Error("useDogRandomizer must be used within the DogRandomizerContext Provider.")
  }

  return context
}

export { DogRandomizerProvider, useDogRandomizer }
