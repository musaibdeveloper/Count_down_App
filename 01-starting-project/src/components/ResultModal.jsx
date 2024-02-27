import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainTime, onReset },
  ref
) {
  const dialouge = useRef();

  const userLost = remainTime <= 0;
  const FormattedReaminingTime = (remainTime / 1000).toFixed(2);
  const score = Math.round((1 - remainTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialouge.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialouge} className="result-modal">
      {userLost && <h2> You Lost</h2>}
      {!userLost && <h2>Your Score : {score}</h2>}
      <p>
        The Target Time was <strong>{targetTime} </strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{FormattedReaminingTime} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
