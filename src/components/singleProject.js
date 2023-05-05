import { BsFolder2Open } from 'react-icons/bs';
import {
  MdArrowForwardIos,
  MdOutlineArrowBackIos,
  MdOutlineOpenInNew,
} from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';

const Project = (props) => {
  const { project, type, index, pics } = props;
  const [currentPic, setCurrentPic] = useState(0);

  const handleCurrentPic = (inp) => {
    if (inp === 'next') setCurrentPic((currentPic + 1) % pics.length);
    else {
      setCurrentPic((current) => {
        if (current === 0) {
          current = pics.length;
        }
        return (current - 1) % pics.length;
      });
    }
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPic((state) => (state + 1) % pics.length);
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [currentPic]);

  return (
    <div
      className={`relative w-full h-full flex duration-500 ${
        !type ? 'hover:-translate-y-2' : ''
      }`}
    >
      {type && (
        <div
          className={`absolute flex w-full lg:w-3/5 h-full ${
            index % 2 === 0 ? 'left-0' : 'right-0'
          }`}
        >
          <div className="relative w-full my-auto h-full lg:h-max">
            <div className="hidden lg:flex absolute w-full h-full z-10 bg-shade/50 hover:opacity-0 duration-200" />
            {pics.length > 1 && (
              <div className="hidden lg:flex absolute z-[20] text-gray-500 bottom-5 left-5 gap-5 text-2xl">
                <MdOutlineArrowBackIos
                  className="hover:text-orange-400 duration-200 cursor-pointer"
                  onClick={() => handleCurrentPic('prev')}
                />
                <MdArrowForwardIos
                  className="hover:text-orange-400 duration-200 cursor-pointer"
                  onClick={() => handleCurrentPic('next')}
                />
              </div>
            )}
            {pics.map((pic, pos) => (
              <img
                key={pos}
                src={pic}
                className={`absolute top-0 w-full h-full duration-300 opacity-0 aspect-video ${
                  pos === currentPic ? 'opacity-100 relative' : 'opacity-0'
                }`}
                width={1850}
                height={950}
                alt="project-pic"
              />
            ))}
          </div>
        </div>
      )}
      <div
        className={`px-4 relative z-10 bg-gray-800/90 lg:bg-transparent py-6 ${
          type && index % 2 === 0 ? 'lg:ml-auto lg:text-end' : 'lg:mr-auto'
        } ${!type ? 'lg:mr-0' : 'lg:w-1/2'}`}
        key={uuidv4()}
      >
        {type ? (
          <p className="text-xl text-orange-200 font-pro">{type}</p>
        ) : (
          <div className="mb-7 mt-2 flex items-center justify-between">
            <BsFolder2Open className="text-4xl" />
          </div>
        )}
        <h2 className="text-4xl font-extrabold">{project.title}</h2>
        <p className="mt-8 lg:bg-gray-800 lg:p-3 text">{project.description}</p>
        <ul
          className={`flex flex-wrap gap-4 mt-5 font-plexMono w-full lg:w-4/6 text-gray-400 ${
            index % 2 === 0 ? 'lg:ml-auto lg:justify-end' : ''
          }`}
        >
          {project.stack.map((ele) => (
            <li key={uuidv4()}>{ele}</li>
          ))}
        </ul>
        {project.link && (
          <div
            className={`flex gap-5 relative text-2xl px-4 py-2 text-orange-200 w-full ${
              index % 2 === 0 ? 'justify-end' : ''
            } mt-10`}
          >
            <a target="_blank" rel="noopener noreferrer" href={project.link[0]}>
              <FaGithub className="hover:text-orange-400 cursor-pointer" />
            </a>
            {project.link.length > 1 && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.link[1]}
              >
                <MdOutlineOpenInNew className="hover:text-orange-400 cursor-pointer" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
