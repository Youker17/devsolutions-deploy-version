import Image from "next/image";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";



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
        <div className=" bg-green-900/30 flex flex-col justify-between rounded-xl h-40 shadow-2xl shadow-black/20 pb-6 p-10">
          <h2 className="text-2xl font-display text-green-900 flex gap-3 font-bold">
          <svg class="w-6 h-6 text-green-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 0H1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1Zm14 0h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM5 14H1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1Zm14 0h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1ZM12 2H8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2Zm0 14H8a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm-8-4V8a1 1 0 0 0-2 0v4a1 1 0 1 0 2 0Zm14 0V8a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0Z" />
          </svg>
            Blocks
          </h2>
          <h4 class="mb-4 text-xl text-green-900  font-display md:text-xl">200+</h4>
        </div>
        <div className=" bg-red-900/30 rounded-xl h-40 shadow-2xl shadow-black/20 p-10">
          <h2 className="text-2xl font-display text-red-900 font-bold">
            Templates
          </h2>
        </div>
        <div className=" bg-blue-900/30 rounded-xl h-40 shadow-2xl shadow-black/20 p-10">
          <h2 className="text-2xl font-display text-blue-900 font-bold">
            Customers
          </h2>
        </div>
        <div className=" bg-yellow-900/30 rounded-xl h-40 shadow-2xl shadow-black/20 p-10">
          <h2 className="text-2xl font-display text-yellow-900 font-bold">
            Support Tickets
          </h2>
        </div>
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