"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cardData = [
  {
    type: "Business To Business",
    title: "B2B Collaborations",
    height: "554px",
    description:
      "We believe in collaboration over competition. Since the beginning of our journey, we've chosen to work alongside our industry peers...",
    points: ["Photography", "Content creation", "Video Editing", "Consulting"]
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

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const staggeredContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const CollaborationCards = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div 
        className="flex justify-center items-center py-8 md:py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-6xl lg:text-[86px] font-semibold text-center bg-clip-text">
          Digital·Made·Easy
        </h2>
      </motion.div>
      
      <motion.div 
        className="flex flex-col md:flex-row justify-between py-8 md:py-16 gap-6 md:gap-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="md:flex-1">
          <p className="text-2xl md:text-4xl font-semibold bg-clip-text ">
            Want to Work Together?
          </p>
        </div>
        <div className="md:flex-1">
          <p className="text-base md:text-lg lg:text-xl text-gray-600">
            Partnerships that spark big ideas and even bigger results. <br className="hidden md:block" />
            <span className="block mt-2">Ready to create magic together? Here's how we collaborate:</span>
          </p>
        </div>
      </motion.div>

      <div className="relative -mt-[8rem]" ref={ref}>
        <motion.div 
          className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-full max-w-[230px] h-auto z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image 
            src='/pen.png' 
            alt='pen' 
            width={230}
            height={302}
            className="w-full h-auto transform hover:rotate-6 transition-transform duration-500"
          />
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-12 md:py-24 lg:pl-64 min-h-[500px] items-end"
          variants={staggeredContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-6 border border-gray-200 w-full flex flex-col justify-between mx-auto max-w-sm overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              style={{ height: card.height }}
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
            >
              <div>
                <motion.span 
                  className="text-xs bg-yellow-400 text-black px-3 py-1.5 rounded-full font-semibold inline-block mb-4 group-hover:bg-yellow-500 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {card.type}
                </motion.span>
                <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-black transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {card.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {card.points.map((point, i) => (
                    <motion.li 
                      key={i} 
                      className="flex border-b border-gray-200 py-2 items-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.div 
                className="mt-auto pt-4 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <button className="flex items-center text-sm font-medium text-gray-900 group-hover:text-black transition-colors duration-300">
                  Learn More
                  <svg 
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div 
        className="flex flex-col gap-4 py-12 md:py-16 px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl md:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
          What Our Clients Say!
        </h2>
        <p className="text-gray-600 text-sm md:text-base">Hear from our satisfied partners</p>
      </motion.div>
      
      <motion.div 
        className="py-8 md:py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-[309px] rounded-xl overflow-hidden group cursor-pointer">
          <Image 
            src={'/gray-banner.png'} 
            alt="video testimonial" 
            fill
            style={{ objectFit: 'cover' }}
            className="w-full h-full transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"></path>
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CollaborationCards;
