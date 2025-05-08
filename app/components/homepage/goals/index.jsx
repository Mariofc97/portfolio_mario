// @flow strict

import Image from "next/image";
// import AnimationLottie from "@/components/helper/animation-lottie";
// import goalAnimation from '../../../assets/lottie/goals.json';

function GoalsSection() {
  return (
    <div id="goals" className="my-12 lg:my-16 mb-12 lg:mb-16 relative">
      {/* Etiqueta lateral */}
      <div className="hidden lg:flex flex-col items-center absolute top-16 -left-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          MY GOALS
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Izquierda: Imagen con borde difuminado */}
        <div className="flex justify-center order-1 lg:order-1">
          <div className="relative w-80 h-52 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/data-analysis.jpg"
              alt="Data Analysis Visual"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              style={{ filter: 'blur(1px) brightness(1.1)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30 rounded-lg"></div>
          </div>
        </div>

        {/* Derecha: Texto */}
        <div className="order-2 lg:order-2">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            My Future Vision
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
          As someone who’s recently stepped into the world of programming, I’m excited to see how I can combine this growing skill set with my solid background in business, statistics, and mathematics. I’m really excited to explore the world of data analysis in the future.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GoalsSection;