import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router";

function Header(){
    const [isAuth, setIsAuth] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAuth(Boolean(token));
    }, [location]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuth(false);
        navigate('/');
    }

    return(
        <header className='header'>
            <div className='header-brand'>
                <h2>My Website</h2>
            </div>
            <nav className="navbar">
                <NavLink className='nav-link' to="/">Home</NavLink>
                <NavLink className='nav-link' to="/about">About</NavLink>
                <NavLink className='nav-link' to="/contact">Contact</NavLink>
                {isAuth && (<NavLink className='nav-link' to="/dashboard">Dashboard</NavLink>)}
                <div className="auth">
                    {isAuth ? (
                        <button className="auth-button" onClick={handleLogout}>Logout</button>
                    ) : (
                        <NavLink to="/login"><button className="auth-button">Login</button></NavLink>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Header;