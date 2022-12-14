// This component is communicating with backend and catch the BadRequestBehavior.cs from (APIBehaviour) backend and display the list of errors
export default function DisplayError(props: displayErrorsProps) {
  const style = { color: "red" };

  return (
    <>
      {props.errors ? (
        <ul style={style}>
          {props.errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

interface displayErrorsProps {
  errors?: string[];
}
