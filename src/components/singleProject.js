import { GrDeploy } from 'react-icons/gr';
import { AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useEffect } from 'react';

const SingleProject = (props) => {
  const { image, description, sourceCode, liveDemo, count, setShow } = props;

  return (
    <div className="project relative basis-1/3 flex-1">
      <Image
        src={image}
        className="rounded-lg object-cover h-full w-full"
        alt="project-pic"
      />
      {/* {show && (
        <div className="fixed top-0 w-[100vw] h-[100vh] left-0 text-black text-center backdrop-blur-sm bg-gray-300/30 flex flex-col">
          <AiFillCloseCircle
            className="block mx-auto my-10 text-5xl"
            onClick={setShow(!show)}
          />
          <p>{description}</p>
          <div className="flex justify-center mt-10">
            <a href={sourceCode}>
              <button className="bg-cyan-500 text-white px-4 py-2 ml-5 rounded-md flex gap-2 items-center">
                <AiFillGithub />
                Source code
              </button>
            </a>
            <a href={liveDemo}>
              <button className="bg-cyan-500 text-white px-4 py-2 ml-5 rounded-md flex gap-2 items-center">
                <GrDeploy />
                Live demo
              </button>
            </a>
          </div>
        </div>
      )} */}
      <span
        className="px-6 py-4 rounded-lg text-2xl absolute -bottom-5 -right-5 text-white bg-cyan-500"
        style={{ fontFamily: 'Nova Oval, cursive' }}
      >
        {count}
      </span>
    </div>
  );
};

export default SingleProject;
