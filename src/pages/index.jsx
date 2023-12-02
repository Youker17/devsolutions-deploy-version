import client from "@/assets/client.jpg"
import Container from '@/components/Container'
import FadeIn from '@/components/FadeIn'
import Clients from '@/components/Clients'
import Testimonials from '@/components/Testimonials'
import Services from '@/components/Services'
import ContactSection from '@/components/ContactSection'
import logoPhobiaDark from "@/assets/logo-dark.svg";
import Element3d from '@/components/Element3d'
import PricingTable from "@/components/PricingTable"
import { TestimonialTooltip } from "@/components/ToolTip"
import Team from "@/components/Team"
import { useEffect } from "react"
import Script from "next/script"




export default function Home() {
  return (
    
    // <section className=' relative flex  w-full h-[100vh]'>
    //    <PageIntro eyebrow="" title="Make your online presence a reality with us!">
    //     <p>
    //     We are a group of developer working at the intersection of design and technology. It is a really busy intersection though — a lot of our staff have been involved in hit and runs.
    //     </p>
    //   </PageIntro>
    //  {/* <div className='w-2/6 '>
    //  {/* <iframe className='absolute -top-20   h-[80vh]   'src='https://my.spline.design/computerlove-896e3135f3618264dfe318177c23b94d/' frameborder='0' width='50%' height='100%'></iframe> 
    //  {/* <iframe className='absolute top-2 right-10 h-[80vh]  ' src='https://my.spline.design/computerlove-401bcc672741cecc503f65b1fc9f611a/' frameborder='0' width='50%' height='50%'></iframe> 
    //  </div> 
    //    {/* <Image src={"https://wp.codewp.ai/wp-content/uploads/2023/09/IMG_4435-1-scaled.jpg"} className=' absolute top-14 object-cover w-full h-[600px]  right-0 -z-20 ' alt='hero__img' width={1000} height={1000} /> */}
    // </section>
    <main className="text-black relative">
         <div className="cursor"></div>
      <Container subDivClassName={"flex flex-col md:flex-row justify-between"} className="mt-16  sm:mt-20">
        {/* <div className='w-[70vw] origin-center h-[90vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-600/25 via-sky-100/0 absolute -top-80 -left-40'/> */}
        <FadeIn className="md:w-1/2 flex flex-col ">
          <h1 className="font-display text-3xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Improve Your Online Presence!
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We are a group of developer working at the intersection of design
            and technology. It is a really busy intersection though — a lot of
            our staff have been involved in hit and runs.
          </p>
          <div className='flex flex-row gap-3 justify-start items-end '>
            <div className="relative max-w-xs mt-5">
              <input
                type="email"
                placeholder="Email address"
                autoComplete="email"
                aria-label="Email address"
                className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
              />
              <div className="absolute inset-y-1 right-1 flex justify-end">
                <button
                  type="submit"
                  aria-label="Submit"
                  className="flex aspect-square h-full items-center justify-center rounded-xl bg-blue-800 text-white transition hover:bg-blue-900"
                >
                  <svg className='w-4' viewBox="0 0 16 6" aria-hidden="true" >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <button
              type="submit"
              aria-label="Submit"
              className="flex py-3.5 group px-3  items-center justify-center rounded-xl font-display font-bold border-blue-800 border-2 hover:text-white text-blue-800 transition-all  hover:bg-blue-800"
            >
              Explore Prices
              <svg className='ml-2 w-4 group-hover:text-white text-blue-800 transition-all' viewBox="0 0 16 6" aria-hidden="true" >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                />
              </svg>
            </button>
          </div>
         <TestimonialTooltip />

        </FadeIn>
        <FadeIn className="w-full h-[40vh] md:h-auto md:w-[50vw] flex flex-col justify-center items-center">
          <Element3d />
        </FadeIn>

      </Container>
      <Clients />
      <Testimonials
        className="mt-24 "
        client={{ name: "Phobia", logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user microphone without triggering one of
        those annoying permission dialogs.
      </Testimonials>
      <PricingTable />
      <Services />
      <Team />
      <ContactSection />
    </main>
  )
}
