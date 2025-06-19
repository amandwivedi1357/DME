"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

const serviceCards = [
  {
    title: "Marketing Consulting",
    description:
      "Expand your online reach with targeted, data-driven marketing strategies that put your brand in front of the right people at the right time — and deliver impactful results.",
  },
  {
    title: "Digital Marketing",
    description:
      "We help businesses reach the right audience through data-driven digital marketing. From SEO and PPC to social media and content marketing, our tailored strategies boost visibility, engagement, and conversions.",
  },
  {
    title: "Compliance & Policies",
    description:
      "We sort out the complicated stuff from Meta to Google, resolving platform and policy issues that slow down the business. With our experience and clear compliance strategies, your brand stays on track while you focus on growth.",
  },
  {
    title: "Design",
    description:
      "From fresh branding to scroll-stopping graphics, we design visuals that connect with your audience instantly.",
  },
  {
    title: "Public Relations",
    description:
      "Strategic PR campaigns that build trust, spark conversations, and strengthen your brand's reputation.",
  },
  {
    title: "Print Media",
    description:
      "High-Impact Print Media That Leaves a Lasting Impression From brochures and flyers to banners and magazine ads, we craft print materials that communicate your brand clearly and creatively.",
  },
  {
    title: "Outdoor Advertising",
    description:
      "Stand Out Where It Matters MostFrom billboards to transit ads, we deliver high-impact outdoor campaigns that capture attention and drive brand awareness.",
  },
  {
    title: "Photo & Video",
    description:
      "Visual Stories That ConnectWe create high-quality photos and videos that showcase your brand, engage your audience, and elevate your message.",
  },
]

export default function ServicesSection() {
  return (
    <motion.section
      className="py-16 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Specialising In Services That Drive Growth
          </h2>
          <Button
            asChild
            className="px-6 py-3 rounded-full border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 transition-colors shadow-sm"
          >
            <Link href="#">Our Services</Link>
          </Button>
        </div>

        {/* Right Text */}
        <div className="text-lg text-gray-600 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
          <p>At Digital Made Easy, we deliver focused strategies that get your brand noticed, trusted, and chosen.</p>
        </div>
      </div>

      {/* Services Carousel */}
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="p-4">
          {serviceCards.map((card, index) => (
            <CarouselItem key={index} className="p-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <motion.div
                className="p-6 border border-black rounded-xl h-full flex flex-col justify-between"
                whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.05)" }}
                transition={{ duration: 0.2 }}
              >
                <div>
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </div>
                <div className="mt-6 flex justify-end">
                  <motion.div
                    className="p-3 border group border-gray-300 rounded-full inline-flex items-center justify-center cursor-pointer"
                    whileHover={{ backgroundColor: "#1a202c", color: "#ffffff" }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="h-5 w-5 text-gray-900 group-hover:text-white" />
                  </motion.div>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </motion.section>
  )
}
