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
  const projDescHolder = useRef(null);
  const projWrapper = useRef(null);

  useEffect(() => {
    if (currentSlide === index) {
      gsap.to(projDescHolder.current, {
        height: `${projDescHolder.current.children[0].clientHeight + 16}px`,
        padding: '12px',
        zIndex: 10,
        duration: 1,
      });
      gsap.to('.desc', {
        x: 0,
        duration: 1,
        opacity: 1,
        delay: 1,
        stagger: 0.5,
      });

      gsap.to('.proj-pic', { scale: 1, opacity: 1, duration: 0.5 });
      gsap.fromTo(
        '.project-btns',
        { y: '100%', opacity: 0 },
        {
          y: 0,
          duration: 2,
          ease: 'elastic.out(1, 0.3)',
          stagger: 0.2,
          opacity: 1,
          delay: 2,
        }
      );

      gsap.to(projWrapper.current, { opacity: 1, duration: 0.1 });
    }
  }, []);

  return (
    <>
      <div
        ref={projWrapper}
        className="w-full h-full absolute top-0 opacity-0 duration-300 flex"
      >
        <Image
          src={image}
          className="rounded-lg m-auto object-cover h-full w-full"
          alt="project-pic"
        />
      </div>
      {index === currentSlide && (
        <div className="absolute top-0 h-full w-full bg-gray-950/70 text-white text-center flex gap-8">
          <aside className="items-center ml-14 hidden lg:flex">
            <Image
              src={image}
              className="proj-pic rounded-lg my-auto scale-150 opacity-0 w-[1000px]"
              alt="project-pic"
            />
          </aside>
          <aside className="flex flex-col">
            <div
              ref={projDescHolder}
              className="border-l-[15px] border-l-cyan-500 m-auto w-[75%] overflow-hidden h-0 flex lg:w-[50%] lg:mx-0"
            >
              <div className="text-left my-auto">
                <h4
                  className="desc text-2xl lg:text-4xl -translate-x-[100px] opacity-0"
                  style={{
                    marginBottom: '10px',
                    fontFamily: 'Nova Oval, cursive',
                  }}
                >
                  {title}
                </h4>
                <p className="desc text-md -translate-x-[100px] opacity-0 lg:text-xl">
                  {description}
                </p>
              </div>
            </div>
            <div className="flex justify-center w-full lg:w-max absolute bottom-20 lg:bottom-48 z-20">
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
          </aside>
        </div>
      )}
    </>
  );
};

export default SingleProject;
