import { useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import Gameitem from "./components/GameItem";
import GamePost from "./components/GamePost";
import games from "./data/games";
import AppSearch from "./components/AppSearch";

function App() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [favoritedGames, setFavoritedGames] = useState(games);
  const [filterMode, setFilterMode] = useState("all");
  const [showSettings, setShowSettings] = useState(false);

  function onGameOpenClicked(theGame) {
    setSelectedGame(theGame);
  }

  function onGameCloseClicked() {
    setSelectedGame(null);
  }

  function toggleFavorite(id) {
    setFavoritedGames((prev) =>
      prev.map((game) =>
        game.id === id ? { ...game, isFavorite: !game.isFavorite } : game
      )
    );
  }

  const displayedGames = (
    filterMode === "favorites"
      ? favoritedGames.filter((g) => g.isFavorite)
      : favoritedGames
  ).filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const gameElements = displayedGames.map((game, index) => (
    <Gameitem
      key={index}
      game={game}
      onGameClick={onGameOpenClicked}
      onToggleFavorite={() => toggleFavorite(game.id)} // ✅ Important: pass specific ID
    />
  ));

  let gamePost = null;
  if (!!selectedGame) {
    gamePost = <GamePost game={selectedGame} onBgClick={onGameCloseClicked} />;
  }

  return (
    <div className="App">
      <AppHeader />

      <div className="app-body">
        <nav className="sidebar">
          <div className="sidebar-header">
            <span className="icon">
              <img src="/images/game_logo.png"></img>
            </span>
            <span className="title">Menu</span>
          </div>
          <div className="sidebar-divider"></div>
          <ul>
            <li onClick={() => setFilterMode("all")}>
              <span className="icon">🏆</span>
              <span className="title">All Games</span>
            </li>
            <li onClick={() => setFilterMode("favorites")}>
              <span className="icon">⭐</span>
              <span className="title">Favorites</span>
            </li>
            <li onClick={() => setShowSettings(true)}>
              <span className="icon">⚙️</span>
              <span className="title">Settings</span>
            </li>
          </ul>
        </nav>
        <section className="app-section">
          <div className="app-layout">
            <div className="app-container">
              <AppSearch value={searchTerm} onValueChange={setSearchTerm} />
              <div className="app-grid">{gameElements}</div>
            </div>
          </div>
        </section>

        {gamePost}
      </div>
      {showSettings && (
        <div className="settings-modal" onClick={() => setShowSettings(false)}>
          <div
            className="settings-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Settings</h3>
            <p>This is a mock up settings </p>
            <button onClick={() => setShowSettings(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
