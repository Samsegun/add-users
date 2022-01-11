import { useState } from "react";
import styles from "./App.module.css";
import Form from "./components/Form";
import UsersInfo from "./components/UsersInfo";

function App() {
  const [userData, setUserData] = useState([]);
  const [invalidValue, setInvalidValue] = useState(false);

  console.log(userData);

  return (
    <div className={styles.wrapper}>
      {invalidValue && <div className={styles.backdrop}></div>}
      <Form setUsers={setUserData} setInvalidValue={setInvalidValue} />
      <UsersInfo userData={userData} />
    </div>
  );
}

export default App;
