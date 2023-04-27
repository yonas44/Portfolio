import { AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
import { RiLiveLine } from 'react-icons/ri';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const SingleProject = (props) => {
  const {
    image,
    title,
    description,
    sourceCode,
    liveDemo,
    index,
    currentSlide,
  } = props;
  const projDesc = useRef(null);
  const projDescHolder = useRef(null);

  // let tween = null;

  useEffect(() => {
    if (currentSlide === index) {
      gsap.to(projDescHolder.current, {
        height: `${projDescHolder.current.children[0].clientHeight + 16}px`,
        padding: '8px',
        zIndex: 10,
        duration: 1,
      });
      gsap.to(projDesc.current, { x: 0, duration: 1, opacity: 1, delay: 1 });
      gsap.fromTo(
        '.project-btns',
        { y: '100%', opacity: 0 },
        {
          y: 0,
          duration: 2,
          ease: 'elastic.out(1, 0.3)',
          stagger: 0.2,
          opacity: 1,
          delay: 1.5,
        }
      );
    }
  }, []);

  return (
    <>
      <div
        className={`w-full h-full absolute top-0 opacity-0 duration-500 flex ${
          index === currentSlide ? 'opacity-100' : ''
        }`}
      >
        <Image
          src={image}
          className="rounded-lg m-auto object-cover h-full w-full"
          alt="project-pic"
        />
      </div>
      {index === currentSlide && (
        <div className="absolute top-0 h-full w-full bg-gray-950/70 text-white text-center flex flex-col">
          <div
            ref={projDescHolder}
            className="border-l-8 m-auto w-[75%] overflow-hidden h-0 flex"
          >
            <div
              className="text-left -translate-x-[100px] opacity-0 my-auto"
              ref={projDesc}
            >
              <h4
                style={{
                  fontSize: '1.2rem',
                  marginBottom: '10px',
                  fontFamily: 'Nova Oval, cursive',
                }}
              >
                {title}
              </h4>
              {description}
            </div>
          </div>
          <div className="flex justify-center absolute bottom-20 z-20 w-full">
            <a href={sourceCode}>
              <button className="project-btns bg-cyan-500 transition-colors duration-300 text-white px-4 py-2 ml-5 rounded-md flex gap-2 items-center hover:bg-white hover:text-cyan-500">
                <AiFillGithub />
                Source code
              </button>
            </a>
            <a href={liveDemo}>
              <button className="project-btns bg-cyan-500 text-white px-4 py-2 ml-5 rounded-md flex gap-2 items-center transition-colors duration-300 hover:bg-white hover:text-cyan-500">
                <RiLiveLine />
                Live demo
              </button>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProject;
