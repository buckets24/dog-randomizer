import styles from './App.module.css';
import DogRandomizer from './modules/DogRandomizer';

function App() {
  return (
    <div className={styles?.appContainer}>
      <DogRandomizer />
    </div>
  )
}

export default App;
