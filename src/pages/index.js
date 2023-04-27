import { BsMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
import Yonas from '../assets/profile-pic2.png';
import { useState } from 'react';
import Technologies from '@/components/Technologies';
import TypingText from '@/components/TypingText';
import Slider from '@/components/slider';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

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
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Yonas Tesfu
            </h2>
            <h3 className="role text-3xl py-2 md:text-2xl dark:text-white">
              Full-stack developer
            </h3>
            <p className="text-lg py-5 leading-8 text-gray-800 md:text-xl dark:text-gray-400">
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
            <TypingText
              text='"Bringing project ideas to reality and growing as a team is my
              passion."'
            />
          </div>
        </section>
        <section className="flex flex-col text-center mt-40">
          <Technologies />
          <div className="mt-40 relative">
            <h3 className="text-2xl lg:text-3xl dark:text-white text-left m">
              Portfolio
            </h3>
            <Slider />
            {/* <div className="mx-auto flex flex-col justify-center gap-10 mt-20 lg:flex-row lg:flex-wrap lg:w-[80%]">
              {projects.map((project, index) => (
                <SingleProject
                  key={uuidv4()}
                  count={index}
                  show={show}
                  setShow={setShow}
                  image={projectPictures[index]}
                  description={project.description}
                  sourceCode={project.links[0]}
                  liveDemo={project.links[1]}
                />
              ))}
            </div> */}
            <p className="mt-20 italic text-lg align-text-right lg:text-xl dark:text-white">
              You can find more projects <a href="">here</a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
