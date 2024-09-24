import React from "react";

const Warrior = () => {
  const classInfo = {
    hp: 10,
    type: "Martial",
    level: 1,
    ability: [
      {
        bulwark:
          "Stand your ground and brace for damage. Reduce incoming damage to 0.",
        use: "defense",
      },
    ],
  };

  return <div>Warrior</div>;
};

export default Warrior;
