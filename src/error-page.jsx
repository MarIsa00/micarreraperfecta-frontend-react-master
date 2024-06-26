import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Ups!</h1>
      <p>No pudimos encontrar lo que estabas buscando</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}