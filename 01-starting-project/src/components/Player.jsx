import { useState, useRef } from "react";

export default function Player() {
  const PlayerName = useRef();
  const [EnteredPlayerName, SetPlayerName] = useState(null);

  function handleClick() {
    SetPlayerName(PlayerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome 😊 <br/> {EnteredPlayerName ? EnteredPlayerName : "Enter your Name"}</h2>
      <p>
        <input type="text" ref = {PlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
