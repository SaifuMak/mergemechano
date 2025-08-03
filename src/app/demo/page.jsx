'use client';

import { timelineData } from "../data/timeline";

export default function Demo() {


    return (


        <div className="relative md:w-9/12  mx-auto my-10 md:p-6 max-md:p-8">

            {/* <div className="absolute top-0 md:left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-100"></div> */}
            <div className="absolute top-0 md:left-1/2 transform -translate-x-1/2 h-full w-1 flex flex-col">
                <div className="md:h-[80px] h-[120px] bg-transparent "></div>

                {/* Actual line */}
                <div className="flex-1 bg-gray-200"></div>

                <div className="md:h-[80px] h-[150px] bg-transparent"></div>
            </div>

            {timelineData.map((event, index) => {
                const isLeft = index % 2 === 0;

                return (
                    <div
                        key={event.id}
                        className="  flex max-md:space-x-2 max-sm:mb-10  md:min-h-36 md:flex-row justify-between items-center w-full"
                    >
                        <div className={`w-full md:w-5/12 ${isLeft ? 'md:order-1' : 'md:order-3'} order-2`}>
                            <div className="bg-white p-4 rounded shadow-md">
                                <p className="text-base leading-7 md:leading-8 text-gray-900">{event.description}</p>
                            </div>
                        </div>

                        <div className="md:w-16 w-12  py-2 flex items-center shrink-0 max-sm:-ml-6 justify-center rounded-md bg-slate-800 text-white  z-10 border-4shadow-md md:order-2 order-1 my-4 md:my-0">
                            {event.year}
                        </div>

                        <div className={`w-full md:w-5/12 ${!isLeft ? 'md:order-1' : 'md:order-3'} hidden md:block`}>
                            <div className="bg-white p-4 rounded shadow-md invisible">
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
