import { BsPersonFill } from 'react-icons/bs';
import { MdOutlineEmojiPeople, MdExitToApp } from 'react-icons/md';
import { FaHamburger, FaHandPointRight } from 'react-icons/fa';
import Yonas from './assets/profile-pic.png';
import { useEffect, useState } from 'react';
import { featuredProjects, otherProjects } from './utils/projects';
import Project from './components/singleProject';
import { gsap } from 'gsap';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineFundProjectionScreen,
} from 'react-icons/ai';
import booking from './assets/booking.png';
import booking2 from './assets/booking2.png';
import booking3 from './assets/booking3.png';
import booking4 from './assets/booking4.png';
import weather from './assets/weather.png';
import weather2 from './assets/weather2.png';
import weather3 from './assets/weather3.png';
import moviex from './assets/moviex1.png';
import moviex2 from './assets/moviex2.png';
import TypingText from './components/typingText';
import budget from './assets/budget.png';
import budget2 from './assets/budget2.png';

function App() {
  const [text, setText] = useState(0);
  const [show, setShow] = useState(false);

  const texts = [
    'I am a Full-stack Developer.',
    'I am a Mechatronics Engineer.',
    'I am a car Enthusiast.',
  ];

  const handleSectionScroll = (id) => {
    const section = document.querySelector(`#${id}`);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  const pics = [
    [booking, booking2, booking3, booking4],
    [weather, weather2, weather3],
    [budget, budget2],
    [moviex, moviex2],
  ];

  useEffect(() => {
    gsap.fromTo(
      '.nav-links',
      { opacity: 0, y: '-50px' },
      { y: 0, opacity: 1, duration: 0.3, stagger: 0.4 }
    );
  }, [show]);

  useEffect(() => {
    gsap.fromTo(
      '.intro',
      { y: '50px', opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, delay: 1, stagger: 0.3 }
    );
  }, []);

  return (
    <main className="flex min-h-screen flex-col m-auto w-5/6 lg:w-4/6 gap-6 items-center justify-between scroll-smooth">
      <header className="fixed z-20 w-full px-5">
        <nav className="relative flex flex-col lg:flex-row items-center gap-[50px] px-10 py-3 mx-auto justify-end bg-gradient-to-b from-gray-900 backdrop:blur-md">
          <span
            onClick={() => handleSectionScroll('home')}
            className="absolute left-3 top-3 text-lg font-pro cursor-pointer"
          >
            Yonas Tesfu
          </span>
          {!show ? (
            <FaHamburger
              className="lg:hidden text-3xl block ml-auto cursor-pointer"
              onClick={() => setShow((state) => !state)}
            />
          ) : (
            <MdExitToApp
              className="lg:hidden text-3xl ml-auto cursor-pointer"
              onClick={() => setShow((state) => !state)}
            />
          )}
          <ul
            className={`lg:flex flex-col trasns lg:flex-row gap-10 font-pro ${
              show ? 'flex' : 'hidden'
            }`}
          >
            <li
              className="nav-links opacity-0 flex gap-3 items-center cursor-pointer hover:text-orange-200 duration-200"
              onClick={() => handleSectionScroll('about')}
            >
              <BsPersonFill className="text-3xl text-orange-400" />
              About Me
            </li>
            <li
              className="nav-links opacity-0 flex gap-3 items-center cursor-pointer hover:text-orange-200 duration-200"
              onClick={() => handleSectionScroll('work')}
            >
              <AiOutlineFundProjectionScreen className="text-3xl text-orange-400" />
              Work
            </li>
            <li
              className="nav-links opacity-0 flex gap-3 items-center cursor-pointer hover:text-orange-200 duration-200"
              onClick={() => handleSectionScroll('contact')}
            >
              <MdOutlineEmojiPeople className="text-3xl text-orange-400" />
              Contact
            </li>
            <li className="nav-links opacity-0 flex gap-3 items-center cursor-pointer hover:text-orange-200 duration-200">
              <a
                href="https://drive.google.com/uc?export=download&id=1VDb4uFYU6PAakJtPwCxDkqVKckmv-5mP"
                className="border border-orange-400 text-white px-4 py-2 ml-5 rounded-md hover:-translate-x-2 hover:-translate-y-1 duration-300 hover:shadow-btnShadow"
                download="Resume.pdf"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="fixed bottom-0 hidden w-screen lg:flex">
        <div className="mt-auto w-full px-2 justify-between right-0 bottom-0 lg:flex">
          <aside className="flex items-center gap-6 rotate-90">
            <a href="https://github.com/yonas44/">
              <AiFillGithub className="-rotate-90 text-2xl duration-100 cursor-pointer hover:text-orange-500 hover:scale-125" />
            </a>
            <a href="https://www.linkedin.com/in/yonas-tesfu/">
              <AiFillLinkedin className="-rotate-90 text-2xl hover:text-orange-500 duration-100 hover:scale-125" />
            </a>
            <hr className="border-none h-[1px] w-[100px] bg-gray-200" />
          </aside>
          <aside className="flex items-center gap-6 mb-[100px] rotate-90 relative translate-x-20">
            <a
              href="mailTo:tesfu.yonas1350@gmail.com"
              className="text-gray-400"
            >
              tesfu.yonas1350@gmail.com
            </a>
            <hr className="border-none h-[1px] w-[100px] bg-gray-200" />
          </aside>
        </div>
      </div>
      <section className="flex min-h-screen" id="home">
        <div className="h-full m-auto flex flex-col gap-2">
          <p className="intro opacity-0 text-orange-400 lg:text-3xl">
            Hi, my name is
          </p>
          <h1 className="intro opacity-0 text-5xl lg:text-8xl font-semibold">
            Yonas Tesfu
          </h1>
          <TypingText
            setText={setText}
            count={texts.length}
            text={texts[text]}
          />
          <p className="intro opacity-0 mt-3 text-gray-400 lg:text-xl lg:w-1/2">
            I’m a remote web devloper specializing in building exceptional
            digital experiences. Currently, I’m focused on building accessible,
            human-centered products.
          </p>
        </div>
      </section>
      <section className="my-40 w-full flex flex-col gap-6" id="about">
        <div className="flex w-full items-center gap-2">
          <BsPersonFill className="text-3xl text-orange-400" />
          <h3 className="text-3xl">About me</h3>
          <hr className="bg-gray-500 flex-1 h-[1px] border-none" />
        </div>
        <div className="mt-10 flex flex-col lg:flex-row">
          <div className="flex flex-col gap-4 lg:w-1/2">
            <p className="lg:text-lg">
              Hello! My name is{' '}
              <span className="font-bold text-orange-400">Yonas</span> a
              full-stack developer with a passion for problem-solving,
              collaboration, and mentorship. I value communication, time
              management, and teamwork. I thrive in collaborative environments
              and I am always looking for ways to help others and grow as a
              team. My ability to stay focused on the big picture while
              simultaneously attending to the smallest details has allowed me to
              consistently exceed expectations and drive successful outcomes.
            </p>
            <p>
              Here are some of the{' '}
              <span className="text-orange-400">technologies</span> I use to
              fight web related problems with:
            </p>
            <ul className="flex gap-16 max-w-[400px]">
              <div className="flex-1">
                <li className="flex gap-1 items-center py-2">
                  <FaHandPointRight className="min-w-[16px] text-orange-400" />
                  JavaScript
                </li>
                <li className="flex gap-1 items-center py-2">
                  <FaHandPointRight className="min-w-[16px] text-orange-400" />
                  React.js
                </li>
                <li className="flex gap-1 items-center py-2">
                  <FaHandPointRight className="min-w-[16px] text-orange-400" />
                  Redux
                </li>
              </div>
              <div className="flex-1">
                <li className="flex gap-1 items-center py-2">
                  <FaHandPointRight className="min-w-[16px] text-orange-400" />
                  Ruby
                </li>
                <li className="flex gap-1 items-center py-2">
                  <FaHandPointRight className="min-w-[16px] text-orange-400" />
                  Ruby on Rails
                </li>
                <li className="flex gap-1 items-center py-2">
                  <FaHandPointRight className="min-w-[16px] text-orange-400" />
                  PostgreSQL{' '}
                </li>
              </div>
            </ul>
          </div>
          <div className="mx-auto mt-10 w-[300px] h-[300px] flex justify-center rounded-full overflow-hidden bg-gradient-to-t from-orange-200">
            <img
              className="object-cover mt-auto ml-4"
              src={Yonas}
              alt="profile-pic"
            />
          </div>
        </div>
      </section>
      <section
        className="min-h-screen mt-40 w-full flex flex-col gap-5 lg:gap-20"
        id="work"
      >
        <div className="flex w-full gap-2 items-center">
          <AiOutlineFundProjectionScreen className="text-3xl text-orange-400" />
          <h3 className="text-3xl">Featured Projects</h3>
          <hr className="bg-gray-500 flex-1 h-[1px] border-none" />
        </div>
        <div className="flex flex-col w-full gap-20 lg:gap-40">
          {featuredProjects.map((project, index) => (
            <Project
              key={index}
              project={project}
              type={'Featured Projects'}
              index={index}
              pics={pics[index]}
            />
          ))}
        </div>
        <div className=" mt-20 flex flex-col gap-4">
          <h3 className="text-3xl text-center">Other Projects</h3>
          <p className="font-pro text-xl text-center text-orange-200">
            View the archive
          </p>
          <div className="mt-5 flex flex-col lg:flex-row gap-4">
            {otherProjects.map((proj, index) => (
              <Project
                key={index}
                project={proj}
                type=""
                index={null}
                pics={[]}
              />
            ))}
          </div>
        </div>
      </section>
      <section className=" mt-20 w-full flex flex-col gap-5" id="contact">
        <div className="flex w-full gap-2 items-center">
          <MdOutlineEmojiPeople className="text-3xl text-orange-400" />
          <h3 className="text-3xl">Let's connect</h3>
          <hr className="bg-gray-500 flex-1 h-[1px] border-none" />
        </div>

        <div className="flex flex-col gap-5 my-20">
          <h2 className="text-center text-3xl text-orange-200">
            Get in touch!
          </h2>
          <p className="text-gray-300 text-center">
            I'm always interested in hearing about new projects, so if you'd
            like to chat please get in touch.
          </p>
          <p
            className="text-center text-gray-500 text-2xl lg:text-3xl"
            style={{ fontFamily: 'Caveat, cursive' }}
          >
            "The best dreams happen when we are awake!"
          </p>
          <a href="mailto:henoktesfu48@gmail.com">
            <button
              type="button"
              className="relative mt-5 px-4 py-2 border border-orange-400 block mx-auto text-orange-200 hover:-translate-x-2 hover:-translate-y-1 duration-300 hover:shadow-btnShadow w-max"
            >
              <p>Say Hello</p>
            </button>
          </a>
          <div className="flex gap-10 text-3xl my-10 mx-auto">
            <a href="https://github.com/yonas44/">
              <AiFillGithub className="text-2xl duration-100 cursor-pointer hover:text-orange-500 hover:scale-125" />
            </a>
            <a href="https://www.linkedin.com/in/yonas-tesfu/">
              <AiFillLinkedin className="text-2xl hover:text-orange-500 duration-100 hover:scale-125" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
