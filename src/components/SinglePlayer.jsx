import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SinglePlayer() {
    const [player, setPlayer] = useState(null);
    const { id } = useParams(); // Retrieve the player ID from the URL

    useEffect(() => {
        // Fetch player details based on the ID
        fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-pt-web/players/${id}`)
            .then(response => response.json())
            .then(data => setPlayer(data))
            .catch(error => console.error('Error fetching player details:', error));
    }, [id]);

    if (!player) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{player.name}</h2>
            {/* Add more player details here */}
        </div>
    );
}

export default SinglePlayer;
