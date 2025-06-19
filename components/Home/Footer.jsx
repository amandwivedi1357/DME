"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

export default function Footer() {
  return (
    <motion.footer
      className="bg-black text-gray-300 py-16 md:py-20 lg:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-4">
        {/* Top Section: Consultation & Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-12 md:pb-16 border-b border-gray-700">
          {/* Left: Book Consultation */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Book a Free Consultation Today</h2>
            <Button
              asChild
              className="px-6 py-3 rounded-full border border-gray-600 bg-black text-white hover:bg-gray-800 transition-colors shadow-sm"
            >
              <Link href="#">
                Get started today <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Right: Address & Email - Now left-aligned */}
          <div className="space-y-6 text-center md:text-left md:pl-16">
            {" "}
            {/* Added md:pl-16 for spacing */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-sm">
                Vista Grand Tower,
                <br />
                Somajiguda, Hyderabad
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Address</h3>
              <p className="text-sm">marketing@rayformula.com</p>
            </div>
          </div>
        </div>

        {/* Middle Section: About & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 md:pt-16 pb-12 md:pb-16 border-b border-gray-700">
          {/* Left: About & Social */}
          <div className="space-y-6 text-center md:text-left">
            <p className="text-sm max-w-xl mx-auto md:mx-0">
              At Digital Made Easy, we truly live up to our name—making smart, effective marketing simple for businesses
              of all sizes. With creative strategies, impactful marketing, and a results-driven approach, we help brands
              thrive in the digital world. Let&apos;s work together to create something amazing.
            </p>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-white">Follow us</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                {" "}
                {/* Changed to md:justify-start */}
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Navigation Links - Now left-aligned */}
          <div className="grid grid-cols-2 gap-8 text-center md:text-left md:pl-16">
            {" "}
            {/* Changed to md:text-left and added md:pl-16 */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Work Together
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Our Work</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Project 1
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Project 2
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Project 3
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 text-center text-sm text-gray-500">
          <p>Copyright@2025</p>
        </div>
      </div>
    </motion.footer>
  )
}
