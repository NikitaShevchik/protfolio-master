import Contacts from './components/elements/Contacts/Contacts';
import Header from './components/elements/Header/Header';
import WorkCatalog from './components/elements/WorkCatalog/WorkCatalog';
import ScrollToTop from './components/UI/ScrollTop/ScrollToTop';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <WorkCatalog />
      <Contacts />
      <ScrollToTop />
    </div>
  );
}

export default App;
