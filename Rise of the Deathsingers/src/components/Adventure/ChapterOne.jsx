import { useState, useEffect } from "react";

const ChapterOne = () => {
  const [partOne, setPartOne] = useState(true);
  const [partTwo, setPartTwo] = useState(false);
  const [partThree, setPartThree] = useState(false);
  const [partFour, setPartFour] = useState(false);
  const [partFive, setPartFive] = useState(false);
  const [questText, setQuestText] = useState(
    "You begin your adventure just outside of a cemetary. The alarms are sounding in the city. There is something going on within the Cemetary. What do you want to do?"
  );
  const [classInfo, setClassInfo] = useState(null);

  const enter = () => {
    if (partOne) {
      setPartOne(false);
      setPartTwo(true);
      setQuestText(
        "You enter the Cemetary. The guards inside are trembeling in terror, unable to move. Looking around you see a creature shambling towards you and the guards. What do you want to do?"
      );
    } else if (partTwo) {
      setPartTwo(false);
      setPartThree(true);
    } else if (partThree) {
      setPartThree(false);
      setPartFour(true);
    } else if (partFour) {
      setPartFour(false);
      setPartFive(true);
    } else {
      setPartOne(true);
    }
  };

  const look = () => {
    if (partOne) {
      setQuestText(
        "You see some shadows moving about within but cannot see much more. What do you want to do?"
      );
    } else if (partTwo) {
      setQuestText(
        "The shambling creatures appear to be Zombies! Prepare for an attack!"
      );
    } else if (partThree) {
      setQuestText(
        "You see some shadows moving about within but cannot see much more. What do you want to do?"
      );
    } else if (partFour) {
      setQuestText(
        "You see some shadows moving about within but cannot see much more. What do you want to do?"
      );
    } else if (partFive) {
      setQuestText(
        "You see some shadows moving about within but cannot see much more. What do you want to do?"
      );
    } else {
      return "There is nothing noteworthy to observe at this moment.";
    }
  };

  useEffect(() => {
    // Retrieve class info from local storage
    const storedClassInfo = localStorage.getItem("ClassInfo");
    if (storedClassInfo) {
      const parsedClassInfo = JSON.parse(storedClassInfo); // Parse class info
      setClassInfo(parsedClassInfo); // Set class info
      console.log("Class Info", parsedClassInfo); // Log the parsed class info
      console.log("Attacks", parsedClassInfo.attacks); // Log the attacks
    }
  }, []); // Empty dependency array means this runs once when the component mounts

  const attack = () => {
    // No parameters needed here
    if (classInfo && classInfo.attacks) {
      // Assuming 'attacks' is an array in the stored class info
      classInfo.attacks.forEach((attack) => {
        setQuestText(
          "You strike the zombies, felling them one swing! The Zombies lie at your feet, as the guards approach. They appear shaken, but thankful. One Guard approaches and says 'Thanks for taking care of those creatures! They ' "
        );
        console.log(`Executing attack: ${attack.name}`);
        // Implement the logic to execute the attack
        // For example, you could call a function based on the attack type
        // attackFunction(attack.type);
      });
    } else {
      console.error("No attacks found in class info.");
    }
  };

  return (
    <div>
      <h2>Chapter One</h2>
      <p>{questText}</p>
      {partOne ? (
        <div>
          <button onClick={enter}>Enter the Cemetary</button>
          <button onClick={look}>Look around</button>
        </div>
      ) : partTwo ? (
        <div>
          <button onClick={attack}>Attack</button>
          <button onClick={look}>Investigate Further</button>
        </div>
      ) : partThree ? (
        <div>
          {/* <button onClick={enter}>Enter the Cemetary</button> */}
          <button onClick={look}>Look around</button>
        </div>
      ) : partFour ? (
        <div>
          {/* <button onClick={enter}>Enter the Cemetary</button> */}
          <button onClick={look}>Look around</button>
        </div>
      ) : partFive ? (
        <div>
          {/* <button onClick={enter}>Enter the Cemetary</button> */}
          <button onClick={look}>Look around</button>
        </div>
      ) : (
        <div>
          <h2>There must have been an error</h2>
        </div>
      )}
    </div>
  );
};

export default ChapterOne;
