import Image from 'next/image'

export default function ProductCategories({setActiveCategory,setShowCategoryOverviewModal}) {

    const categories = [
        {
            title: 'Dent Puller',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            buttonText: 'Explore more',
            image: '/images/feature-1.png',
        },
        {
            title: 'Spot Welder',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            buttonText: 'Explore more',
            image: '/images/feature-2.png',
        },
        {
            title: 'Mig Welding',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            buttonText: 'Explore more',
            image: '/images/feature-3.png',
        },
        {
            title: 'Battery Charger',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            buttonText: 'Explore more',
            image: '/images/feature-1.png',
        },
    ];

    const handleCategoryOverview=(category)=>{
        setActiveCategory(category)
        setShowCategoryOverviewModal(true)
    }


    return (
        <section className="-mt-16 pb-20 px-4 relative z-10">
            <div className=" w-11/12 2xl:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

                {categories.map((category, index) => (
                    <div
                        key={index}
                       
                        // className="bg-white rounded-2xl shadow-xl flex items-center justify-between p-6 h-full hover:shadow-2xl transition transform hover:-translate-y-1"
                        className="bg-white rounded-2xl shadow-xl flex items-center transition-all duration-500 ease-in-out justify-between p-6 h-full hover:shadow-2xl "

                    >
                        {/* Left Side: Text */}
                        <div className="flex-1 pr-4">
                            <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                            <p className="text-gray-600 mb-4 text-sm">{category.description}</p>
                            <button  onClick={()=>handleCategoryOverview(category.title)} className="mt-3 text-white text-nowrap bg-black px-4 py-1.5 cursor-pointer rounded-full text-sm">
                                {category.buttonText}
                            </button>
                        </div>

                        {/* Right Side: Image */}
                        <div className="w-20 h-20 flex-shrink-0">
                            <Image
                                src={category.image}
                                alt={category.title}
                                width={80}
                                height={80}
                                className="object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className=" absolute h-screen w-full"></div> */}
        </section>
    )
}
