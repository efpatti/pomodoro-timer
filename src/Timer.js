import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PlayFill, PauseFill } from "react-bootstrap-icons";
import Menu from "./components/Menu";
import "./App.css";
import NavBar from "./components/NavBar";

function Timer() {
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

  // Função auxiliar para determinar a classe de cor de fundo com base no tipo de temporizador
  const getBackgroundColorClass = () => {
    switch (timer.type) {
      case "focus":
        return "focus-background"; // Defina sua classe de cor de fundo desejada para o temporizador de foco
      case "shortBreak":
        return "short-break-background"; // Defina sua classe de cor de fundo desejada para o temporizador de curta pausa
      case "longBreak":
        return "long-break-background"; // Defina sua classe de cor de fundo desejada para o temporizador de longa pausa
      default:
        return ""; // Classe de cor de fundo padrão
    }
  };
  const getSecondBackgroundColorClass = () => {
    switch (timer.type) {
      case "focus":
        return "focus-second-background"; // Defina sua classe de cor de fundo desejada para o temporizador de foco
      case "shortBreak":
        return "short-second-break-background"; // Defina sua classe de cor de fundo desejada para o temporizador de curta pausa
      case "longBreak":
        return "long-second-break-background"; // Defina sua classe de cor de fundo desejada para o temporizador de longa pausa
      default:
        return ""; // Classe de cor de fundo padrão
    }
  };
  // Função auxiliar para determinar a classe de cor com base no tipo de temporizador
  const getColorClass = () => {
    switch (timer.type) {
      case "focus":
        return "focus-color"; // Defina sua classe de cor desejada para o temporizador de foco
      case "shortBreak":
        return "short-break-color"; // Defina sua classe de cor desejada para o temporizador de curta pausa
      case "longBreak":
        return "long-break-color"; // Defina sua classe de cor desejada para o temporizador de longa pausa
      default:
        return ""; // Classe de cor de fundo padrão
    }
  };

  return (
    <div className={`app ${getBackgroundColorClass()}`}>
      <NavBar />
      <Container>
        <Row className="justify-content-center align-items-center vh-100">
          <Col
            xs={12}
            md={6}
            lg={4}
            className={`text-center ${getSecondBackgroundColorClass()}`}
          >
            <Menu setActiveTimer={setActiveTimer} />
            <div className="mb-4">
              <h1 className="time-view">{formatTime(timer.time)}</h1>
            </div>
            <div>
              <button
                className={`different-button ${getColorClass()}`}
                onClick={toggleTimer}
              >
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
    </div>
  );
}

export default Timer;
