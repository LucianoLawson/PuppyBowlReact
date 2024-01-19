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

    const handleSeeDetails = (playerId) => {
        navigate(`/players/${playerId}`); // Use 'playerId' to navigate to details
    };
    const handleCreatePlayer = () => {
        navigate('/new-player'); // Navigate to the player creation form
    };
    const handleDeletePlayer = async (playerId) => {
        if (window.confirm("Are you sure you want to delete this player?")) {
            try {
                const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-pt-web/players/${playerId}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    setPlayers(players.filter(player => player.id !== playerId)); // Remove deleted player from state
                } else {
                    console.error('Failed to delete player');
                }
            } catch (error) {
                console.error('Error deleting player:', error);
            }
        }
};

    const filteredPlayers = players.filter(player =>
        player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <button onClick={handleCreatePlayer} className="create-player-btn">Create a New Player</button>
            <input
                type="text"
                placeholder="Search players"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div>
                {filteredPlayers.map(player => (
                    <div key={player.id} className='player-container'>
                        <span>{player.name}</span>
                        <div>
                            <button className='details-btn' onClick={() => handleSeeDetails(player.id)}>See Details</button>
                            <button className='delete-btn' onClick={() => handleDeletePlayer(player.id)}>Delete Player</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    
}

export default AllPlayers;
