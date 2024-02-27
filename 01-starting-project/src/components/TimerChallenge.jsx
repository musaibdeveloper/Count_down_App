import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialogue = useRef();

  // const [timerStarted, setTimerStarted] = useState(false);
  // const [timeExpired, setTimerExpired] = useState(false);

  const [timeRemaining, setRemaingTime] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialogue.current.open();
  }

  function HandleStart() {
    timer.current = setInterval(() => {
      setRemaingTime((prevTimeRemain) => prevTimeRemain - 10);
    }, 10);

    setTimerStarted(true);
  }

  function Reset() {
        setRemaingTime(targetTime * 1000);

  }

  function HandleStop() {
    dialogue.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialogue} targetTime={targetTime} remainTime = {timeRemaining} onReset = {Reset} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <button onClick={timerIsActive ? HandleStop : HandleStart}>
          {timerIsActive ? "Stop" : "Start"} Challenge
        </button>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running.." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
