import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function PlayerDetails() {
    const [player, setPlayer] = useState(null);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-pt-web/players/${id}`)
            .then(response => response.json())
            .then(data => {
                if (data && data.success && data.data && data.data.player) {
                    setPlayer(data.data.player);
                } else {
                    setError('Player details not found');
                }
            })
            .catch(error => {
                setError('Error fetching player details: ' + error.message);
            });
    }, [id]);

    const handleDeletePlayer = async () => {
        if (window.confirm("Are you sure you want to delete this player?")) {
            // Logic to delete a player
        try {
            const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-pt-web/players/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                navigate('/'); // Navigate back to the home page after deletion
            } else {
                console.error('Failed to delete player');
            }
        } catch (error) {
            console.error('Error deleting player:', error);
        }
     } };

    const handleBack = () => {
        navigate('/'); // Navigate back to the home page
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!player) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{player.name}</h1>
            <img src={player.imageUrl} alt={player.name} />
            <p>Name: {player.name}</p>
            <p>Breed: {player.breed}</p>
            <p>Status: {player.status}</p>
            {/* Add other player details as needed */}
            <button onClick={handleBack} id="back-button">Back to Home</button>
            <button onClick={handleDeletePlayer} id="delete-button">Delete Player</button>
        </div>
    );
}

export default PlayerDetails;
