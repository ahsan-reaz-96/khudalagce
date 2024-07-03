import { Link } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div>

            <h1>Data is not found</h1>
            <Link to="/">Go to Home</Link>
            
        </div>
    );
};

export default ErrorElement;