import "./GameItem.css";

function Gameitem({ game, onGameClick, onToggleFavorite }) {
  return (
    <div className="game-card">
      <img
        className="game-item"
        src={game.thumbnailUrl}
        alt={game.title}
        onClick={() => onGameClick(game)}
      />
      <div className="game-info">
        <h4>
          {game.title}
          <button onClick={onToggleFavorite} className="fav-button">
            {game.isFavorite ? "⭐" : "☆"}
          </button>
        </h4>
      </div>
    </div>
  );
}

export default Gameitem;
