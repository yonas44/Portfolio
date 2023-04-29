import { projects } from '@/utils/data';
import React, { useState, useEffect } from 'react';
import SingleProject from './singleProject';
import booking from '../assets/booking.png';
import budget from '../assets/budget.png';
import weather from '../assets/weather.png';
import movie from '../assets/moviex.png';
import { v4 as uuidv4 } from 'uuid';
import { BsChevronCompactRight } from 'react-icons/bs';

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % projects.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide, projects]);

  function handleBulletClick(index) {
    setCurrentSlide(index);
  }

  const projectPictures = [booking, budget, weather, movie];

  return (
    <div className="relative h-[500px] lg:h-screen lg:w-screen lg:-left-40 mt-10 lg:m-0">
      {projects.map((project, index) => (
        <SingleProject
          key={uuidv4()}
          index={index}
          title={project.title}
          image={projectPictures[index]}
          currentSlide={currentSlide}
          description={project.description}
          sourceCode={project.links[0]}
          liveDemo={project.links[1]}
        />
      ))}
      <BsChevronCompactRight
        className="text-gray-500/50 absolute z-20 right-0 h-full w-[20%] cursor-pointer hover:text-gray-200"
        onClick={() => handleBulletClick((currentSlide + 1) % projects.length)}
      />
      <div className="slider-bullets mt-10 flex gap-2 justify-center absolute z-10 left-[15%] bottom-[8%]">
        {projects.map((project, index) => (
          <span
            className={`w-[6px] h-[6px] bg-gray-400 duration-300 ${
              index === currentSlide ? 'bg-white scale-150' : ''
            }`}
            key={index}
            onClick={() => handleBulletClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slider;
