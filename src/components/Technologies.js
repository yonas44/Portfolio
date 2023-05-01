import Image from 'next/image';
import FrontEnd from '../assets/front-end.jpg';
import BackEnd from '../assets/backend.jpg';
import Tools from '../assets/dev-tools.jpg';
import { FaReact } from 'react-icons/fa';
import { SiRedux, SiCss3, SiRubyonrails, SiJest } from 'react-icons/si';
import { DiRuby } from 'react-icons/di';
import { BsFillPersonFill, BsGit } from 'react-icons/bs';
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react';

const Technologies = () => {
  const divRef = useRef(null);
  const divRef2 = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [divTop, setDivTop] = useState(0);
  const [divTop2, setDivTop2] = useState(0);
  const [screenSize, setScreenSize] = useState(null);

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
    <>
      <div className="flex gap-1 items-center my-2">
        <BsFillPersonFill className="text-3xl text-cyan-600" />
        <h3 className="text-3xl text-center lg:text-3xl lg:mb-20 dark:text-white">
          About me
        </h3>
      </div>
      <div className="w-5/6 mt-10 mx-auto dark:text-white">
        <p>
          Hello! My name is Yonas, I am a web developer who loves to build
          dynamic Web apps. I am on a constant quest for learning new
          technologies. Dedicated to helping my peers tackle problems and
          bringing out the best in myself and the team I work with.
        </p>
        <p className="mt-5">
          Here are some of the technologies I have been work with:
        </p>
        <div className="lg:flex text-left gap-6">
          <div
            ref={divRef}
            className={`slide-in left text-center shadow-lg rounded-xl p-10 my-10 dark:bg-gradient-to-t from-cyan-700 flex-1 ${
              scrollPosition + screenSize - 200 > divTop && 'active'
            }`}
          >
            <div>
              <h4 className="text-cyan-500 text-xl mb-5 dark:text-white">
                Front-end
              </h4>
              <ul className="grid grid-cols-2 gap-5 my-5">
                <li className="flex justify-center items-center gap-2 text-xl">
                  <AiFillHtml5 className="text-red-600" /> HTML
                </li>
                <li className="flex justify-center items-center gap-2 text-xl">
                  <SiCss3 className="text-blue-600" /> CSS
                </li>
                <li className="flex justify-center items-center gap-2 text-xl">
                  <FaReact className="text-cyan-600" /> React
                </li>
                <li className="flex justify-center items-center gap-2 text-xl">
                  <SiRedux className="text-purple-600" /> Redux
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gradient-to-t from-cyan-700 flex-1">
            <div>
              <h4 className="text-cyan-500 text-xl mb-5 dark:text-white">
                Back-end
              </h4>
              <ul className="grid grid-cols-2 gap-5 my-5">
                <li className="flex justify-center items-center gap-2 text-xl">
                  <DiRuby className="text-red-600" /> Ruby
                </li>
                <li className="flex justify-center items-center gap-2 text-xl">
                  <SiRubyonrails className="text-orange-600 text-5xl" /> Ruby on
                  Rails
                </li>
              </ul>
            </div>
          </div>
          <div
            ref={divRef2}
            className={`slide-in right text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gradient-to-t from-cyan-700 flex-1 ${
              scrollPosition + screenSize - 200 > divTop2 && 'active'
            }`}
          >
            <div>
              <h4 className="text-cyan-500 text-xl mb-5 dark:text-white">
                Tools
              </h4>
              <ul className="grid grid-cols-2 gap-5 my-5">
                <li className="flex justify-center items-center gap-2 text-xl">
                  <BsGit className="text-orange-600" /> Git
                </li>
                <li className="flex justify-center items-center gap-2 text-xl">
                  <SiJest className="text-purple-800" /> Jest
                </li>
                <li className="flex justify-center items-center gap-2 text-xl">
                  <AiFillGithub /> Github
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;
