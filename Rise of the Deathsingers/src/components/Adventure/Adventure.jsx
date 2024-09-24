import React from "react";
import { Warrior, Mage, Rogue, Priest } from "./index";

const Adventure = () => {
  return (
    <div>
      Choose Your Class
      <div>
        <button>
          <Warrior>Warrior</Warrior>
        </button>
        <button>
          <Mage>Mage</Mage>
        </button>
        <button>
          <Rogue>Rogue</Rogue>
        </button>
        <button>
          <Priest>Priest</Priest>
        </button>
      </div>
    </div>
  );
};

export default Adventure;
