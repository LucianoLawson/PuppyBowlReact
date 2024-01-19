import { useState, useEffect } from 'react';

function AllPlayers() {
    const [players, setPlayers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Fetch players from API
        fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-pt-web/')
         .then(response => response.json())
         .then(data => setPlayers(data.players));
    }, []);

    const filteredPlayers = players.filter(player =>
        player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredPlayers(
        <div>
            <input type="text" placeholder="Search players" onChange={(e) => setSearchTerm(e.target.value)} />
            {/* Render filteredPlayers */}
        </div>
    );
}

export default AllPlayers
