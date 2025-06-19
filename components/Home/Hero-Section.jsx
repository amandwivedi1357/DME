"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
  },
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

export default function HeroSection() {
  return (
    <section className="pt-16">
      <motion.div
        className="grid lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left">
          <motion.p className="text-4xl md:text-[60px] font-semibold leading-tight" variants={itemVariants}>
            Elevate Your Digital Presence & Experience
          </motion.p>
          <motion.p className="text-[16px] text-gray-600 max-w-xl mx-auto lg:mx-0" variants={itemVariants}>
            We help businesses grow smarter, faster, and stronger through creative digital strategies and real results.
            Let&apos;s take your business to the next level.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            variants={itemVariants}
          >
            <Button
              asChild
              className="px-6 py-5 rounded-full border border-black bg-white text-gray-900 hover:bg-gray-50 transition-colors shadow-sm"
            >
              <Link href="#">
                Book you free consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              className="px-6 py-5 rounded-full bg-black text-white hover:bg-gray-800 transition-colors shadow-md"
            >
              <Link href="#">Get In Touch</Link>
            </Button>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          className="flex justify-center lg:justify-end"
          variants={imageVariants}
          initial="hidden"
          animate={["visible", "float"]}
        >
          <Image
            src="/hero-dme.png"
            width={600}
            height={400}
            alt="Digital Made Easy Illustration"
            className="w-full max-w-lg h-auto object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
