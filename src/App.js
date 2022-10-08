import Contacts from './components/elements/Contacts/Contacts';
import Header from './components/elements/Header/Header';
import WorkCatalog from './components/elements/WorkCatalog/WorkCatalog';
import ScrollTop from './components/UI/ScrollTop/ScrollTop';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <WorkCatalog />
      <Contacts />
      <ScrollTop />
    </div>
  );
}

export default App;
