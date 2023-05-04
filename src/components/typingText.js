import { useEffect, useState } from 'react';

const TypingText = ({ text, setText, count }) => {
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
        setText((state) => (state + 1) % count);
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [text, displayText, currentIndex]);

  return (
    <span
      className="intro text-3xl text-gray my-5 italic h-[30px] text-wrap lg:text-4xl dark:text-gray-400"
      style={{ fontFamily: 'Caveat, cursive' }}
    >
      {displayText}
    </span>
  );
};

export default TypingText;
