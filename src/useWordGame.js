import { useState, useRef, useEffect } from "react";

export default function useWordGame(startingTime = 15) {
  const [text, setText] = useState("");
  const [time, setTime] = useState(startingTime);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const inputRef = useRef(null);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calcWordCount(text) {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  }

  function startGame() {
    setIsTimeRunning(true);
    setTime(startingTime);
    setText("");
    setWordCount(0);
    inputRef.current.disabled = false;
    inputRef.current.focus();
  }

  function endGame() {
    setIsTimeRunning(false);
    setWordCount(calcWordCount(text));
  }

  useEffect(() => {
    if (isTimeRunning && time > 0) {
      setTimeout(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time <= 0) {
      endGame();
    }
  }, [time, isTimeRunning]);

  return [
    time,
    isTimeRunning,
    handleChange,
    startGame,
    inputRef,
    text,
    wordCount
  ];
}
