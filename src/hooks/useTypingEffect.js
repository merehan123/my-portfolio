import { useEffect, useState } from "react";

const words = [
  "AI Engineer",
  "Data Engineer",
  "Machine Learning Enthusiast",
  "NLP Developer",
];

function useTypingEffect() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentWord = words[wordIndex];

    let currentIndex = 0;

    const interval = setInterval(() => {
      setDisplayText(currentWord.slice(0, currentIndex + 1));

      currentIndex++;

      if (currentIndex === currentWord.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);

  }, [wordIndex]);

  return displayText;
}

export default useTypingEffect;