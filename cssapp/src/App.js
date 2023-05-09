
import styles from './App.module.css';
import Header from './molecule/Header';
import Gallery from './molecule/Hero1';

function App() {
  return (
    <div className={styles.App}>

      <Header/>
      <Gallery/>
    </div>
  );
}

export default App;
