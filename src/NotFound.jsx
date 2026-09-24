import { Link } from "react-router";

const NotFound = () => {
    return(
        <div>
            <h1>The page you're looking for doesn't exist</h1>
            <Link to={"/"}>
                <button>Go Back</button>
            </Link>
        </div>
    );
}

export default NotFound;
