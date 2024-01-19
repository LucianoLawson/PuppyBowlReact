import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PlayerDetails() {
    const [player, setPlayer] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-pt-web/players/${id}`)
            .then(response => response.json())
            .then(data => {
                if (data && data.success && data.data) {
                    setPlayer(data.data); // Assuming data.data contains the player details
                } else {
                    console.error('Player details not found');
                }
            })
            .catch(error => console.error('Error fetching player details:', error));
    }, [id]);

    if (!player) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{player.name}</h1>
            <img src={player.imageUrl} alt={player.name} />
            {/* Add other player details here */}
        </div>
    );
}

export default PlayerDetails;
