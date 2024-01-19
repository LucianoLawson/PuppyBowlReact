import { Link } from 'react-router-dom'

function nav() {
    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/players'>Players</Link></li>
            </ul>
        </nav>
    )
}

export default nav