import { useState } from "react";
import styles from "./App.module.css";
import Form from "./components/Form";
import UsersInfo from "./components/UsersInfo";

function App() {
  const [userData, setUserData] = useState([]);

  return (
    <div className={styles.wrapper}>
      <Form setUsers={setUserData} />
      <UsersInfo userData={userData} />
    </div>
  );
}

export default App;
