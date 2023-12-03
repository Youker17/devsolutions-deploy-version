import PageIntro from '@/components/PageIntro'
import React from 'react'

function index() {
  return (
    
<section>
  <div className="mx-auto w-full max-w-7xl px-5 py-16  ">
  <PageIntro eyebrow="Our Services" title="Elevating Your Digital Presence">
        <p>
        At DevSolutions, we take pride in delivering top-notch services that cater to your digital needs. 
        Our team of experienced professionals is dedicated to providing innovative solutions tailored to your business objectives.
        </p>
      </PageIntro>
    <div className="grid gap-5 mt-14 sm:grid-cols-2 md:grid-cols-3">
      <div className="flex flex-col gap-4 rounded-md border border-solid border-[#dfdfdf] bg-white p-8 md:p-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#000000]">
          <p className="text-xl font-bold text-white">1</p>
        </div>
        <p className="text-xl font-semibold">Custom Web Development</p>
        <p className="text-sm text-[#647084]">Transform your unique ideas into fully functional websites with our custom web development services. We leverage cutting-edge technologies to build tailored solutions that meet your specific business requirements.</p>
      </div>
      <div className="flex flex-col gap-4 rounded-md border border-solid border-[#dfdfdf] bg-white p-8 md:p-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#000000]">
          <p className="text-xl font-bold text-white">2</p>
        </div>
        <p className="text-xl font-semibold">Responsive Web Design</p>
        <p className="text-sm text-[#647084]">Ensure a seamless and engaging user experience across all devices with our responsive web design expertise. We create visually appealing and user-friendly interfaces that adapt to various screen sizes and resolutions.</p>
      </div>
      <div className="flex flex-col gap-4 rounded-md border border-solid border-[#dfdfdf] bg-white p-8 md:p-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#000000]">
          <p className="text-xl font-bold text-white">3</p>
        </div>
        <p className="text-xl font-semibold">E-Commerce Solutions</p>
        <p className="text-sm text-[#647084]">Boost your online business with our e-commerce solutions. From secure payment gateways to intuitive shopping experiences, we provide end-to-end e-commerce development services to help you thrive in the digital marketplace.</p>
      </div>
    </div>
    <div className="grid gap-5 mt-14 sm:grid-cols-2 md:grid-cols-3">
      <div className="flex flex-col gap-4 rounded-md border border-solid border-[#dfdfdf] bg-white p-8 md:p-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#000000]">
          <p className="text-xl font-bold text-white">4</p>
        </div>
        <p className="text-xl font-semibold">Content Management Systems</p>
        <p className="text-sm text-[#647084]">Take control of your website's content with our CMS development services. We implement user-friendly and scalable content management solutions, allowing you to easily manage and update your website's content without technical expertise.</p>
      </div>
      <div className="flex flex-col gap-4 rounded-md border border-solid border-[#dfdfdf] bg-white p-8 md:p-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#000000]">
          <p className="text-xl font-bold text-white">5</p>
        </div>
        <p className="text-xl font-semibold">SEO Optimization</p>
        <p className="text-sm text-[#647084]">Improve your website's visibility and attract organic traffic with our SEO optimization services. We employ industry best practices to enhance your website's search engine rankings and drive targeted audiences to your online presence.</p>
      </div>
      <div className="flex flex-col gap-4 rounded-md border border-solid border-[#dfdfdf] bg-white p-8 md:p-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#000000]">
          <p className="text-xl font-bold text-white">6</p>
        </div>
        <p className="text-xl font-semibold">Web Hosting and Maintenance</p>
        <p className="text-sm text-[#647084]">Ensure the seamless operation of your website with our reliable web hosting and maintenance services. From regular updates to performance monitoring, we take care of the technical aspects, allowing you to focus on your core business activities.</p>
      </div>
    </div>
  </div>
</section>
  )
}

export default index