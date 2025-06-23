"use client"

import { useState, useEffect } from "react"
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  TrendingUp,
  Award,
  Facebook,
  MessageCircle,
  Youtube,
  Instagram,
  Users,
  Calendar,
  Star,
  Building,
  HelpingHand,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, useAnimation, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import CounterAnimation from "@/components/counter-animation"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })
  const heroControls = useAnimation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isHeroInView) {
      heroControls.start("visible")
    }
  }, [isHeroInView, heroControls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Contact Bar */}
      <div
        className={`bg-gray-900 text-white py-2 transition-all duration-300 ${isScrolled ? "-translate-y-full opacity-0 h-0 overflow-hidden" : "translate-y-0 opacity-100"}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex flex-wrap items-center gap-4 mb-2 sm:mb-0">
              <a href="tel:+977-1-5555555" className="flex items-center gap-1 hover:text-orange-400 transition-colors">
                <Phone className="w-3 h-3" />
                +977-1-5555555
              </a>
              <a
                href="mailto:info@namastelshalom.com"
                className="flex items-center gap-1 hover:text-orange-400 transition-colors"
              >
                <Mail className="w-3 h-3" />
                info@namastelshalom.com
              </a>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                Kathmandu, Nepal
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/9779851234567"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-md" : ""}`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center">
              <HelpingHand className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">N&S Trade</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </a>
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">
              Services
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </nav>
          <Button className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700">
            Get Quote
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 px-32 gap-12 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={heroControls}
              className="text-center lg:text-left"
            >
              <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                  Namaste & Shalom
                </span>
                <br />
                Multipurpose Trade
              </motion.h1>
              <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-8">
                Bridging cultures and markets with excellence. Your trusted partner for comprehensive trading solutions
                across diverse industries.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700"
                >
                  Explore Services
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50">
                  Learn More
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative w-[350px] mx-auto"
            >
              <div className="relative z-10 w-auto">
                <img
                  src="/unclewithmap.jpg"
                  alt="Global Trade Network"
                  className="w-full rounded-lg shadow-2xl"
                />
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg"
                >
                  <Globe className="w-6 h-6" />
                </motion.div>
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg"
                >
                  <TrendingUp className="w-6 h-6" />
                </motion.div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-blue-200 rounded-lg blur-3xl opacity-30 -z-10"></div>
            </motion.div>
          </div>

          {/* Stats Counter */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-orange-600 mr-2" />
                <CounterAnimation end={500} duration={2000} />
                <span className="text-3xl font-bold text-gray-900">+</span>
              </div>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Building className="w-8 h-8 text-blue-600 mr-2" />
                <CounterAnimation end={50} duration={2000} />
                <span className="text-3xl font-bold text-gray-900">+</span>
              </div>
              <p className="text-gray-600">Partner Companies</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="w-8 h-8 text-green-600 mr-2" />
                <CounterAnimation end={15} duration={2000} />
                <span className="text-3xl font-bold text-gray-900">+</span>
              </div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-8 h-8 text-yellow-600 mr-2" />
                <CounterAnimation end={98} duration={2000} />
                <span className="text-3xl font-bold text-gray-900">%</span>
              </div>
              <p className="text-gray-600">Success Rate</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 px-32 mx-auto items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/picture1.jpg"
                alt="About Namaste & Shalom"
                className="w-2/5 h-auto rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Our Company</h2>
              <p className="text-lg text-gray-600 mb-6">
                Namaste & Shalom Multipurpose Trade Pvt. Ltd. represents the harmony of diverse cultures and the
                strength of global partnerships. Based in Kathmandu, Nepal, we specialize in facilitating trade across
                multiple sectors with integrity and excellence.
              </p>
              <p className="text-gray-600 mb-8">
                Our commitment to bridging cultural gaps while maintaining the highest standards of business ethics has
                made us a trusted partner for companies worldwide seeking reliable trading solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about">
                  <Button className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700">
                    Our Mission & Vision
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                    Know Us More
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Global Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Connecting markets worldwide with our extensive network and cultural understanding.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Growth Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Driving sustainable growth for our partners through strategic trade solutions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Committed to delivering exceptional service and maintaining the highest standards.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive trading solutions tailored to meet diverse business needs across multiple industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Import & Export",
                description:
                  "Facilitating seamless international trade with comprehensive import and export services across various product categories.",
              },
              {
                title: "Supply Chain Management",
                description:
                  "Optimizing supply chains for efficiency and cost-effectiveness while maintaining quality standards.",
              },
              {
                title: "Market Research",
                description:
                  "Providing valuable market insights and analysis to help businesses make informed trading decisions.",
              },
              {
                title: "Logistics Solutions",
                description: "End-to-end logistics management ensuring timely and secure delivery of goods worldwide.",
              },
              {
                title: "Trade Consultation",
                description:
                  "Expert guidance on trade regulations, documentation, and best practices for international commerce.",
              },
              {
                title: "Partnership Development",
                description:
                  "Building strategic partnerships and facilitating business connections across global markets.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-600">
                Ready to explore new trading opportunities? Contact us today to discuss how we can help grow your
                business.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">
                        Chandragiri-7, Post Box No. 25034
                        <br />
                        Kathmandu, Nepal
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+977-1-5555555</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">info@namastelshalom.com</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Tell us about your trading needs..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700">
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center">
                  <HelpingHand className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-xl">Namaste & Shalom</span>
              </div>
              <p className="text-gray-400">
                Multipurpose Trade Pvt. Ltd. - Bridging cultures and markets with excellence.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>Chandragiri-7, Kathmandu, Nepal</p>
                <p>Post Box No. 25034</p>
                <p>info@namastelshalom.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Namaste & Shalom Multipurpose Trade Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
