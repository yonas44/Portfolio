import { projects } from '@/utils/data';
import React, { useState, useEffect } from 'react';
import SingleProject from './singleProject';
import booking from '../assets/booking.png';
import budget from '../assets/budget.png';
import weather from '../assets/weather.png';
import movie from '../assets/moviex.png';
import { v4 as uuidv4 } from 'uuid';

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
    <div className="relat">
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
      <div className="slider-bullets mt-10 flex gap-2 justify-center">
        {projects.map((project, index) => (
          <span
            className={`w-[10px] inline-block bg-gray-400 border rounded-full ${
              index === currentSlide ? 'bg-gray-800' : ''
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
