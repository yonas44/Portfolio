import { BsChevronCompactDown, BsMoonStarsFill } from 'react-icons/bs';
import { MdOutlineWork } from 'react-icons/md';
import Image from 'next/image';
import Yonas from '../assets/profile-pic2.png';
import { useState, useRef, useEffect } from 'react';
import Technologies from '@/components/Technologies';
import TypingText from '@/components/TypingText';
import Slider from '@/components/slider';
import { gsap } from 'gsap';
import Contact from '@/components/contact';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const techSection = useRef();

  useEffect(() => {
    gsap.to('.home-left', { x: 0, opacity: 1, duration: 1 });
    gsap.to('.scroll-down', {
      y: 0,
      duration: 2,
      ease: 'elastic.out(1, 0.3)',
      stagger: 0.2,
      opacity: 1,
      delay: 1,
    });
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="bg-white min-h-screen overflow-y-auto overflow-x-hidden px-5 py-10 md:px-20 lg:px-40 dark:bg-gray-800">
        <section className="min-h-screen flex flex-col">
          <nav className="pb-10 flex justify-between">
            <h1
              className="text-2xl dark:text-white"
              style={{ fontFamily: 'Nova Oval, cursive' }}
            >
              Yonas Tesfu
            </h1>
            {/* <ul className="flex gap-3 rounded-b-2xl bg-cyan-500 p-6">
              <li>About</li>
              <li>Stack</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul> */}
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
          <div className="relative lg:flex flex-1">
            <aside className="home-left relative -translate-x-5 opacity-0 text-left lg:w-1/2 flex flex-col gap-6 justify-center">
              <div className="p-10 lg:p-0">
                <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl lg:text-7xl">
                  Yonas Tesfu
                </h2>
                <h3 className="role text-3xl py-2 md:text-2xl dark:text-white lg:text-3xl">
                  Full-stack developer
                </h3>
                <p className="text-lg py-5 text-gray-800 md:text-xl dark:text-gray-400 lg:w-3/4 leading-9">
                  A web developer working remotely from{' '}
                  <span className="font-bold italic">Ethiopia</span>. I bring
                  Expertise and Dedication to Every Project{' '}
                </p>
              </div>
            </aside>
            <aside className="lg:w-1/2">
              <div className="flex flex-col lg:mt-12 gap-10 items-center text-center w-full">
                <div className="bg-gradient-to-b from-teal-300 rounded-full mt-10 mx-auto overflow-hidden w-80 h-80 pt-5 lg:w-200 lg:h-100">
                  <Image src={Yonas} alt="profile-pic" />
                </div>
                <TypingText
                  text='"Bringing project ideas to reality and growing as a team is my
                  passion!"'
                />
              </div>
            </aside>
          </div>
          <div className="hidden absolute bottom-12 left-0 lg:flex justify-center w-full">
            <BsChevronCompactDown
              className="scroll-down h-[80px] w-[80px] -translate-y-full opacity-0 text-gray-400 hover:text-cyan-500 cursor-pointer"
              onClick={() =>
                techSection.current?.scrollIntoView({ behavior: 'smooth' })
              }
            />
          </div>
        </section>
        <section
          ref={techSection}
          className="min-h-screen mt-10 lg:m-0 flex flex-col justify-center"
        >
          <Technologies />
        </section>
        <section className="relative flex mt-20 lg:m-0 flex-col text-center bg-fixed">
          <div className="flex gap-1 items-center my-2">
            <MdOutlineWork className="text-3xl text-cyan-600" />
            <h3 className="text-2xl lg:absolute lg:top-10 -lg:left-10 lg:text-4xl lg:text-white dark:text-white text-left z-30">
              Portfolio
            </h3>
          </div>
          <Slider />
        </section>
        <section className="p-8 min-h-screen bg-fixed">
          <Contact />
        </section>
      </main>
    </div>
  );
}
