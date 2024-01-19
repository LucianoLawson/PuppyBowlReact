import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewPlayerForm() {
    const [playerName, setPlayerName] = useState('');
    const [playerBreed, setPlayerBreed] = useState('');
    const [playerImageUrl, setPlayerImageUrl] = useState('');
    const [playerStatus, setPlayerStatus] = useState(''); // State variable for player status

    const navigate = useNavigate();

    // Function to handle the form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const newPlayer = {
            name: playerName,
            breed: playerBreed,
            imageUrl: playerImageUrl,
            status: playerStatus, // Include player status in the new player data
            // Add other attributes here
        };

        // Send a POST request to the API to create a new player
        try {
            const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-pt-web/players', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPlayer),
            });

            if (response.ok) {
                console.log('Player created successfully:', newPlayer);
                setPlayerName('');
                setPlayerBreed('');
                setPlayerImageUrl('');
                setPlayerStatus(''); // Reset the player status field
                navigate('/'); // Navigate to home page after successful creation
            } else {
                console.error('Failed to create player');
            }
        } catch (error) {
            console.error('Error creating player:', error);
        }
    };

    // Function to handle navigation back to the home page
    const handleBackToHome = () => {
        navigate('/'); // Navigate back to the home page
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Player Name:
                <input type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
            </label>
            <label>
                Player Breed:
                <input type="text" value={playerBreed} onChange={(e) => setPlayerBreed(e.target.value)} />
            </label>
            <label>
                Player Image URL:
                <input type="text" value={playerImageUrl} onChange={(e) => setPlayerImageUrl(e.target.value)} />
            </label>
            <label>
                Player Status:
                <input type="text" value={playerStatus} onChange={(e) => setPlayerStatus(e.target.value)} />
            </label>
            <button className="submit">Create Player</button>
            <button className="button" onClick={handleBackToHome}>Back</button>
        </form>
    );
}

export default NewPlayerForm;
