import { FC, useContext } from "react"
import { DogRandomizerContext } from "../../hooks/useDogRandomizer"
import styles from "./styles.module.css"

const DogDisplay: FC = () => {
  const ctxDogRandomizer = useContext(DogRandomizerContext)

  const defaultImage = "/DogPlaceholder.svg"
  const displayImageUrl = ctxDogRandomizer?.imageUrl ? ctxDogRandomizer?.imageUrl : defaultImage

  return (
    <div>
      <div className={styles.dogDisplayContainer}>
        {ctxDogRandomizer?.breed ?
          <div className={styles.titleContainer}>
            <h3 className={styles.title}>{ctxDogRandomizer?.breed}</h3>
          </div> : null}
        
        {ctxDogRandomizer?.isLoading ? (
          <img
            src={defaultImage}
            alt={defaultImage}
            style={{ width: "100%" }}
          />
        ) : (
          <img
            src={displayImageUrl}
            alt={displayImageUrl}
            style={{ width: "100%" }}
          />)}
      </div>
    </div>
  )
}

export {
  DogDisplay
}