"use client"

import { motion } from "framer-motion"
import { Oleo_Script } from "next/font/google" // Import Oleo Script font

// Configure the Oleo Script font
const oleoScript = Oleo_Script({
  subsets: ["latin"],
  weight: ["400", "700"], // Use appropriate weights if available, 700 for bold
  variable: "--font-oleo-script", // Define a CSS variable for the font
})

const stats = [
  { value: "80+", label: "Clients" },
  { value: "8+", label: "Experience" },
  { value: "49+", label: "Projects" },
  { value: "50+", label: "Industries" },
]

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function StatsStrip() {
  return (
    <motion.section
      className="w-full bg-black text-white py-2 md:py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      <div className="container mx-auto px-4 grid grid-cols-2 gap-y-6 gap-x-4 text-center md:grid-cols-4 md:gap-0">
        {stats.map((stat, index) => (
          <motion.div key={index} className="flex flex-col items-center" variants={itemVariants}>
            <span
              className={`${oleoScript.className} text-4xl font-bold leading-tight tracking-tight`}
            >
              {stat.value}
            </span>{" "}
            {/* Applied Oleo Script font */}
            <span className={`${oleoScript.className} text-base md:text-lg font-medium mt-1`}>{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
