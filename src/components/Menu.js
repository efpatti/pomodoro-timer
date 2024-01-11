import React, { useState } from "react";
import { ButtonGroup } from "react-bootstrap";

const Menu = ({ setActiveTimer }) => {
  const [activeButton, setActiveButton] = useState("focus");

  const handleTimerClick = (timerType, time) => {
    setActiveTimer({ type: timerType, time });
    setActiveButton(timerType);
  };

  return (
    <ButtonGroup className="mb-3">
      <button
        className={activeButton === "focus" ? "actived-focus" : "options"}
        onClick={() => handleTimerClick("focus", 1500)}
      >
        Pomodoro
      </button>
      <button
        className={
          activeButton === "shortBreak" ? "actived-short-break" : "options"
        }
        onClick={() => handleTimerClick("shortBreak", 300)}
      >
        Short Break
      </button>
      <button
        className={
          activeButton === "longBreak" ? "actived-long-break" : "options"
        }
        onClick={() => handleTimerClick("longBreak", 900)}
      >
        Long Break
      </button>
    </ButtonGroup>
  );
};

export default Menu;
