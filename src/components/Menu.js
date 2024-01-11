import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";

const Menu = ({ setActiveTimer }) => {
  const handleTimerClick = (timerType, time) => {
    setActiveTimer({ type: timerType, time });
  };

  return (
    <ButtonGroup className="mb-3">
      <Button variant="primary" onClick={() => handleTimerClick("focus", 1500)}>
        Focus
      </Button>
      <Button
        variant="success"
        onClick={() => handleTimerClick("shortBreak", 300)}
      >
        Short Break
      </Button>
      <Button variant="info" onClick={() => handleTimerClick("longBreak", 900)}>
        Long Break
      </Button>
    </ButtonGroup>
  );
};

export default Menu;
