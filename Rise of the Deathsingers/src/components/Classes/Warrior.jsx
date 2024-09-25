import React from "react";

const Warrior = ({ onSelect }) => {
  const classInfo = {
    hp: 10,
    type: "Martial",
    level: 1,
    ability: [
      {
        bulwark:
          "Stand your ground and brace for damage. Reduce incoming damage to 0.",
        use: "defense",
        levelReq: 1,
      },
    ],
  };

  return <button onClick={() => onSelect("Warrior")}>Warrior</button>;
};

export default Warrior;
