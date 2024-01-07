import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PlayFill, PauseFill, ArrowCounterclockwise } from 'react-bootstrap-icons';

function App() {
  const [time, setTime] = useState(1500); // Tempo inicial em segundos (25 minutos)
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      // Quando o tempo atinge 0, reinicie o timer
      clearInterval(interval);
      setIsActive(false);
      setTime(1500);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const toggleTimer = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTime(1500);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center vh-100">
        <Col xs={12} md={6} lg={4} className="text-center">
          <h1 className="mb-4">Pomodoro Timer</h1>
          <div className="mb-4">
            <input className="form-control" value={formatTime(time)} readOnly />
          </div>
          <div>
            <Button variant={isActive ? "warning" : "primary"} onClick={toggleTimer}>
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
            </Button>
            <Button variant="danger" onClick={resetTimer}>
              <ArrowCounterclockwise className="me-2" />
              Reset
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
