// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import LeftElement from '../animations/LeftElement';
import SpanLines from '../animations/SpanLines';
import RightContainer from '../animations/RightContainer';

const SkillsContent = () => {


  return (

    <div className="flex relative justify-between mx-[var(--section-padding)] gap-10  h-full">
      <div className="flex justify-between  relative ">
        <LeftElement>
          <div className="text-[75px] font-semibold -space-y-6 mb-5 mt-10">
            <h1>Let’s Build Something Awesome Together</h1>
          </div>
          <SpanLines />

        </LeftElement>
      </div>

      <RightContainer>
      </RightContainer>


    </div>


  )
}

export default SkillsContent
