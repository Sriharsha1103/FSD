import React, { useState } from "react";

function CricScore() {
  const [score, setScore] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [balls, setBalls] = useState(0);
  const [overs, setOvers] = useState(0);

  const changeScore = (value) => {
    setScore(score + value);
    changeBalls();
  };
  const changeBalls = () => {
    if ((balls + 1) % 6 === 0) setOvers(overs + 1);
    setBalls((balls + 1) % 6);
  };

  const handleClick = (e) => {
    const id = e.target.id;
    switch (id) {
      case "2":
        changeScore(2);
        break;
      case "3":
        changeScore(3);
        break;
      case "4":
        changeScore(4);
        break;
      case "6":
        changeScore(6);
        break;
      case "1":
        changeScore(1);
        break;
      case "No Ball":
        changeScore(1);
        break;
      case "Wide":
        changeScore(1);
        break;
      case "Wicket":
        setWickets(wickets + 1);
      case "0":
        changeBalls();
        break;

      default:
        break;
    }
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Score Board : Cricket</h1>
      <h2>
        Score : {score} / {wickets}
      </h2>
      <h2>
        Overs : {overs}.{balls}{" "}
      </h2>
      <div>
        <button id="0" onClick={handleClick}>
          0
        </button>
        <button id="1" onClick={handleClick}>
          1
        </button>
        <button id="2" onClick={handleClick}>
          2
        </button>
        <button id="3" onClick={handleClick}>
          3
        </button>
        <button id="4" onClick={handleClick}>
          4
        </button>
        <button id="6" onClick={handleClick}>
          6
        </button>
        <button id="Wide" onClick={handleClick}>
          Wide
        </button>
        <button id="No Ball" onClick={handleClick}>
          No Ball
        </button>
        <button id="Wicket" onClick={handleClick}>
          Wicket
        </button>
      </div>
    </div>
  );
}

export default CricScore;
