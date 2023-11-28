
import Container from '@/components/Container'
import FadeIn from '@/components/FadeIn'
import Clients from '@/components/Clients'
import Testimonials from '@/components/Testimonials'
import Services from '@/components/Services'
import ContactSection from '@/components/ContactSection'
import logoPhobiaDark from "@/assets/logo-dark.svg";



export default function Home() {
  return (
    <main className="text-black">
    <Container className="mt-24 sm:mt-32 flex" subDivclassName="flex">
      <FadeIn className="w-3/6">
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
