import React from 'react'
import SectionIntro from './HeroSection'
import youker from "@/assets/youker.jpeg"
import abdo from "@/assets/abdo.jpg"
import Image from 'next/image'

function Team() {
  return (
    
<section>
  <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
  <SectionIntro
        eyebrow="Team"
        title="Our Collaborative Team"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        Meet our exceptional team of dedicated individuals who bring diverse skills,
        perspectives, and experiences to the table.
        </p>
    </SectionIntro>
    <ul class="grid mt-16 md:grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8 justify-center">
      <li class="mx-auto flex flex-col md:flex-row items-center gap-4 border border-solid rounded-xl  border-[rgb(223,223,223)] bg-white p-8 text-center md:items-start md:text-left max-w-sm md:max-w-full">
        <Image width={300} height={300} src={youker}  draggable={false} alt="" class="inline-block h-64 w-full object-cover rounded-xl [filter:grayscale(100%)] hover:[filter:grayscale(0%)] duration-300 ease-in-out transition-all"   />
        <div>
          <p class="font-bold">Youssef Elmofaker</p>
          <p class="font-semibold text-[#647084] mb-4">Web Developer</p>
          <p class="text-sm text-[#647084]">Highly skilled full-stack developer with a passion for creating seamless and responsive web applications. With a solid foundation in both front-end and back-end technologies,I leverages my expertise to build user-friendly interfaces and robust server-side functionalities. </p>
        </div>
      </li>
      <li class="mx-auto flex flex-col md:flex-row items-center gap-4 border border-solid rounded-xl  border-[#dfdfdf] bg-white p-8 text-center md:items-start md:text-left max-w-sm md:max-w-full">
      <Image width={300} height={300} src={abdo} alt="" draggable={false}  class="inline-block h-64 w-full object-cover rounded-xl [filter:grayscale(100%)] hover:[filter:grayscale(0%)] duration-300 ease-in-out transition-all  " />
        <div>
          <p class="font-bold">Abdallah Agmar</p>
          <p class="font-semibold text-[#647084] mb-4">Web Developer</p>
          <p class="text-sm text-[#647084]">Creative and detail-oriented front-end developer who specializes in crafting engaging and visually appealing user interfaces. Proficient in HTML, CSS, and JavaScript.I transforms design concepts into interactive and dynamic websites.</p>
        </div>
      </li>
    </ul>
  </div>
  </section>
  )
}

export default Team