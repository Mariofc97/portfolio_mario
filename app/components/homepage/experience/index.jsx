// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-4 lg:my-6 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={500}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-3 lg:py-4">
        <div className="flex items-center">
          <span className="w-16 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-4 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-16 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center">
          <div className="flex justify-center">
            <div className="w-full h-[350px]">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div className="flex justify-center md:mt-6">
            <div className="flex flex-col gap-4">
              {experiences.map((experience) => (
                <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                  <div className="p-3 relative">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-amber-300">
                        {experience.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-6 px-2 py-3">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={28} />
                      </div>
                      <div>
                        <p className="text-base sm:text-lg mb-1 font-medium uppercase">
                          {experience.title}
                        </p>
                        <p className="text-sm sm:text-base">
                          {experience.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Experience;