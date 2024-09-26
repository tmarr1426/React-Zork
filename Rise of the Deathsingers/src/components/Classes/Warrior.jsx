import React from "react";

const Warrior = ({ onSelect }) => {
  const classInfo = {
    character: Warrior,
    hp: 10,
    type: "Martial",
    level: 1,
    ability: [
      {
        Bulwark:
          "Stand your ground and brace for damage. Reduce incoming damage to 0.",
        use: "defense",
        levelReq: 1,
      },
    ],
    equipment: [
      {
        Longsword: "A typical longsword utilized by most fighters",
        Damage: 3,
        Special: null,
      },
      {
        Shield: "A wooden shield used by most fighters",
        Damage: -1,
        Special: null,
      },
    ],
  };

  return (
    <button onClick={() => onSelect("Warrior", classInfo)}>Warrior</button>
  );
};

export default Warrior;
