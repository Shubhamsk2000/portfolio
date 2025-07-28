import React from 'react'
import LeftElement from '../animations/LeftElement'
import RightContainer from '../animations/RightContainer'
import SpanLines from '../animations/SpanLines'

const ContactContent = () => {
  return (
    <div className="flex relative justify-between mx-[var(--section-padding)] gap-10">
      <div className="flex justify-between items-center relative ">
        <LeftElement>
          <div className="text-[75px] font-semibold -space-y-6 mb-5">
            <h1>Contact</h1>
          </div>
          <SpanLines />

        </LeftElement>
      </div>

      <RightContainer>
        <div className="grid grid-cols-2 gap-8 max-w-md">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Frontend</h3>
            <ul className="space-y-2 text-gray-300">
              <li>React</li>
              <li>Next.js</li>
              <li>Vue.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-400">Backend</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Python</li>
              <li>Django</li>
              <li>FastAPI</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Database</h3>
            <ul className="space-y-2 text-gray-300">
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>Redis</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-400">Tools</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Git</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
      </RightContainer>

    </div>
  )
}

export default ContactContent
