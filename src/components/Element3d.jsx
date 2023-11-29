"use client";

import { useEffect, useState } from "react";



export default function Element3d() {
    const [loading, setLoading] = useState(true);

    return (
        <div className="w-[120%] h-[120%] relative ">
            {/* {
                loading?
                <div className="bg-white z-40 absolute top-0 left-0 w-full h-full border-2">
                    loading
                </div>:null
            } */}
            <iframe id="test" onLoad={e=>setLoading(false)} className="relative" src='https://my.spline.design/websitemodel-86aae82fc277caa721e45946a01329c5/' frameborder='0' width='100%' height='100%'>

            </iframe>
            <div className="bg-white w-40 h-10 absolute bottom-4 right-0">

            </div>
        </div>
    )
}