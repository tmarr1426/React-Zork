import React, { useState } from "react";

function DiceRoller() {
  const [diceValue, setDiceValue] = useState(1);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDiceValue(randomNumber);
  };

  return (
    <div>
      <h1>Dice Roller</h1>
      <button onClick={rollDice}>Roll Dice</button>
      <p>You rolled a {diceValue}.</p>
    </div>
  );
}

export default DiceRoller;
