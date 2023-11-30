import Image from "next/image";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import { motion } from "framer-motion";



const Clients = () => {
  return (
    //      <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
    //       <Container>
    //         <FadeIn className="flex items-center gap-x-8">
    //           <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
    //             We have worked with hundreds of amazing people
    //           </h2>
    //           <div className="h-px flex-auto bg-neutral-800" />
    //         </FadeIn>
    //         <FadeInStagger faster>
    //           <ul
    //             role="list"
    //             className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
    //           >
    //             {clients.map(([client, logo]) => (
    //               <li key={client}>
    //                 <FadeIn>
    //                   <Image src={logo} alt={client} unoptimized />
    //                 </FadeIn>
    //               </li>
    //             ))}
    //           </ul>
    //         </FadeInStagger>
    //       </Container> 
    //  </div>
    <Container>

      <section className="grid grid-cols-4 gap-3 w-full">
        <motion.div
        initial={{ opacity: 0, y: 20 }}
          whileInView={
            {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.1,
              },
            }
          }
         className=" bg-black flex flex-col justify-between rounded-xl h-40 shadow-2xl shadow-black/20 pb-6 p-10">
          <h2 className="text-2xl font-display text-white flex gap-3 font-bold">
            <svg class="w-6 h-6 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 0H1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1Zm14 0h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM5 14H1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Zm14 0h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1ZM12 2H8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2Zm0 14H8a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm-8-4V8a1 1 0 0 0-2 0v4a1 1 0 1 0 2 0Zm14 0V8a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0Z" />
            </svg>
            Blocks
          </h2>
          <h4 class="mb-4 text-xl text-white  font-display md:text-xl">200+</h4>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 20 }}
          whileInView={
            {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.2,
              },
            }
          }
         className=" bg-black rounded-xl h-40 shadow-2xl shadow-black/20 pb-6 p-10 flex flex-col justify-between">
          <h2 className="text-2xl font-display text-white font-bold flex flex-row gap-3">
            <svg class="w-6 h-6 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
              <path d="M19 0H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM2 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6H2Zm11 3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0h2a1 1 0 0 1 2 0v1Z" />
            </svg>
            Templates
          </h2>
          <h4 class="mb-4 text-xl text-white  font-display md:text-xl">200+</h4>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 20 }}
          whileInView={
            {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.3,
              },
            }
          }
         className=" bg-black rounded-xl h-40 shadow-2xl shadow-black/20 pb-6 p-10 flex flex-col justify-between">
          <h2 className="text-2xl font-display flex flex-row gap-3 text-white font-bold">
            <svg class="w-6 h-6 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 19">
              <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
              <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
            </svg>
            Customers
          </h2>
          <h4 class="mb-4 text-xl text-white  font-display md:text-xl">200+</h4>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 20 }}
          whileInView={
            {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.4,
              },
            }
          }
        
        
        className=" bg-black rounded-xl h-40 shadow-2xl shadow-black/20 pb-6 p-10 flex flex-col justify-between">

          <h2 className="text-2xl font-display text-white font-bold flex gap-3">
            <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
              <path d="M18 14H2a2 2 0 0 1-2-2V9.5a1 1 0 0 1 1-1 1.5 1.5 0 0 0 0-3 1 1 0 0 1-1-1V2a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2.5a1 1 0 0 1-1 1 1.5 1.5 0 0 0 0 3 1 1 0 0 1 1 1V12a2 2 0 0 1-2 2Z" />
            </svg>
            Support 
          </h2>
          <h4 class="mb-4 text-xl text-white  font-display md:text-xl">200+</h4>
        </motion.div>
        {/* <div class="px-6 py-10 md:px-8 md:py-14 ">
  <div class="mx-auto flex w-full max-w-[898px] flex-col rounded-[36px] bg-black py-8 text-white">
  <div class="grid h-full w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 md:gap-0">
  <div class="flex flex-col items-center justify-center lg:border-r lg:border-solid lg:border-r-[#c3c0c04d]">
  <h4 class="mb-4 text-2xl font-bold md:text-3xl">200+</h4>
  <p class="text-sm">Blocks</p>
  </div>
  <div class="flex flex-col items-center justify-center lg:border-r lg:border-solid lg:border-r-[#c3c0c04d]">
  <h4 class="mb-4 text-2xl font-bold md:text-3xl">45</h4>
  <p class="text-sm">Templates</p>
  </div>
  <div class="flex flex-col items-center justify-center lg:border-r lg:border-solid lg:border-r-[#c3c0c04d]">
        <h4 class="mb-4 text-2xl font-bold md:text-3xl">1500+</h4>
        <p class="text-sm">Customers</p>
        </div>
        <div class="flex flex-col items-center justify-center lg:border-r lg:border-solid lg:border-r-[#c3c0c04d]">
        <h4 class="mb-4 text-2xl font-bold md:text-3xl">890</h4>
        <p class="text-sm">Support Tickets</p>
        </div>
        </div>
        </div>
      </div> */}
      </section>
    </Container>
  )
};

export default Clients;