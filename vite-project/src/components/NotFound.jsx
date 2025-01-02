import { useRouteError } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const err = useRouteError();
  return (
    <div className="error-container">
      <h1>Oops! Something Went Wrong</h1>
      <p className="error-message">It seems like you've hit a wrong path. Don't worry, let's get you back on track!</p>
      <div className="error-details">
        <p>
          <strong>Error Code:</strong> {err.status || "Unknown"}
        </p>
        <p>
          <strong>Message:</strong> {err.statusText || "No status text available"}
        </p>
        {err.data && <p><strong>Details:</strong> {err.data}</p>}
      </div>
      <a href="/" className="error-link">Go to Homepage</a>
    </div>
  );
}

export default NotFound;
