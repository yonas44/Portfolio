import { BsMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
import Yonas from '../assets/profile-pic2.png';
import booking from '../assets/booking.png';
import budget from '../assets/budget.png';
import weather from '../assets/weather.png';
import movie from '../assets/moviex.png';
import { projects } from '../utils/data';
import SingleProject from '@/components/singleProject';
import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Technologies from '@/components/Technologies';

export default function Home() {
  const projectPictures = [booking, budget, weather, movie];
  const [darkMode, setDarkMode] = useState(false);
  const divRef = useRef(null);
  const divRef2 = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [divTop, setDivTop] = useState(0);
  const [divTop2, setDivTop2] = useState(0);
  const [screenSize, setScreenSize] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setScreenSize(screen.height);
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setDivTop(divRef.current.offsetTop);
    setDivTop2(divRef2.current.offsetTop);
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="bg-white overflow-hidden px-5 py-10 md:px-20 lg:px-40 dark:bg-gray-800">
        <section className="min-h-screen">
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
                  href="#"
                  className="bg-cyan-500 text-white px-4 py-2 ml-5 rounded-md"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="p-10 text-center">
            <h2 className="text-4xl py-2 text-teal-600 font-medium md:text-6xl">
              Yonas Tesfu
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Full-stack developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-gray-400">
              A junior web developer, interested in solving problems and
              creating efficient solutions.
            </p>
          </div>
          <div className="flex justify-center text-5xl gap-12 text-gray-600 dark:text-white">
            <a href="https://www.linkedin.com/in/yonas-tesfu/">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/yonas44">
              <AiFillGithub />
            </a>
          </div>
          <div className="flex flex-col gap-10 items-center text-center">
            <div className="bg-gradient-to-b from-teal-300 rounded-full mt-20 mx-auto overflow-hidden w-80 h-80 pt-5 lg:w-200 lg:h-100">
              <Image src={Yonas} alt="profile-pic" />
            </div>
            <span className="text-gray italic max-w-lg text-wrap lg:text-lg dark:text-gray-400">
              "Bringing projects ideas to reality and growing as team is my
              passion."
            </span>
          </div>
        </section>
        <section className="flex flex-col text-center mt-40">
          <Technologies
            screenSize={screenSize}
            scrollPosition={scrollPosition}
            divRef={divRef}
            divRef2={divRef2}
            divTop={divTop}
            divTop2={divTop2}
          />
          <div className="mt-40">
            <div>
              <h3 className="text-2xl lg:text-3xl dark:text-white text-left lg:ml-20">
                Portfolio
              </h3>
            </div>
            <div className="mx-auto flex flex-col justify-center gap-10 mt-20 lg:flex-row lg:flex-wrap lg:w-[80%]">
              {projects.map((project, index) => (
                <SingleProject
                  key={uuidv4()}
                  count={index + 1}
                  setShow={setShow}
                  image={projectPictures[index]}
                  description={project.description}
                  sourceCode={project.links[0]}
                  liveDemo={project.links[1]}
                />
              ))}
            </div>
            <p className="mt-20 italic text-lg align-text-right lg:text-xl dark:text-white">
              You can find more projects <a href="">here</a>
            </p>
          </div>
        </section>
        {show && (
          <div className="fixed bg-black text-white top-0 left-0 w-[100vw] h-[100vh]">
            Hi
          </div>
        )}
      </main>
    </div>
  );
}
