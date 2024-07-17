import { Link } from "react-router-dom";

import errorImg from "../../assets/404.gif"
const ErrorElement = () => {
    return (
        <div className="max-w-6xl mx-auto p-10">

            <img src={errorImg} alt="" />

            
            <Link to="/" className="btn btn-primary text-white font-cursive items-center text-center">Go to Home</Link>
            
        </div>
    );
};

export default ErrorElement;