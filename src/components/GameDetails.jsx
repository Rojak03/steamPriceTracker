import React, { useState, useEffect } from 'react';
import { getGameDetails } from '../services/cheapshark.js';

export default function GameDetails({ game }) {
    const [details, setDetails] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getGameDetails(game.gameID);
            setDetails(result);
        };
        fetchData();
    }, [game.gameID]);

    return (
        <div className="game-details">
            {details ? (
                <>
                    <h1>{details.external}</h1>
                    <img src={details.thumb} alt={details.external} />
                    <p>Cheapest price: ${details.cheapest}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    ); 
}
