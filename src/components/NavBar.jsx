import { Link } from 'react-router-dom';
import '../index.css'; // Ensure this contains relevant styles for the NavBar
import { playerId } from './AllPlayers'

function NavBar() {
    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/players'>Players</Link></li>
                <Link to={`/players/${playerId}`}>View Details</Link>
            </ul>
        </nav>
    );
}

export default NavBar;
