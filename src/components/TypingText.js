import { useEffect, useState } from 'react';

const TypingText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, currentIndex + 1));
      setCurrentIndex((currentIndex) => currentIndex + 1);
    }, 100);

    if (currentIndex === text.length) {
      clearInterval(interval);
      setTimeout(() => {
        setDisplayText('');
        setCurrentIndex(0);
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [text, displayText, currentIndex]);

  return (
    <span
      className="text-gray italic h-[30px] max-w-lg text-wrap lg:text-lg dark:text-gray-400"
      style={{ fontFamily: 'Caveat, cursive' }}
    >
      {displayText}
    </span>
  );
};

export default TypingText;
