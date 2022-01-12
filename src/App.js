import { useState } from "react";
import styles from "./App.module.css";
import Form from "./components/Form";
import UsersInfo from "./components/UsersInfo";
import Card from "./components/UI/Card";
import ErrorMessage from "./components/ErrorMessage";
import Button from "./components/UI/Button";

function App() {
  const [userData, setUserData] = useState([]);
  const [invalidValue, setInvalidValue] = useState(false);
  const [invalidAge, setInvalidAge] = useState(false);

  const clickHandler = () => {
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
              <ErrorMessage invalidAge={invalidAge} />

              <Button className={styles.button}>Okay</Button>
            </div>
          </Card>
        </div>
      )}
      <Form
        setUsers={setUserData}
        setInvalidValue={setInvalidValue}
        setInvalidAge={setInvalidAge}
      />
      <UsersInfo userData={userData} />
    </div>
  );
}

export default App;
