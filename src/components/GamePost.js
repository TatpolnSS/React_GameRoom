import "./GamePost.css";

function GamePost(props) {
  const { game, onBgClick } = props;
  return (
    <div className="game-post">
      <div className="game-post-bg" onClick={onBgClick}></div>
      <div className="game-post-content">
        <img src={game.thumbnailUrl} />
        <h4>{game.title}</h4>
      </div>
    </div>
  );
}

export default GamePost;
