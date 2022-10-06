import styles from './App.module.scss';
import WorkCatalog from './components/elements/WorkCatalog/WorkCatalog';

function App() {
  return (
    <div className={styles.app}>
      <WorkCatalog />
    </div>
  );
}

export default App;
