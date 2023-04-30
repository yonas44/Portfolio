import { BsChevronCompactDown, BsMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
import Yonas from '../assets/profile-pic2.png';
import { useState, useRef, useEffect } from 'react';
import Technologies from '@/components/Technologies';
import TypingText from '@/components/TypingText';
import Slider from '@/components/slider';
import { gsap } from 'gsap';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const techSection = useRef();

  useEffect(() => {
    gsap.to('.home-left', { x: 0, opacity: 1, duration: 2 });
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="bg-white min-h-screen overflow-y-auto overflow-x-hidden px-5 py-10 md:px-20 lg:px-40 dark:bg-gray-800">
        <section className="relative min-h-screen flex flex-col">
          <nav className="pb-10 flex justify-between">
            <h1
              className="text-2xl dark:text-white"
              style={{ fontFamily: 'Nova Oval, cursive' }}
            >
              Yonas Tesfu
            </h1>
            <ul className="flex items-center lg:gap-10">
              <li>
                <BsMoonStarsFill
                  className="cursor-pointer text-2xl dark:text-white"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li>
                <a
                  href="https://drive.google.com/uc?export=download&id=1VDb4uFYU6PAakJtPwCxDkqVKckmv-5mP"
                  className="bg-cyan-500 text-white px-4 py-2 ml-5 rounded-md"
                  download="Resume.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="lg:flex flex-1">
            <aside className="home-left relative -translate-x-5 opacity-0 text-center lg:text-left lg:w-1/2 flex flex-col gap-6 justify-center">
              <div className="p-10 lg:p-0">
                <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl lg:text-7xl">
                  Yonas Tesfu
                </h2>
                <h3 className="role text-3xl py-2 md:text-2xl dark:text-white lg:text-3xl">
                  Full-stack developer
                </h3>
                <p className="text-lg py-5 text-gray-800 md:text-xl dark:text-gray-400 lg:w-3/4 leading-9">
                  A junior web developer working remotely from{' '}
                  <span className="font-bold italic">Ethiopia</span>. Interested
                  in solving problems and creating efficient solutions.{' '}
                  <span
                    className="text-xl"
                    style={{ fontFamily: 'Caveat, cursive' }}
                  >
                    Lets connect!
                  </span>
                </p>
              </div>
              <div className="flex justify-center text-5xl gap-12 text-gray-600 dark:text-white lg:justify-start">
                <a href="https://www.linkedin.com/in/yonas-tesfu/">
                  <AiFillLinkedin />
                </a>
                <a href="https://github.com/yonas44">
                  <AiFillGithub />
                </a>
              </div>
            </aside>
            <aside className="lg:w-1/2">
              <div className="flex flex-col lg:mt-12 gap-10 items-center text-center w-full">
                <div className="bg-gradient-to-b from-teal-300 rounded-full mt-20 mx-auto overflow-hidden w-80 h-80 pt-5 lg:w-200 lg:h-100">
                  <Image src={Yonas} alt="profile-pic" />
                </div>
                <TypingText
                  text='"Bringing project ideas to reality and growing as a team is my
                  passion!"'
                />
              </div>
            </aside>
          </div>
          <div className="hidden absolute bottom-12 lg:flex justify-center w-full">
            <BsChevronCompactDown
              className="h-[80px] w-[80px] text-gray-400 hover:text-cyan-500 duration-300 cursor-pointer"
              onClick={() =>
                techSection.current?.scrollIntoView({ behavior: 'smooth' })
              }
            />
          </div>
        </section>
        <section
          ref={techSection}
          className="min-h-screen mt-40 lg:m-0 flex flex-col justify-center"
        >
          <Technologies />
        </section>
        <section className="relative flex flex-col text-center bg-fixed">
          <h3 className="text-2xl lg:absolute lg:top-10 -lg:left-10 lg:text-4xl lg:text-white dark:text-white text-left z-30">
            Portfolio
          </h3>
          <Slider />
        </section>
        <section className="bg-gray-100 p-8 min-h-screen bg-fixed">
          <h2 className="text-2xl mb-4 font-semibold">Let's connect!</h2>
        </section>
      </main>
    </div>
  );
}
