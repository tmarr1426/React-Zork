import React from "react";

const Rogue = ({ onSelect }) => {
  const classInfo = {
    hp: 8,
    type: "Martial",
    level: 1,
    ability: [
      {
        sneakAttack: "Attack an enemy from the shadows. Deals double damage.",
        use: "offense",
        levelReq: 1,
      },
    ],
  };

  return <button onClick={() => onSelect("Rogue", classInfo)}>Rogue</button>;
};

export default Rogue;
