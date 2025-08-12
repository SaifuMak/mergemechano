'use client'
import { useRef, useEffect, useState } from "react";

export default function Banner() {
    const [isBannerVideoLoaded, setIsBannerVideoLoaded] = useState(false)

    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current?.readyState >= 3) { // 3 = HAVE_FUTURE_DATA
            console.log("Video already loaded (readyState:", videoRef.current.readyState, ")");
            setIsBannerVideoLoaded(true);
        }
    }, []);

    return (
        <section className="relative w-full  min-h-[70vh] overflow-hidden">
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="https://res.cloudinary.com/dbmsyy9mx/video/upload/v1753678033/merge_mecano_tbwekt.mp4" type="video/mp4" />

            </video>
            <div className=" absolute w-full h-full inset-0 bg-gradient-to-b from-black/70 to-transparent  "></div>

            <div className="relative z-10 max-w-7xl mx-auto  md:mt-6  flex flex-col md:flex-row items-center px-6 py-16 gap-10 text-white">

                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Welcome to Mergemechano Private limited
                    </h1>
                    <p className="text-lg mb-6 text-white max-w-md font-normal">
                        We offer an assortment of machinery that enhances and enriches you in automobile servicing.
                    </p>
                    <a href="/contact">
                        <button className="text-sm bg-red-600 text-white mb-20 font-medium px-10 py-3 rounded-full hover:bg-red-900 transition">
                            Contact
                        </button>
                    </a>
                </div>


            </div>
        </section>
    );
}
