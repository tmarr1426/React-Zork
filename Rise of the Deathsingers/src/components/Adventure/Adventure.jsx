import { useState } from "react";

const Adventure = ({ playerClass }) => {
  const [adventureStart, setAdventureStart] = useState(true);
  const [chapterOne, setChapterOne] = useState(false);

  const setChapter = () => {
    if (adventureStart) {
      setChapterOne(true);
      setAdventureStart(false);
    } else {
      setChapterOne(false);
      setAdventureStart(true);
    }
  };

  return (
    <div>
      {adventureStart ? (
        <div>
          <h2>Your adventure begins as a {playerClass}!</h2>
          <div>
            <button onClick={setChapter}>Begin Adventure!</button>
          </div>
        </div>
      ) : chapterOne ? (
        <>
          <div>
            <h2>You are on the first chapter.</h2>
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
