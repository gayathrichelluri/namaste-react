import { useRouteError } from "react-router-dom";
import './index.css';

const Error = () => {
    const error = useRouteError();

    return (
        <div className="error-container">
            <h1 className="error-title">Oops! Something went wrong :(</h1>
            <h2 className="error-status">{error.status} - {error.statusText}</h2>
            <h3 className="error-data">{error.data}</h3>
        </div>
    )
}

export default Error;