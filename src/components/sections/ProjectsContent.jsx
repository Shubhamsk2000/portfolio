import React from 'react'
import LeftElement from '../animations/LeftElement'
import SpanLines from '../animations/SpanLines'
import githubIcon from '../../assets/github.svg';
import { projects } from '../../data/projects';

const ProjectsContent = () => {
  return (
    <div className='mx-[var(--section-padding)]  gap-10 h-dvh py-20'>
      <LeftElement>
        <div className="text-[75px] font-semibold -space-y-6 mb-5">
          <h1>Projects</h1>

        </div>
        <SpanLines />
      </LeftElement>

      <div className="mt-10">
        <div className="flex gap-8 px-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-shrink-0 w-[calc(100%/1)] md:w-[calc(100%/2)] lg:w-[calc(100%/3)] snap-start 
                   bg-white/5 backdrop-blur-sm rounded-lg p-6 
                   hover:bg-white/10 transition-all duration-300 border border-white/10"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <div className="flex justify-between items-center">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--com-color)] hover:text-[var(--com-color)]/80 font-medium transition-colors duration-200"
                >
                  View Project →
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-200"
                >
                  <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default ProjectsContent
