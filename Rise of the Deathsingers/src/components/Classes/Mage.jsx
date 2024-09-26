import React from "react";

const Mage = ({ onSelect }) => {
  const classInfo = {
    hp: 8,
    type: "Spellcaster",
    level: 1,
    ability: [
      {
        firebolt: "Launch a fiery ball at your target. Deals 5 damage.",
        use: "offense",
        levelReq: 1,
      },
    ],
  };

  return <button onClick={() => onSelect("Mage", classInfo)}>Mage</button>;
};

export default Mage;
