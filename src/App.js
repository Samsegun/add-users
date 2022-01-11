import styles from "./App.module.css";
import Comp from "./components/Comp";

function App() {
  return (
    <div>
      <div className={styles.App}>
        <p>heo</p>
      </div>
      <div className={styles.we}>
        <p>wendy</p>
      </div>
      <Comp />
    </div>
  );
}

export default App;
