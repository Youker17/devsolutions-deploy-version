import bg from '@/assets/pricing-bg.jpg'
import { motion } from 'framer-motion'


export default function PricingTable() {

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
        
            style={{ backgroundImage: `url(${bg.src})` ,
                backgroundSize: 'cover',
        }}
            className="min-h-[90vh] mx-4 mt-10 flex justify-center rounded-4xl shadow-2xl  pb-32 pt-10 text-white font-display items-center">
            <div className="">
                <div className="text-center font-semibold">
                    <h1 className="text-5xl">
                        <span>Our  </span>
                        <span className="text-blue-700 tracking-wide">Solutions</span>
                    </h1>
                    <p className="pt-6 text-xl text-gray-100 font-normal w-full px-8 md:w-full">
                        Choose a plan that works best for you and
                        <br /> your team.
                    </p>
                </div>
                <div className="pt-24 flex flex-row">
                    {/* Basic Card */}
                    <div className="w-96 p-8 bg-white  text-center rounded-3xl pr-16 shadow-xl">
                        <h1 className="text-black font-semibold text-2xl">Basic</h1>
                        <p className="pt-2 tracking-wide">
                            <span className="text-gray-400 align-top">$ </span>
                            <span className="text-3xl font-semibold text-black">10</span>
                            <span className="text-gray-400 font-medium">/ user</span>
                        </p>
                        <hr className="mt-4 border-1" />
                        <div className="pt-8">
                            <p className="font-semibold text-gray-400 text-left">
                                <span className="material-icons align-middle">done</span>
                                <span className="pl-2">
                                    Get started with <span className="text-black">messaging</span>
                                </span>
                            </p>
                            <p className="font-semibold text-gray-400 text-left pt-5">
                                <span className="material-icons align-middle">done</span>
                                <span className="pl-2">
                                    Flexible <span className="text-black">team meetings</span>
                                </span>
                            </p>
                            <p className="font-semibold text-gray-400 text-left pt-5">
                                <span className="material-icons align-middle">done</span>
                                <span className="pl-2">
                                    <span className="text-black">5 TB</span> cloud storage
                                </span>
                            </p>
                            <a href="#" className="">
                                <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                                    <span className="font-medium">Choose Plan</span>
                                    <span className="pl-2 material-icons align-middle text-sm">
                                        east
                                    </span>
                                </p>
                            </a>
                        </div>
                    </div>
                    {/* StartUp Card */}
                    <div className="w-80 p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-125">
                        <h1 className="text-white font-semibold text-2xl">Startup</h1>
                        <p className="pt-2 tracking-wide">
                            <span className="text-gray-400 align-top">$ </span>
                            <span className="text-3xl font-semibold text-white">24</span>
                            <span className="text-gray-400 font-medium">/ user</span>
                        </p>
                        <hr className="mt-4 border-1 border-gray-600" />
                        <div className="pt-8">
                            <p className="font-semibold text-gray-400 text-left">
                                <span className="material-icons align-middle">done</span>
                                <span className="pl-2">
                                    All features in <span className="text-white">Basic</span>
                                </span>
                            </p>
                            <p className="font-semibold text-gray-400 text-left pt-5">
                                <span className="material-icons align-middle">done</span>
                                <span className="pl-2">
                                    Flexible <span className="text-white">call scheduling</span>
                                </span>
                            </p>
                            <p className="font-semibold text-gray-400 text-left pt-5">
                                <span className="material-icons align-middle">done</span>
                                <span className="pl-2">
                                    <span className="text-white">15 TB</span> cloud storage
                                </span>
                            </p>
                            <a href="#" className="">
                                <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                                    <span className="font-medium">Choose Plan</span>
                                    <span className="pl-2 material-icons align-middle text-sm">
                                        east
                                    </span>
                                </p>
                            </a>
                        </div>
                        <div className="absolute top-4 right-4">
                            <p className="bg-blue-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">
                                Popular
                            </p>
                        </div>
                    </div>
                    {/* Enterprise Card */}
                    <div className="w-96 p-8 bg-white  text-center rounded-3xl pl-16 shadow-xl">
                        <h1 className="text-black font-semibold text-2xl">Enterprise</h1>
                        <p className="pt-2 tracking-wide">
                            <span className="text-gray-400 align-top">$ </span>
                            <span className="text-3xl font-semibold text-black">35</span>
                            <span className="text-gray-400 font-medium">/ user</span>
                        </p>
                        <hr className="mt-4 border-1" />
                        <div className="pt-8">
                            <p className="font-semibold text-gray-400 text-left">
                                <span className="material-icons align-middle">done</span>
                                <span className="pl-2">
                                    All features in <span className="text-black">Startup</span>
                                </span>
                            </p>
                            <p className="font-semibold text-gray-400 text-left pt-5">
                                <span className="material-icons align-middle">done</span>
                                <span className="pl-2">
                                    Growth <span className="text-black">oriented</span>
                                </span>
                            </p>
                            <p className="font-semibold text-gray-400 text-left pt-5">
                                <span className="material-icons align-middle">done</span>
                                <span className="pl-2">
                                    <span className="text-black">Unlimited</span> cloud storage
                                </span>
                            </p>
                            <a href="#" className="">
                                <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                                    <span className="font-medium">Choose Plan</span>
                                    <span className="pl-2 material-icons align-middle text-sm">
                                        east
                                    </span>
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

    )
}