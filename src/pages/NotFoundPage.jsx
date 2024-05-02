import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
        <h1>Sorry, the page you were looking for was not found</h1>
        <Link to="/">Go Home</Link>
        </div>
    );
};

export default NotFoundPage;