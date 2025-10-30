//TODO: CREATE HTML FOR SEARCH BAR COMPONENT
//ADD API CALL
import React from 'react';
import { useState } from 'react';
import {getGamesByTitle} from '../services/cheapshark.js';
import GameCard from './GameCard.jsx';


export default function SearchBar() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        const results = await getGamesByTitle(query);
        setResults(results);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search for a game..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            {results.map((game) => (
                <GameCard key={game.gameID} game={game} />
            ))}
        </div>
    );
}
