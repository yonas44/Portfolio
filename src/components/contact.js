import Idea from '../assets/idea.gif';
import Code from '../assets/code.gif';
import Test from '../assets/testing.gif';
import Deploy from '../assets/deploy.gif';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Contact = () => {
  const gifs = [Idea, Code, Test, Deploy];

  useEffect(() => {
    const animateGifs = () => {
      gsap.fromTo('.gifs', { y: '100%' }, { y: 0, duration: 1, stagger: 3 });
    };

    animateGifs();
    const interval = setInterval(() => {
      animateGifs();
    }, 17000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative m-auto overflow-hidden rounded-full w-[300px] h-[300px] snap-y">
        {gifs.map((gif, index) => (
          <div
            key={index}
            className="gifs border-none flex translate-y-full h-full w-full absolute"
            style={{
              backgroundImage: `url(${gif.src})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
            }}
          />
        ))}
        <div className="gifs translate-y-full h-full w-full flex flex-col gap-6 absolute items-center">
          <span className="text-xl" style={{ fontFamily: 'Caveat, cursive' }}>
            Lets connect!
          </span>
          <div className="flex justify-center text-5xl gap-12 text-gray-600 dark:text-white lg:justify-start">
            <a href="https://www.linkedin.com/in/yonas-tesfu/">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/yonas44">
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
