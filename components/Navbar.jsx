"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Linkedin, Instagram, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "/", number: "01" },
  { name: "Services", href: "/services", number: "02" },
  { name: "About Us", href: "/about", number: "03" },
  { name: "Our Work", href: "/work", number: "04" },
  { name: "Work Together", href: "/contact", number: "05" },
]

const linkVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
}

const socialIconVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } },
  hover: { scale: 1.1, transition: { duration: 0.2 } },
}

const mobileMenuVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      type: 'spring',
      damping: 30,
      stiffness: 300
    }
  },
  exit: { 
    x: '100%', 
    opacity: 0,
    transition: {
      type: 'spring',
      damping: 30,
      stiffness: 300
    }
  }
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("Home")
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial="hidden"
        animate="visible"
        className={cn(
          "fixed top-0 left-0 right-0 w-full py-4 px-4 md:px-6 lg:px-8 z-50 transition-all duration-300",
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
          <motion.div variants={linkVariants}>
            <Link href="/" className="flex flex-col items-center space-x-2">
              <Image
                src="/logo.svg"
                width={150}
                height={40}
                alt="DME Logo"
                className="h-10 w-auto"
              />
              <span className="text-[#006D77]">Digital Made Easy</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <div className="flex items-stretch border border-black rounded-full overflow-hidden">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  variants={linkVariants}
                  whileHover="hover"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className={cn(
                    "relative flex flex-col justify-between items-center px-6 py-3 min-w-[120px] h-[65px]",
                    "border-r border-black",
                    activeLink === link.name && "border-b-4 border-black",
                  )}
                >
                  <Link
                    href={link.href}
                    onClick={() => setActiveLink(link.name)}
                    className="flex flex-col items-center w-full h-full"
                  >
                    <span
                      className={cn(
                        "text-sm font-medium transition-colors",
                        activeLink === link.name ? "text-black" : "text-gray-700 hover:text-black",
                      )}
                    >
                      {link.name}
                    </span>
                    <span
                      className={cn(
                        "mt-1 h-1 w-full transition-all duration-300 rounded-full",
                        activeLink === link.name ? "bg-black h-1.5" : "bg-transparent",
                      )}
                    ></span>
                    <span className={cn("text-xs mt-1", activeLink === link.name ? "text-gray-700" : "text-gray-400")}>
                      {link.number}
                    </span>
                  </Link>
                </motion.div>
              ))}

              <div className="flex items-center gap-2 px-3 py-2 pl-28">
                <motion.a
                  href="#"
                  variants={socialIconVariants}
                  whileHover="hover"
                  className="text-gray-600 hover:text-black"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </motion.a>
                <motion.a
                  href="#"
                  variants={socialIconVariants}
                  whileHover="hover"
                  className="text-gray-600 hover:text-black"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </motion.a>
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(!isOpen)}
              className="z-50"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              key="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                damping: 30,
                stiffness: 300
              }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 shadow-2xl p-6 overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                <div className="space-y-8 mt-16">
                  {navLinks.map((link) => (
                    <motion.div
                      key={link.name}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="border-b border-gray-100 pb-2"
                    >
                      <Link
                        href={link.href}
                        onClick={() => {
                          setActiveLink(link.name);
                          setIsOpen(false);
                        }}
                        className={cn(
                          "text-2xl font-medium flex items-center justify-between py-3",
                          activeLink === link.name ? "text-black" : "text-gray-700"
                        )}
                      >
                        <span>{link.name}</span>
                        <span className="text-sm text-gray-400">{link.number}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto pt-8 pb-4">
                  <div className="flex justify-center space-x-6">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-600 hover:text-black"
                    >
                      <Linkedin className="h-6 w-6" />
                      <span className="sr-only">LinkedIn</span>
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-600 hover:text-black"
                    >
                      <Instagram className="h-6 w-6" />
                      <span className="sr-only">Instagram</span>
                    </motion.a>
                  </div>
                  <p className="mt-6 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Digital Made Easy. All rights reserved.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Add padding to the top of the main content to account for fixed navbar */}
      <div className="h-24 lg:h-28"></div>
    </>
  )
}
