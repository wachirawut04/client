import { Link, useLocation } from "react-router-dom";
import './NavBar.css';
import SearchBar from "./SearchBar";

export default function NavBar() {
    const location = useLocation();

    return (
        <header className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <i className="fa-solid fa-building-columns" style={{ marginRight: '8px' }}></i>
                </Link>
            </div>

            <div className="navbar-search">
                <SearchBar />
            </div>

            <div className="navbar-link">
                <Link
                    to="/graph"
                    className={location.pathname === '/graph' ? 'active' : ''}
                >
                    Graph
                </Link>
                <Link
                    to="/forex"
                    className={location.pathname === '/forex' ? 'active' : ''}
                >
                    Market
                </Link>
            </div>

            <div className="navbar-user">
                <Link to="/user">
                    EN <i className="fa-solid fa-globe"></i>
                </Link>
                <Link to="/user">
                    <i className="fa-solid fa-user"></i>
                </Link>
            </div>
        </header>
    );
}
