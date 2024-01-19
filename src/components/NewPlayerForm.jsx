import { useState } from 'react';

function NewPlayerForm() {
    const [playerName, setPlayerName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Logic to send playerName to the API to create a new player
        // Example: fetch('https://example.com/api/players', { method: 'POST', body: JSON.stringify({ name: playerName }) })
        console.log('Creating player:', playerName);
        setPlayerName(''); // Resetting the form field after submission
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Player Name:
                <input type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
            </label>
            <button type="submit">Create Player</button>
        </form>
    );
}

export default NewPlayerForm;
