import React from "react";

const Warrior = ({ onSelect }) => {
  const classInfo = {
    hp: 10,
    type: "Martial",
    level: 1,
    attacks: [
      {
        name: "Longsword",
        use: "Deal damage to an enemy.",
      },
    ],
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
        Type: "Weapon",
        Damage: 3,
        Special: null,
      },
      {
        Shield: "A wooden shield used by most fighters",
        Type: "Armor",
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
