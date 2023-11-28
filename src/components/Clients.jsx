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
<section>
<div class="px-5 py-16 md:px-10 md:py-24 ">
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
</div>
</section>
  )
};

export default Clients;