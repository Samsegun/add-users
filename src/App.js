import { useState } from "react";
import styles from "./App.module.css";
import Form from "./components/Form";
import UsersInfo from "./components/UsersInfo";
import Card from "./components/UI/Card";
import Button from "./components/UI/Button";

function App() {
  const [userData, setUserData] = useState([]);
  const [invalidValue, setInvalidValue] = useState(false);

  console.log(userData);

  const clickHandler = Event => {
    // console.dir(Event.target);
    console.log("fg");
    setInvalidValue(false);
  };

  return (
    <div className={styles.wrapper}>
      {invalidValue && (
        <div className={styles.backdrop} onClick={clickHandler}>
          <Card className={styles.modal}>
            <h3>Invalid input</h3>
            <div className={styles["modal-wrapper"]}>
              <p>Please enter a valid name and age (non-empty values).</p>
              <Button className={styles.button}>Okay</Button>
            </div>
          </Card>
        </div>
      )}
      <Form setUsers={setUserData} setInvalidValue={setInvalidValue} />
      <UsersInfo userData={userData} />
    </div>
  );
}

export default App;
