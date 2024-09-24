import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [start, setStart] = useState(false);

  const gameStart = (start) => {
    console.log(start);
    setStart(true);
    console.log(start);
  };
  return (
    <>
      <div>
        Welcome to The Rise of the Deathsingers. Are you ready to begin your
        adventure?
      </div>
      <div>
        <button gameStart={gameStart}>Start</button>
        <button>Close</button>
      </div>
    </>
  );
}

export default App;
