import { useState, useEffect } from 'react'
import './App.css'
import Board from './Board'

const playerX = "X";
const playerO = "O";

const winningCombos = []

function checkWinner(){
  console.log("winner")
}

function App() {
  
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(playerX);
  const [strikeClass, setStrikeClass] = useState();

  const handleTileClick = (index) => {
    if(tiles[index] === null){
      const newTiles = [...tiles];
      newTiles[index] = playerTurn;
      setTiles(newTiles);
      
      if (playerTurn === playerX){
        setPlayerTurn(playerO)
      } else {
        setPlayerTurn(playerX)
      }
    }
  };

  useEffect(() => {
    checkWinner()
  }, [tiles])

  return(
    <div>
      <h1>Tic Tac Toe</h1>
      <Board playerTurn={playerTurn} tiles={tiles} onTileClick={handleTileClick} strikeClass={strikeClass}/>
    </div>
  );
}

export default App
