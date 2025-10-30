
export default function GameCard({ game }) {
    return (
        <a href={`./gamedetails.jsx/${game.gameID}`} className="game-card">
            <img src={game.thumb} alt={game.external} />
            <h2>{game.external}</h2>
            <p>Cheapest price: ${game.cheapest}</p>
        </a>
    );
}
