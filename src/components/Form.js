import Card from "./UI/Card";
import Button from "./UI/Button";
import styles from "./Form.module.css";
import { useState } from "react";

const Form = props => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const formSubmitHandler = Event => {
    Event.preventDefault();

    if (enteredName.trim().length > 0 && enteredAge > 0) {
      props.setUsers(prev =>
        prev.concat({
          userName: enteredName,
          userAge: enteredAge,
          id: Math.random(),
        })
      );
    } else if (enteredAge < 0) {
      props.setInvalidAge(true);
      props.setInvalidValue(true);
    } else {
      props.setInvalidAge(false);
      props.setInvalidValue(true);
    }

    setEnteredName("");
    setEnteredAge("");
  };

  const userNameHandler = Event => {
    setEnteredName(Event.target.value);
  };

  const ageHandler = Event => {
    setEnteredAge(+Event.target.value);
  };

  return (
    <div className={styles["form-wrapper"]}>
      <Card>
        <form onSubmit={formSubmitHandler}>
          <div className={styles["form-control-group"]}>
            <label htmlFor="username">Username</label>
            <input
              value={enteredName}
              type="text"
              id="username"
              onChange={userNameHandler}
            />
          </div>

          <div className={styles["form-control-group"]}>
            <label htmlFor="age">Age(Years)</label>
            <input
              value={enteredAge}
              type="number"
              id="age"
              onChange={ageHandler}
            />
          </div>

          <Button>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default Form;
