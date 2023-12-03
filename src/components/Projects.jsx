import bg from '@/assets/pricing-bg.jpg'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Autoplay ,EffectFade} from 'swiper/modules';
import Image from 'next/image'
import 'swiper/css/effect-fade';
import ProjectCardSwiper from './ProjectCardSwiper';
import Link from 'next/link';



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
            className="lg:min-h-[90vh] mx-4 mt-10 flex justify-center rounded-4xl shadow-2xl  pb-20 pt-20 text-white font-display ">
            <div className="h-full">
                <div className="text-center font-semibold">
                    <h1 className="text-5xl">
                        <span>Our Latest</span>
                        <span className="text-blue-700 tracking-wide"> Projects</span>
                    </h1>
                    <p className="pt-6 text-xl text-gray-100 font-normal w-full px-8 md:w-full">
                        Explore some of our projects
                        <br /> We Are proud of !
                    </p>
                    
                </div>
                <Swiper
                    className=' w-[80vw] aspect-video lg:h-[80vh] mt-10'
                    spaceBetween={50}
                    modules={[Autoplay,EffectFade]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true

                    }}
                    effect='fade'
                    loop={true}
                    slidesPerView={1}
                >
                    <SwiperSlide className='bg-white/20 backdrop-blur-3xl h-full w-full flex flex-row justify-center items-center text-black rounded-3xl'>
                        <ProjectCardSwiper title="project 1" description="lorem ipsum dolor please finish this a bot dzb please dont make me write all this , hoof its finished" image={"https://wp.codewp.ai/wp-content/uploads/2023/09/IMG_4435-1-scaled.jpg"}/>
                    </SwiperSlide>
                    <SwiperSlide className='bg-white/20 backdrop-blur-3xl h-full w-full flex flex-row justify-center items-center text-black rounded-3xl'>
                        <ProjectCardSwiper title="project 2" description="lorem ipsum dolor please finish this a bot dzb please dont make me write all this , hoof its finished" image={"https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"}/>
                    </SwiperSlide>

                </Swiper>
                <Link
                    href={"/work"}
                    type="submit"
                    aria-label="Submit"
                    className="flex py-3.5 group px-3 mt-10 w-fit  items-center justify-center rounded-xl font-display font-bold border-blue-800 bg-white mx-auto border-2 hover:text-white text-blue-800 transition-all  hover:bg-blue-800"
                >
                    Explore work
                    <svg className='ml-2 w-4 group-hover:text-white text-blue-800 transition-all' viewBox="0 0 16 6" aria-hidden="true" >
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16 3 10 .5v2H0v1h10v2L16 3Z"
                        />
                    </svg>
                </Link>
            </div>
        </motion.div>

    )
}