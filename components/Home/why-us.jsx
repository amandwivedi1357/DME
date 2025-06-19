"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Oleo_Script } from "next/font/google" // Import Oleo Script font

// Configure the Oleo Script font
const oleoScript = Oleo_Script({
  subsets: ["latin"],
  weight: ["400", "700"], // Use appropriate weights if available, 700 for bold
  variable: "--font-oleo-script", // Define a CSS variable for the font
})

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const featureCards = [
  {
    number: "01",
    title: "Creative Excellence",
    description:
      "We believe in pushing creative limits to deliver standout solutions that are innovative and results-driven.",
    bgColor: "bg-white",
    textColor: "text-gray-900",
    borderColor: "border-black",
  },
  {
    number: "02",
    title: "In House Team",
    description:
      "Our in-house team of skilled designers, advertisers, and social media strategists work seamlessly together to deliver consistent, high-quality results that elevate your brand's presence and performance. We are the inhouse team for your business with an effortlessness of hiring, paying & maintaining yet delivering the numbers more than we promised.",
    bgColor: "bg-white",
    textColor: "text-gray-900",
    borderColor: "border-black",
  },
  {
    number: "03",
    title: "Client Satisfaction",
    description:
      "Our success is measured by your satisfaction. We are committed to delivering projects on time and exceeding your expectations.",
    bgColor: "bg-green-800", 
    textColor: "text-white", // White text for this card
    borderColor: "border-green-800", // Border matches background
  },
]

export default function WhyChooseUs() {
  return (
    <motion.section
      className="pt-16 container mx-auto px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left">
          <motion.h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" variants={cardVariants}>
            Why Choose <br /> Digital Made Easy
          </motion.h2>
          <motion.div variants={cardVariants}>
            <Button
              asChild
              className="px-6 py-3 rounded-full border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 transition-colors shadow-sm"
            >
              <Link href="#">About Us</Link>
            </Button>
          </motion.div>
          <motion.p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0" variants={cardVariants}>
            The right digital partner can elevate your brand to new heights. At Digital Made Easy, we are experts in
            blending strategy, creativity, and data-driven performance to deliver impactful results.
          </motion.p>
          <motion.p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0" variants={cardVariants}>
            Our unique approach is why businesses choose us as their trusted growth partner. Let&apos;s build your
            success together.
          </motion.p>
        </div>

        {/* Right Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 01: Creative Excellence */}
          <motion.div
            className={`p-6 rounded-xl border ${featureCards[0].borderColor} ${featureCards[0].bgColor} ${featureCards[0].textColor} md:col-start-1 md:row-start-1`}
            variants={cardVariants}
          >
            <div className={`${oleoScript.className} flex items-center gap-3`}>

            <p className="text-xl font-bold mb-2">{featureCards[0].number}</p>
            <h3 className="text-xl font-semibold mb-2">{featureCards[0].title}</h3>
            </div>
            <p className="text-sm">{featureCards[0].description}</p>
          </motion.div>

          {/* Card 03: Client Satisfaction - Now correctly positioned below 01 with a gap */}
          <motion.div
            className={`p-6 rounded-xl border ${featureCards[2].borderColor} ${featureCards[2].bgColor} ${featureCards[2].textColor} md:col-start-1 md:row-start-2`}
            variants={cardVariants}
          >
            <div className={`${oleoScript.className} flex items-center gap-3`}>

            <p className="text-xl font-bold mb-2">{featureCards[2].number}</p>
            <h3 className="text-xl font-semibold mb-2">{featureCards[2].title}</h3>
            </div>
            <p className="text-sm">{featureCards[2].description}</p>
          </motion.div>

          {/* Card 02: In House Team - Now spans two rows */}
          <motion.div
            className={`p-6 rounded-xl border ${featureCards[1].borderColor} ${featureCards[1].bgColor} ${featureCards[1].textColor} md:col-start-2 md:row-span-2`}
            variants={cardVariants}
          >
            <div className={`${oleoScript.className} flex items-center gap-3`}>

            <p className="text-xl font-bold mb-2">{featureCards[1].number}</p>
            <h3 className="text-xl font-semibold mb-2">{featureCards[1].title}</h3>
            </div>
            <p className="text-sm">{featureCards[1].description}</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
