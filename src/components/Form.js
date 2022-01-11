import Card from "./UI/Card";
import Button from "./UI/Button";
import styles from "./Form.module.css";
import { useState } from "react";

const Form = props => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState();

  const formSubmitHandler = Event => {
    Event.preventDefault();

    if (enteredName.trim().length > 0 && enteredAge > 0) {
      console.log(enteredAge, enteredName);
      props.setUsers(prev =>
        prev.concat({
          userName: enteredName,
          userAge: enteredAge,
          id: Math.random(),
        })
      );
    }
  };

  const userNameHandler = Event => {
    setEnteredName(Event.target.value);
  };

  const ageHandler = Event => {
    setEnteredAge(parseInt(Event.target.value));
  };

  return (
    <Card>
      <form onSubmit={formSubmitHandler}>
        <div className={styles["form-control-group"]}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" onChange={userNameHandler} />
        </div>

        <div className={styles["form-control-group"]}>
          <label htmlFor="age">Age(Years)</label>
          <input type="number" id="age" onChange={ageHandler} />
        </div>

        <Button>Add User</Button>
      </form>
    </Card>
  );
};

export default Form;
