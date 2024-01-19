import { Link } from 'react-router-dom';
import '../index.css'; // Ensure this contains relevant styles for the NavBar

function NavBar() {
    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/players'>Players</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
