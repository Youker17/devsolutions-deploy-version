import bg from '@/assets/pricing-bg.jpg'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';


export default function Projects() {

    return (
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

            style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: 'cover',
            }}
            className="min-h-[90vh] mx-4 mt-10 flex justify-center rounded-4xl shadow-2xl  pb-32 pt-10 text-white font-display items-center">
            <div className="h-full">
                <div className="text-center font-semibold">
                    <h1 className="text-5xl">
                        <span>Our  </span>
                        <span className="text-blue-700 tracking-wide">Projects</span>
                    </h1>
                    <p className="pt-6 text-xl text-gray-100 font-normal w-full px-8 md:w-full">
                        Explore some of our projects
                        <br /> We Are proud of !
                    </p>
                </div>
                <Swiper
                className='mt-10 border-2 border-white rounded-xl mx-auto h-full'
                    spaceBetween={50}
                    slidesPerView={1}
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                </Swiper>
            </div>
        </motion.div>

    )
}