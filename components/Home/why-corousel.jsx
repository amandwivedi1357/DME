"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const carouselSlides = [
  {
    buttonText: "Our Work",
    title: "Driving Footfall Through Strategic Influencer Marketing",
    description:
      "A targeted influencer campaign that boosted brand visibility and increased in-store visits for The Fable Store by leveraging authentic, engaging content from relatable creators.",
    imageUrl: "/placeholder.svg?height=350&width=600",
  },
  {
    buttonText: "Our Work",
    title: "From Scroll to Sip: Elevating Chatime's Online Buzz",
    description:
      "We crafted a fresh social media strategy that helped Chatime connect with more bubble tea lovers. Discover how we drove engagement, amplified their social buzz, and turned followers into loyal customers.",
    imageUrl: "/placeholder.svg?height=350&width=600", // Placeholder for the mobile screens image
  },
  {
    buttonText: "Our Work",
    title: "Brand Revitalization: A Case Study",
    description:
      "Revitalized a legacy brand's online presence, leading to a significant increase in brand recognition and customer engagement across all digital channels.",
    imageUrl: "/placeholder.svg?height=350&width=600",
  },
]

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

export default function WorkCarousel() {
  return (
    <motion.section
      className="py-16 md:py-24 lg:py-16 container mx-auto px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full relative" // Make Carousel relative for absolute positioning of buttons
      >
        <CarouselContent className="-ml-4">
          {carouselSlides.map((slide, index) => (
            <CarouselItem key={index} className="pl-4 basis-full">
              <div className="flex flex-col space-y-6">
                {/* Top content: Button, Title, Description - these will slide */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1 space-y-4">
                    <Button
                      asChild
                      className="px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 transition-colors shadow-sm text-sm"
                    >
                      <Link href="#">{slide.buttonText}</Link>
                    </Button>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">{slide.title}</h3>
                    <p className="text-base text-gray-600 max-w-md">{slide.description}</p>
                  </div>
                  {/* No arrows here, they are global and static */}
                </div>

                {/* Image Placeholder */}
                <div className="w-full bg-black rounded-xl overflow-hidden">
                  <Image
                    src={slide.imageUrl || "/placeholder.svg"}
                    width={600}
                    height={150}
                    alt={slide.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Global Navigation Arrows - positioned absolutely within the Carousel */}
        {/* These will be static relative to the Carousel container and visually aligned */}
        <div className="absolute top-0 right-0 flex items-center space-x-2 mt-4 mr-4">
          <CarouselPrevious className="static h-10 w-10 rounded-full border border-gray-300 bg-white text-gray-900 hover:bg-gray-100" />
          <CarouselNext className="static h-10 w-10 rounded-full border border-gray-300 bg-white text-gray-900 hover:bg-gray-100" />
        </div>
      </Carousel>
    </motion.section>
  )
}
