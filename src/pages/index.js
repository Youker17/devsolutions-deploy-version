import Image from 'next/image'
import { Inter } from 'next/font/google'
import PageIntro from '@/components/PageIntro'
import Container from '@/components/Container'
import FadeIn from '@/components/FadeIn'
import Clients from '@/components/Clients'
import Testimonials from '@/components/Testimonials'
import Services from '@/components/Services'
import ContactSection from '@/components/ContactSection'
import logoPhobiaDark from "@/assets/logo-dark.svg";

const inter = Inter({ subsets: ['latin'] })

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
    <main className="text-black">
    <Container className="mt-24 sm:mt-32">
      <FadeIn className="max-w-3xl">
        <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
          Make your online presence a reality with us!
        </h1>
        <p className="mt-6 text-xl text-neutral-600">
          We are a group of developer working at the intersection of design
          and technology. It is a really busy intersection though — a lot of
          our staff have been involved in hit and runs.
        </p>
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
    <Services />
    <ContactSection />
  </main>
  )
}
