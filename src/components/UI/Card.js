import styles from "./Card.module.css";

const Card = props => {
  // add extra classes where necessary
  const classes = `${styles.card} ${props.className ? props.className : ""}`;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
