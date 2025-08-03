'use client'

import Image from "next/image";

const galleryImages = [
  "/images/gallery/building-3.jpg",
  "/images/gallery/inaguaration.jpg",
  "/images/gallery/garden.jpg",
  "/images/gallery/machines.jpg",
  "/images/gallery/minister-visit.jpg",
  "/images/gallery/staffs.jpg",
  "/images/gallery/worker-solder.jpg",
  "/images/gallery/workers.jpg",
  "/images/gallery/building-5.jpg",
  "/images/gallery/building.jpg",
  "/images/gallery/building-2.jpg",
  "/images/gallery/building-4.jpg",
  "/images/gallery/building-6.jpg",

];


export default function Gallery() {

    return (

        <div className=" w-full h-full pb-10 bg-gray-100 flex justify-center items-center ">

        <div className=" w-11/12 xl:w-10/12">
            <h1 className="text-3xl font-bold text-gray-800 my-10 md:my-16 xl:my-20 text-center">Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 xl:gap-10">
                {galleryImages.map((src, index) => (
                    <div
                        key={index}
                        className="col-span-1 sm:col-span-1 lg:col-span-2 overflow-hidden rounded-xl shadow-md"
                    >
                        <div className="relative w-full h-56 md:h-64 xl:h-96 group">
                            <Image
                                src={src}
                                alt={`Gallery Image ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-[1000ms] group-hover:scale-110"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>

    );
}
