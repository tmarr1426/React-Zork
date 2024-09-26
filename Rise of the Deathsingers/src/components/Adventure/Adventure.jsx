import { useState, useEffect } from "react";
import ChapterOne from "./ChapterOne";

const Adventure = ({ playerClass }) => {
  const [adventureStart, setAdventureStart] = useState(true);
  const [chapterOne, setChapterOne] = useState(false);
  const [classInfo, setClassInfo] = useState(null);

  const setChapter = () => {
    if (adventureStart) {
      setChapterOne(true);
      setAdventureStart(false);
    } else {
      setChapterOne(false);
      setAdventureStart(true);
    }
  };

  useEffect(() => {
    // Retrieve class info from local storage
    const storedClassInfo = localStorage.getItem("ClassInfo");
    if (storedClassInfo) {
      setClassInfo(JSON.parse(storedClassInfo)); // Parse and set class info
      console.log(storedClassInfo);
    }
  }, []); // Empty dependency array means this runs once when the component mounts

  const inventory = [];

  return (
    <div>
      {adventureStart ? (
        <div>
          <h2>Your adventure begins as a {playerClass}!</h2>
          <div>
            <h2>Class Information</h2>
            {classInfo ? (
              <div>
                <h3>Class Type: {classInfo.type}</h3>
                <p>HP: {classInfo.hp}</p>
                <p>Level: {classInfo.level}</p>
                <h3>Abilities:</h3>
                <ul>
                  {classInfo.ability.map((ability, index) => (
                    <li key={index}>
                      <strong>{Object.keys(ability)[0]}:</strong>{" "}
                      {ability[Object.keys(ability)[0]]}
                    </li>
                  ))}
                </ul>
                <ul>
                  {classInfo.equipment.map((equipment, index) => (
                    <li key={index}>
                      <strong>{Object.keys(equipment)[0]}:</strong>{" "}
                      {equipment[Object.keys(equipment)[0]]}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>No class info available.</p> // Display message if no info is found
            )}
          </div>
          <div>
            <button onClick={setChapter}>Begin Adventure!</button>
          </div>
        </div>
      ) : chapterOne ? (
        <>
          <div>
            <ChapterOne />
          </div>
        </>
      ) : (
        <div>
          <h2>Adventure has not started yet.</h2>
        </div>
      )}
    </div>
  );
};

export default Adventure;
