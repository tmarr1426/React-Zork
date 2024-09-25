import { useState, useEffect } from "react";
import "./App.css";
import { Warrior, Mage, Priest, Rogue, Adventure } from "./index";

function App() {
  // State tracking for starting the game
  const [start, setStart] = useState(false);
  // State tracking for player class
  const [playerClass, setPlayerClass] = useState(null);

  // Function to start the game
  const gameStart = (start) => {
    console.log(start);
    setStart(true);
    console.log(start);
  };
  const gameClose = (start) => {
    console.log(start);
    setStart(false);
    setPlayerClass(null);
    console.log(start);
    console.log(playerClass);
  };

  const selectClass = (chosenClass) => {
    setPlayerClass(chosenClass);
    console.log(`You have chosen: ${chosenClass}`);
  };

  return (
    <div className="App">
      {/* Conditional rendering based on whether the game has started and a class has been chosen*/}
      {!start ? (
        <>
          <div>
            <h1>Welcome to The Rise of the Deathsingers.</h1>
            <p>Are you ready to begin your adventure?</p>
          </div>
          <div>
            <button onClick={gameStart}>Start</button>
          </div>
        </>
      ) : start && !playerClass ? (
        <>
          <div>Choose your class to begin the adventure:</div>
          <div>
            <Warrior onSelect={selectClass} />

            <Mage onSelect={selectClass} />

            <Rogue onSelect={selectClass} />

            <Priest onSelect={selectClass} />
          </div>
        </>
      ) : (
        <div>
          <Adventure playerClass={playerClass} />
        </div>
      )}
      <div>
        <button onClick={gameClose}>Exit</button>
      </div>
    </div>
  );
}

export default App;
