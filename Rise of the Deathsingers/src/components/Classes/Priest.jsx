import React from "react";

const Priest = ({ onSelect }) => {
  const classInfo = {
    hp: 8,
    type: "Spellcaster",
    level: 1,
    ability: [
      {
        heal: "Restore 5 health to an ally.",
        use: "support",
        levelReq: 1,
      },
    ],
  };

  return <button onClick={() => onSelect("Priest", classInfo)}>Priest</button>;
};

export default Priest;
