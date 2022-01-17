const ErrorMessage = props => {
  return (
    <p>
      {props.invalidAge
        ? "Please enter a valid age (> 0 )"
        : "Please enter a valid name and age (non-empty values)."}
    </p>
  );
};

export default ErrorMessage;
