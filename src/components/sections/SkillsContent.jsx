import React from 'react'
import LeftElement from '../animations/LeftElement';
import SpanLines from '../animations/SpanLines';
import RightContainer from '../animations/RightContainer';

const SkillsContent = () => {

  const skillSections = [
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: "/skill-icons/nodejs-icon.svg" },
        { name: "Java", icon: "/skill-icons/java-icon.svg" },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "React", icon: "/skill-icons/react-icon.svg" },
        { name: "Next.js", icon: "/skill-icons/next-icon.svg" },
        { name: "JavaScript", icon: "/skill-icons/javascript-icon.svg" },
        { name: "TypeScript", icon: "/skill-icons/typescript-icon.svg" },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "MongoDB", icon: "/skill-icons/mongo-icon.svg" },
        { name: "PostgreSQL", icon: "/skill-icons/postgres.svg" },
        { name: "MySQL", icon: "/skill-icons/mysql-icon.svg" },
      ],
    },
    {
      category: "Tools",
      items: [{ name: "Git", icon: "/skill-icons/git-icon.svg" }],
    },
  ];

  return (

    <div className="flex relative justify-between mx-[var(--section-padding)] gap-10  h-full">
      <div className="flex justify-between  relative mt-10">
        <LeftElement>
          <div className="text-[75px] font-semibold -space-y-6 mb-5">
            <h1>Skills &</h1>
            <h1>Tech Stack</h1>
          </div>
          <SpanLines />

        </LeftElement>
      </div>

      <RightContainer>
        <div className="h-full w-full flex flex-col justify-center overflow-hidden">
          <div className="flex flex-col justify-center space-y-4 max-h-full">
            {skillSections.map((section, index) => (
              <div key={section.category} className="w-full">
                {/* Row: category on left, icons on right */}
                <div className="flex items-center w-full">
                  {/* Category name */}
                  <div className="w-1/3 pr-4">
                    <h2 className="text-lg font-semibold text-white">{section.category}</h2>
                  </div>

                  {/* Icons */}
                  <div className="w-2/3 flex gap-3 flex-wrap justify-start">
                    {section.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex flex-col items-center justify-between group transition-transform p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-105 duration-300 w-[80px] h-[80px]"
                      >
                        <div className="flex items-center justify-center h-10 w-10">
                          <img
                            src={item.icon}
                            alt={item.name}
                            className="w-9 h-9 hover:scale-110 transition-transform duration-200 object-contain"
                          />
                        </div>
                        <span className="text-xs text-white/70 text-center leading-tight">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {index !== skillSections.length - 1 && (
                  <hr className="border-white/10 my-3" />
                )}
              </div>
            ))}
          </div>
        </div>
      </RightContainer>


    </div>


  )
}

export default SkillsContent
