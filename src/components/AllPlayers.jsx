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
        navigate(`/players/${playerId}`);
    };

    const handleCreatePlayer = () => {
        navigate('/new-player'); // Navigate to the player creation form
    };

    const handleDeletePlayer = async (playerId) => {
        if (window.confirm("Are you sure you want to delete this player?")) {
            // Logic to delete a player
        try {
            const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-pt-web/players/${playerId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // Update the state to remove the deleted player
                setPlayers(currentPlayers => currentPlayers.filter(player => player.id !== playerId));
            } else {
                console.error('Failed to delete player');
            }
        } catch (error) {
            console.error('Error deleting player:', error);
        }
    }};

    const filteredPlayers = players.filter(player =>
        player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <button onClick={handleCreatePlayer}>Create a New Player</button>
            <input
                type="text"
                placeholder="Search players"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div>
                {filteredPlayers.map(player => (
                    <div key={player.id} className='player-container'>
                        <span>{player.name}</span>
                        <button onClick={() => handleSeeDetails(player.id)}>See Details</button>
                        <button onClick={() => handleDeletePlayer(player.id)}>Delete Player</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllPlayers;
