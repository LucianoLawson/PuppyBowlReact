import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AllPlayers() {
    const [players, setPlayers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-pt-web/players')
            .then(response => response.json())
            .then(data => {
                if (data && data.success && data.data && Array.isArray(data.data.players)) {
                    setPlayers(data.data.players);
                } else {
                    console.error('Fetched data is not in expected format:', data);
                }
            })
            .catch(error => console.error('Error fetching players:', error));
    }, []);

    const handleSeeDetails = (id) => {
        navigate(`/players/${id}`);
    };

    const filteredPlayers = players.filter(player =>
        player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search players"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div>
        {filteredPlayers.map(player => (
            <div key={player.id}>
                <span>{player.name}</span>
                <button onClick={() => handleSeeDetails(player.id)}>See Details</button>
            </div>
        ))}
            </div>
        </div>
    );
}

export default AllPlayers;
