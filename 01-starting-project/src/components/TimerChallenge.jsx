import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialogue = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timeExpired, setTimerExpired] = useState(false);

  function HandleStart() {
    setTimeout(() => {
        timer.current = setTimerExpired(true);
        dialogue.current.showModal();
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function HandleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal ref = {dialogue} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>
        {timeExpired && <p>You Lost!</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <button onClick={timerStarted ? HandleStop : HandleStart}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is running.." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
