import React from "react";
import useWordGame from "./useWordGame";
import "./styles.css";

export default function App() {
  const [
    time,
    isTimeRunning,
    handleChange,
    startGame,
    inputRef,
    text,
    wordCount
  ] = useWordGame();
  return (
    <div>
      <h1>Speed Typing Game</h1>
      <textarea
        ref={inputRef}
        disabled={!isTimeRunning}
        onChange={handleChange}
        value={text}
      />
      <h4>Time Remaining: {time}</h4>
      <button disabled={isTimeRunning} onClick={startGame}>
        Start
      </button>
      <h1>Word Count: {wordCount}</h1>
      <h5>WPM: {wordCount * 4}</h5>
    </div>
  );
}
