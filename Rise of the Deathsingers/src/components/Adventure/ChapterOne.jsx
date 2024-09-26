import { useState } from "react";

const ChapterOne = () => {
  const [partOne, setPartOne] = useState(true);
  const [partTwo, setPartTwo] = useState(false);
  const [partThree, setPartThree] = useState(false);
  const [partFour, setPartFour] = useState(false);
  const [partFive, setPartFive] = useState(false);

  return (
    <div>
      <h2>You are on the first chapter.</h2>
    </div>
  );
};

export default ChapterOne;
