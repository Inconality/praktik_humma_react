import { Link } from "react-router";

const NotFound = () => {
    return(
        <div className="not-found">
            <h1 className="not-found-text">Halaman yang anda cari tidak dapat ditemukan.</h1>
            <Link className="btn-back" to={"/"}>Go back</Link>
        </div>
    );
}

export default NotFound;
