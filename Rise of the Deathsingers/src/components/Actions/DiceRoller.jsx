import React, { useState } from "react";

function DiceRoller() {
  const [diceValue, setDiceValue] = useState(1);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    setDiceValue(randomNumber);
  };

  return (
    <div>
      <button onClick={rollDice}>Roll Dice</button>
      <p>You rolled a {diceValue}.</p>
    </div>
  );
}

export default DiceRoller;
