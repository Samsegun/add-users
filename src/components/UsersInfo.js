import { useState } from "react";
import Card from "./UI/Card";
import styles from "./UsersInfo.module.css";

const UsersInfo = ({ userData }) => {
  //   const [isEmpty, setIsEmpty] = useState(false);

  //   if (userData.length > 0) {
  //     setIsEmpty(true);
  //   }

  console.log()

  return (
    <Card>
      <div className={`${!userData.length && styles.empty}`}>
        <ul className={styles.list}>
          <li>top</li>
          <li>top</li>
          <li>top</li>
        </ul>
      </div>
    </Card>
  );
};

export default UsersInfo;
