import React from 'react'
import Container from './Container'
import SectionIntro from './SectionIntro'
import project1 from "@/assets/projects/project1.png"
import project2 from "@/assets/projects/project2.png"
import project3 from "@/assets/projects/project3.png"
import project4 from "@/assets/projects/project4.png"
import project5 from "@/assets/projects/project5.png"
import project6 from "@/assets/projects/project6.png"
import project7 from "@/assets/projects/project7.png"
import Image from 'next/image'
import FadeIn from './FadeIn'

function ListProjects() {
  return (
    
<>
<SectionIntro
        eyebrow="Projects"
        title="Explore Our Work"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        Welcome to my projects showcase! Below, you'll find a collection of some of
    the exciting projects I've had the pleasure of working on. Each project
    represents a unique challenge and an opportunity for innovation.

        </p>
    </SectionIntro>



 <div className='mt-28 flex flex-col gap-10'>
<FadeIn>
 <div class="mx-auto w-full max-w-7xl px-5 py-4 md:px-10 ">
    <div class="mx-auto flex  flex-col-reverse lg:flex-row  gap-4  lg:gap-10">
    
      <div class="relative flex flex-col  gap-4 lg:w-2/6  md:h-auto">
      <h2 class="text-3xl font-semibold md:text-5xl font-display">DesignJoy</h2>
            <p class="flex-col text-[#808080] text-sm  sm:text-base">
            Aliquet risus feugiat in ante metus. Arcu dui vivamus arcu felis bibendum ut. Vestibulum lorem sed risus ultricies tristique nulla. Vitae et leo duis ut diam quam. Bibendum arcu vitae elementum curabitur vitae nunc. Dictumst vestibulum rhoncus est pellentesque. Lectus proin nibh nisl condimentum id. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.
            </p>
            <div class="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
              <div class="rounded-sm bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#636262]">
                <p>WEB DESIGN</p>
              </div>
              <div class="rounded-sm bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#636262]">
                <p>UI / UX</p>
              </div>
              <div class="rounded-sm bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#636262]">
                <p>WEBFLOW</p>
              </div>
            </div>    
      </div>
     
      <div class="relative flex lg:h-[350px] lg:w-4/6 items-end">
        <Image draggable={false} height={400} width={400} src={project6} alt="" class="inline-block h-full w-full rounded-lg object-cover" />
        <a href="#" class="inline-block rounded-md absolute bottom-5 left-5 bg-black px-6 py-3 text-center font-semibold text-white">
            View Project
        </a>
      </div>
  
    </div>
  </div>
 </FadeIn>


 <FadeIn>
  <div class="mx-auto w-full max-w-7xl px-5 py-4 md:px-10 ">
    <div class="mx-auto flex  flex-col-reverse   lg:flex-row-reverse gap-4  lg:gap-10">
    
      <div class="relative flex flex-col  gap-4 lg:w-2/6  md:h-auto">
      <h2 class="text-3xl font-semibold md:text-5xl font-display">DevCraft</h2>
            <p class="flex-col text-[#808080] text-sm  sm:text-base">
            Aliquet risus feugiat in ante metus. Arcu dui vivamus arcu felis bibendum ut. Vestibulum lorem sed risus ultricies tristique nulla. Vitae et leo duis ut diam quam. Bibendum arcu vitae elementum curabitur vitae nunc. Dictumst vestibulum rhoncus est pellentesque. Lectus proin nibh nisl condimentum id. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.
            </p>
            <div class="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
              <div class="rounded-sm bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#636262]">
                <p>WEB DESIGN</p>
              </div>
              <div class="rounded-sm bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#636262]">
                <p>UI / UX</p>
              </div>
              <div class="rounded-sm bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#636262]">
                <p>WEBFLOW</p>
              </div>
            </div>    
      </div>
     
      <div class="relative flex lg:h-[350px] lg:w-4/6 items-end">
        <Image draggable={false} height={400} width={400} src={project5} alt="" class="inline-block h-full w-full rounded-lg object-cover" />
        <a href="#" class="inline-block rounded-md absolute bottom-5 left-5 bg-black px-6 py-3 text-center font-semibold text-white">
            View Project
        </a>
      </div>
  
    </div>
  </div>
  </FadeIn>


  <FadeIn>
  <div class="mx-auto w-full max-w-7xl px-5 py-4 md:px-10 ">
    <div class="mx-auto flex  flex-col-reverse lg:flex-row  gap-4  lg:gap-10">
    
      <div class="relative flex flex-col  gap-4 lg:w-2/6  md:h-auto">
      <h2 class="text-3xl font-semibold md:text-5xl font-display">YourCad</h2>
            <p class="flex-col text-[#808080] text-sm  sm:text-base">
            Aliquet risus feugiat in ante metus. Arcu dui vivamus arcu felis bibendum ut. Vestibulum lorem sed risus ultricies tristique nulla. Vitae et leo duis ut diam quam. Bibendum arcu vitae elementum curabitur vitae nunc. Dictumst vestibulum rhoncus est pellentesque. Lectus proin nibh nisl condimentum id. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.
            </p>
            <div class="mb-5 mt-6 flex flex-wrap gap-2 md:mb-6 lg:mb-8">
              <div class="rounded-sm bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#636262]">
                <p>WEB DESIGN</p>
              </div>
              <div class="rounded-sm bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#636262]">
                <p>UI / UX</p>
              </div>
              <div class="rounded-sm bg-[#d9d9d9] p-2 text-sm font-semibold uppercase text-[#636262]">
                <p>WEBFLOW</p>
              </div>
            </div>    
      </div>
     
      <div class="relative flex lg:h-[350px] lg:w-4/6 items-end">
        <Image draggable={false} height={400} width={400} src={project3} alt="" class="inline-block h-full w-full rounded-lg object-cover" />
        <a href="#" class="inline-block rounded-md absolute bottom-5 left-5 bg-black px-6 py-3 text-center font-semibold text-white">
            View Project
        </a>
      </div>
  
    </div>
  </div>
</FadeIn>

 </div>
 
</>
  )
}

export default ListProjects