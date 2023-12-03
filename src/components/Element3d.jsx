"use client";

import { useEffect, useState } from "react";
import loadingimg from "@/assets/loading-model.png"



export default function Element3d() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        setTimeout(() => {
            setLoading(false)
        }, 3500)
    }
        , [])

    return (
        <div className="w-[120%] h-[120%] hidden lg:block relative ">
            <div className={`w-full h-full justify-center items-center  absolute z-[9999999] bg-white  top-0 left-0 ${loading ? "flex flex-row" : "hidden"}`} >
                <div className="w-full h-full justify-center items-center flex relative">
                    <div className="w-40 p-1 bg-white/80 backdrop-blur-xl absolute z-[99999999] top-[45%]  rounded-full h-6 flex justify-start ">
                        <div className="bg-gradient-to-tr  from-blue-600 to-blue-400 rounded-full transform  loader duration-3000 h-full">
                        </div>
                    </div>
                    <img className="object-contain w-3/4 blur-md" src={loadingimg.src} />
                </div>
            </div>
            <iframe id="test" loading="eager" onLoad={e => setLoading(false)} className="relative" src='https://my.spline.design/websitemodel-86aae82fc277caa721e45946a01329c5/' frameborder='0' width='100%' height='100%'>

            </iframe>
            <div className="bg-white w-40 h-10 absolute bottom-4 right-0">

            </div>
        </div>
    )
}