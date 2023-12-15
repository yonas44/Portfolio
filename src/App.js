import { BsPersonFill } from "react-icons/bs";
import { MdOutlineEmojiPeople, MdExitToApp } from "react-icons/md";
import { FaHamburger, FaHandPointRight } from "react-icons/fa";
import Yonas from "./assets/profile-pic.png";
import { useEffect, useState } from "react";
import { featuredProjects, otherProjects } from "./utils/projects";
import Project from "./components/singleProject";
import { gsap } from "gsap";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import booking from "./assets/booking.webp";
import booking2 from "./assets/booking2.webp";
import booking3 from "./assets/booking3.webp";
import booking4 from "./assets/booking4.webp";
import weather from "./assets/weather.webp";
import weather2 from "./assets/weather2.webp";
import weather3 from "./assets/weather3.webp";
import moviex from "./assets/moviex1.avif";
import moviex2 from "./assets/moviex2.avif";
import TypingText from "./components/typingText";
import Contact from "./components/contact";
import figsy1 from "./assets/figsy-mockup1.webp";
import figsy2 from "./assets/figsy-mockup2.webp";
import figsy3 from "./assets/figsy-mockup3.webp";
import figsy4 from "./assets/figsy-mockup4.webp";
import figsy5 from "./assets/figsy-mockup5.webp";
import figsy6 from "./assets/figsy-mockup6.webp";
import elegami1 from "./assets/elegami-mockup1.avif";
import elegami2 from "./assets/elegami-mockup2.avif";
import elegami3 from "./assets/elegami-mockup3.avif";
import elegami4 from "./assets/elegami-mockup4.avif";

function App() {
  const [text, setText] = useState(0);
  const [show, setShow] = useState(false);

  const texts = [
    "Full-stack Developer.",
    "Mechatronics Engineer.",
    "car Enthusiast.",
  ];

  const handleSectionScroll = (id) => {
    const section = document.querySelector(`#${id}`);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const pics = [
    [elegami1, elegami2, elegami3, elegami4],
    [figsy1, figsy2, figsy3, figsy4, figsy5, figsy6],
    [booking, booking2, booking3, booking4],
    [weather, weather2, weather3],
    [moviex, moviex2],
  ];

  useEffect(() => {
    gsap.fromTo(
      ".nav-links",
      { opacity: 0, y: "-50px" },
      { y: 0, opacity: 1, duration: 0.3, stagger: 0.4 }
    );
  }, [show]);

  useEffect(() => {
    gsap.fromTo(
      ".intro",
      { y: "50px", opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, delay: 1, stagger: 0.3 }
    );
  }, []);

  return (
    <main className="flex min-h-screen flex-col m-auto w-5/6 lg:w-4/6 gap-6 items-center justify-between scroll-smooth">
      <header className="fixed z-20 w-full px-5">
        <nav className="relative flex flex-col backdrop-blur-sm lg:backdrop-blur-none lg:flex-row items-center gap-[50px] px-10 py-3 mx-auto justify-end bg-gradient-to-b from-gray-900">
          <span
            onClick={() => handleSectionScroll("home")}
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
              show ? "flex" : "hidden"
            }`}
          >
            <li
              className="nav-links opacity-0 flex gap-3 items-center cursor-pointer hover:text-orange-200 duration-200"
              onClick={() => {
                handleSectionScroll("about");
                setShow((state) => !state);
              }}
            >
              <BsPersonFill className="text-3xl text-orange-400" />
              About Me
            </li>
            <li
              className="nav-links opacity-0 flex gap-3 items-center cursor-pointer hover:text-orange-200 duration-200"
              onClick={() => {
                handleSectionScroll("work");
                setShow((state) => !state);
              }}
            >
              <AiOutlineFundProjectionScreen className="text-3xl text-orange-400" />
              Work
            </li>
            <li
              className="nav-links opacity-0 flex gap-3 items-center cursor-pointer hover:text-orange-200 duration-200"
              onClick={() => {
                handleSectionScroll("contact");
                setShow((state) => !state);
              }}
            >
              <MdOutlineEmojiPeople className="text-3xl text-orange-400" />
              Contact
            </li>
            <li className="nav-links opacity-0 flex gap-3 items-center cursor-pointer hover:text-orange-200 duration-200">
              <a
                href="https://drive.google.com/file/d/1k6jaiBrGEetlfeD5HiziagAoTJDbhyzH/view?usp=sharing"
                className="border border-orange-400 text-white px-4 py-2 ml-5 rounded-md hover:-translate-x-2 hover:-translate-y-1 duration-300 hover:shadow-btnShadow"
                target="_blank"
                rel="noopener noreferrer"
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
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/yonas44/"
            >
              <AiFillGithub className="-rotate-90 text-2xl duration-100 cursor-pointer hover:text-orange-500 hover:scale-125" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/yonas-tesfu/"
            >
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
            I’m a remote web developer specializing in building exceptional
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
              Hello! My name is{" "}
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
              Here are some of the{" "}
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
                  PostgreSQL{" "}
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
              type={"Featured Projects"}
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
      <Contact />
    </main>
  );
}

export default App;
