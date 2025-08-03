'use client'


const Activities = [
  {
    title: "R&D",
    description:
      "To keep a business competitive by providing insights into the market and developing new services/products or improving existing ones accordingly.",
  },
  {
    title: "MANUFACTURING",
    description:
      "Primarily responsible for implementing and operating the production system in order to produce the product.",
  },
  {
    title: "ASSEMBLY",
    description:
      "Prepare and position parts for assembly, ensure each component is fastened correctly, check connections and log any discrepancies.",
  },
  {
    title: "QC TEST",
    description:
      "Quality control involves testing units and determining if they are within the specifications for the final product.",
  },
  {
    title: "PACKING",
    description:
      "Responsible for preparing picked material located by the picking department and labeling it for outgoing shipments.",
  },
  {
    title: "SHIPPING",
    description:
      "Responsible for arranging, receiving, recording, and sending shipments of goods.",
  },
];


export default function ExecutionFlow() {
  return (
    <div className="px-4 md:py-12 md:w-11/12 lg:w-9/12 mx-auto">  
      <h2 className="text-3xl font-bold text-center mb-10">Our <span className=" text-red-600">Activities</span></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Activities.map((activity, index) => (
          <div
            key={index}
            className="border border-gray-200 p-6 rounded-xl  shadow-sm hover:shadow-md transition-all duration-500"
          >
            <h3 className="md:text-xl text-lg text-gray-800 font-semibold mb-2 md:mb-3">{activity.title}</h3>
            <p className="text-gray-600 max-md:text-sm leading-7">{activity.description}</p>
          </div> 
        ))}
      </div>
    </div>
  );
}
