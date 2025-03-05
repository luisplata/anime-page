import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="container text-center mt-5">
            <h1>404 - Not Found</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="btn btn-primary">Go Home</Link>
        </div>
    );
};

export default NotFoundPage;
