import GameState from "./GameOverState";

function GameOver({gameState}) {
    switch (gameState) {
        case GameState.inProgress:
            return(<></>)
        case GameState.player0Wins:
            return <div className="game-over">O Wins</div>
        case GameState.playerXWins:
            return <div className="game-over">X Wins</div>
        case GameState.draw:
            return <div className="game-over">Draw</div>
        default:
            return <></>
    }
}

export default GameOver;