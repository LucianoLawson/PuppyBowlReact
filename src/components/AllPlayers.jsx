import { useState, useEffect } from 'react';

function AllPlayers() {
    const [players, setPlayers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-pt-web/players')
            .then(response => response.json())
            .then(data => {
                // Assuming 'data' is an array of players
                setPlayers(data);
            })
            .catch(error => console.error('Error fetching players:', error));
    }, []);

    const filteredPlayers = players.filter(player =>
        player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input type="text" placeholder="Search players" onChange={(e) => setSearchTerm(e.target.value)} />
            <div>
                {filteredPlayers.map(player => (
                    <div key={player.id}>
                        <span>{player.name}</span>
                        <button>See Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllPlayers;
