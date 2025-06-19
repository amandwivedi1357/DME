import Image from "next/image";
import React from "react";

const cardData = [
  {
    type: "Business To Business",
    title: "B2B Collaborations",
    height: "554px",
    description:
      "We believe in collaboration over competition. Since the beginning of our journey, we've chosen to work alongside our industry peers...",
    points: ["Photography", "Content creation", "Video Editing", "Consulting"],
  },
  {
    type: "Business To Customer",
    title: "B2C Collaborations",
    height: "505px",
    description:
      "Stay updated with the latest seminars, podcasts, and digital marketing events—featuring key happenings across the industry...",
    points: [
      "Events & Workshops",
      "Single Service Handling",
      "End To End Project Handling",
    ],
  },
  {
    type: "Business To Customer",
    title: "CMO Collaborations",
    height: "621px",
    description:
      "A dedicated team, led by an experienced team lead, will be assigned exclusively to the project for a period of 6 to 8 months...",
    points: ["Automating the marketing", "Hiring", "Training for 1 Month"],
  },
];

const CollaborationCards = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center items-center py-8 md:py-12">
        <h2 className="text-4xl md:text-6xl lg:text-[86px] font-semibold text-center">
          Digital·Made·Easy
        </h2>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between py-8 md:py-16 gap-6 md:gap-12">
        <div className="md:flex-1">
          <p className="text-2xl md:text-4xl font-semibold">Want to Work Together?</p>
        </div>
        <div className="md:flex-1">
          <p className="text-base md:text-lg lg:text-xl text-gray-600">
            Partnerships that spark big ideas and even bigger results. <br className="hidden md:block" />
            <span className="block mt-2">Ready to create magic together? Here's how we collaborate:</span>
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-full max-w-[230px] h-auto z-10">
          <Image 
            src='/pen.png' 
            alt='pen' 
            width={230}
            height={302}
            className="w-full h-auto"
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12 md:py-24 lg:pl-64 min-h-[500px] items-end">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md p-6 border border-gray-200 w-full flex flex-col justify-between mx-auto max-w-sm`}
              style={{ height: card.height }}
            >
              <div>
                <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded font-semibold inline-block mb-3">
                  {card.type}
                </span>
                <h3 className="text-lg font-bold mb-3">{card.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{card.description}</p>
                <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                  {card.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <button className="w-full sm:w-auto bg-black text-white px-6 py-2 rounded-md text-sm hover:bg-gray-800 transition">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 py-12 md:py-16 px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-semibold">What Our Clients Say!</h2>
        <p className="text-gray-600 text-sm md:text-base">Hear from our satisfied partners</p>
      </div>
      
      <div className="py-8 md:py-16">
        <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-[309px] rounded-xl overflow-hidden">
          <Image 
            src={'/gray-banner.png'} 
            alt="video testimonial" 
            fill
            style={{ objectFit: 'cover' }}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CollaborationCards;
