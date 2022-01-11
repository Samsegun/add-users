import Card from "./UI/Card";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <Card>
      <form>
        <div className={styles["form-control-group"]}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>

        <div className={styles["form-control-group"]}>
          <label htmlFor="age">Age(Years)</label>
          <input type="number" id="age" />
        </div>

        <button>Add User</button>
      </form>
    </Card>
  );
};

export default Form;
