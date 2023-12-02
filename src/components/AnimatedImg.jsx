import React, { useEffect } from 'react'
import project1 from "@/assets/projects/project1.png"
import project2 from "@/assets/projects/project2.png"
import project3 from "@/assets/projects/project3.png"
import project4 from "@/assets/projects/project4.png"
import project5 from "@/assets/projects/project5.png"
import project6 from "@/assets/projects/project6.png"
import project7 from "@/assets/projects/project7.png"
import Image from 'next/image';

function AnimatedImg() {

    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
    },[])



  return (
   <div className=' mt-20 '>
     <div className="scroller w-5/6" data-direction="right" data-speed="slow">
        <div className="scroller__inner">
            <Image src={project1} alt="" width={300} height={10} className=' object-cover'  />
            <Image src={project2} alt="" width={300} height={10} className=' object-cover'  />
            <Image src={project3} alt="" width={300} height={10} className=' object-cover'  />
            <Image src={project4} alt="" width={300} height={10} className=' object-cover'  />
            <Image src={project5} alt="" width={300} height={10} className=' object-cover'  />
            <Image src={project6} alt="" width={300} height={10} className=' object-cover'  />
        </div>
   </div>
     <div className="scroller" data-direction="left" data-speed="slow">
        <div className="scroller__inner">
            <Image src={project7} alt="" width={300} height={10} className=' object-cover'  />
            <Image src={project2} alt="" width={300} height={10} className=' object-cover'  />
            <Image src={project3} alt="" width={300} height={10} className=' object-cover'  />
            <Image src={project4} alt="" width={300} height={10} className=' object-cover'  />
            <Image src={project5} alt="" width={300} height={10} className=' object-cover'  />
            <Image src={project6} alt="" width={300} height={10} className=' object-cover'  />
        </div>
   </div>
     <div className="scroller  w-5/6" data-direction="right" data-speed="slow">
        <div className="scroller__inner">
            <Image src={project1} alt="" width={300} height={10} className=' object-cover'  />
            <Image src={project2} alt="" width={300} height={10} className=' object-cover'  />
            <Image src={project3} alt="" width={300} height={10} className=' object-cover'  />
            <Image src={project4} alt="" width={300} height={10} className=' object-cover'  />
            <Image src={project5} alt="" width={300} height={10} className=' object-cover'  />
            <Image src={project6} alt="" width={300} height={10} className=' object-cover'  />
        </div>
   </div>
   </div>
  )
}

export default AnimatedImg