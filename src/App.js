import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PlayFill, PauseFill } from "react-bootstrap-icons";
import Menu from "./components/Menu";

function App() {
  const [timer, setTimer] = useState({ type: "focus", time: 1500 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && timer.time > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => ({ ...prevTimer, time: prevTimer.time - 1 }));
      }, 1000);
    } else if (isActive && timer.time === 0) {
      clearInterval(interval);
      setIsActive(false);
      setTimer({
        type: timer.type,
        time:
          timer.type === "focus"
            ? 1500
            : timer.type === "shortBreak"
            ? 300
            : 900,
      });
    }

    return () => clearInterval(interval);
  }, [isActive, timer]);

  const toggleTimer = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const setActiveTimer = (newTimer) => {
    setIsActive(false);
    setTimer(newTimer);
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center vh-100">
        <Col xs={12} md={6} lg={4} className="text-center">
          <h1 className="mb-4">Pomodoro Timer</h1>
          <Menu setActiveTimer={setActiveTimer} />
          <div className="mb-4">
            <input
              className="form-control"
              value={formatTime(timer.time)}
              readOnly
            />
          </div>
          <div>
            <button className="different-button" onClick={toggleTimer}>
              {isActive ? (
                <span>
                  <PauseFill className="me-2" />
                  Pause
                </span>
              ) : (
                <span>
                  <PlayFill className="me-2" />
                  Start
                </span>
              )}
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
