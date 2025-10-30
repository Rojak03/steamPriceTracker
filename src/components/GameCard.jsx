import { Link } from "react-router-dom";
export default function GameCard({ game }) {
    return (
        <div className="game-card">
            <Link to={`/gamedetails/${game.gameID}`}>
                <img src={game.thumb} alt={game.external} />
                <h2>{game.external}</h2>
                <p>Cheapest price: ${game.cheapest}</p>
            </Link>
        </div>
    );
}
