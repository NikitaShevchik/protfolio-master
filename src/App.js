import styles from './App.module.scss';
import Contacts from './components/elements/Contacts/Contacts';
import Header from './components/elements/Header/Header';
import WorkCatalog from './components/elements/WorkCatalog/WorkCatalog';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <WorkCatalog />
      <Contacts />
    </div>
  );
}

export default App;
