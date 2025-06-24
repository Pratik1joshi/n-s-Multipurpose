"use client"

import { useState, useEffect } from "react"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Globe,
  HelpingHand,
  TrendingUp,
  Award,
  Target,
  Eye,
  Users,
  Building,
  Calendar,
  Star,
  Handshake,
  Tractor,
  ChefHat,
  Monitor,
  Calculator,
  Car,
  GraduationCap,
  MessageCircle,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, useAnimation, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import CounterAnimation from "@/components/counter-animation"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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

  const services = [
    {
      image: "/agricultural.jpg",
      title: "Agriculture Training",
      description: "Comprehensive training in modern farming techniques, crop management, and sustainable agriculture practices.",
      features: ["Crop Management", "Soil Science", "Irrigation Systems", "Pest Control"]
    },
    {
      image: "/cooking.jpg",
      title: "Cook & Hotel Management",
      description: "Professional culinary arts and hospitality management training for the tourism and hotel industry.",
      features: ["Culinary Skills", "Food Safety", "Menu Planning", "Customer Service"]
    },
    {
      image: "/computer.jpg",
      title: "Computer Training",
      description: "IT skills development including programming, software applications, and digital literacy courses.",
      features: ["Programming Basics", "Web Development", "Data Analysis", "Digital Marketing"]
    },
    {
      image: "/accounting.jpg",
      title: "Accounting Training",
      description: "Professional accounting and bookkeeping courses covering financial management and taxation.",
      features: ["Financial Accounting", "Management Accounting", "Taxation", "Audit"]
    },
    {
      image: "/driving.jpg",
      title: "Driving Training",
      description: "Comprehensive driving lessons for various vehicle types with safety and traffic rule education.",
      features: ["Traffic Rules", "Defensive Driving", "Vehicle Maintenance", "Eco-friendly Driving"]
    },
    {
      image: "/bridgecourse.jpg",
      title: "Bridge Course",
      description: "Academic bridge courses to help students transition between different educational levels and systems.",
      features: ["Study Skills", "Time Management", "Research Skills", "Critical Thinking"]
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-orange-600 to-blue-600 text-white py-2 md:py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 md:space-x-8 text-xs md:text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-medium">info@nstrade.com.np</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-medium">+977-1-4423456</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2">
                <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-medium">Kathmandu, Nepal</span>
              </div>
            </div>
            <div className="flex items-center space-x-3 md:space-x-4">
              <a href="#" className="hover:text-orange-200 transition-colors duration-200 p-1 rounded">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" className="hover:text-orange-200 transition-colors duration-200 p-1 rounded">
                <Facebook className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" className="hover:text-orange-200 transition-colors duration-200 p-1 rounded">
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#" className="hover:text-orange-200 transition-colors duration-200 p-1 rounded">
                <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-md" : ""}`}
      >
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center">
              <HelpingHand className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <span className="font-bold text-lg md:text-xl text-gray-900">N&S Trade</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </a>
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">
              Training Programs
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Button className="hidden sm:block bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-sm md:text-base px-4 md:px-6">
              Enroll Now
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <a 
                href="#about" 
                className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#services" 
                className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Training Programs
              </a>
              <a 
                href="#contact" 
                className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="w-full sm:hidden bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-sm mt-4">
                Enroll Now
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="py-12 md:py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={heroControls}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
                <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                  Namaste & Shalom
                </span>
                <br />
                Training Institute
              </motion.h1>
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
                Empowering minds through quality education and practical training. Your pathway to professional excellence and career advancement.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-sm md:text-base"
                >
                  Explore Training Programs
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50 text-sm md:text-base">
                  Enroll Now
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative w-full max-w-md mx-auto order-1 lg:order-2"
            >
              <div className="relative z-10">
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
                  className="absolute -top-4 -right-4 bg-orange-500 text-white p-2 md:p-3 rounded-full shadow-lg"
                >
                  <Globe className="w-4 h-4 md:w-6 md:h-6" />
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
                  className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-2 md:p-3 rounded-full shadow-lg"
                >
                  <TrendingUp className="w-4 h-4 md:w-6 md:h-6" />
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
            className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 md:w-8 md:h-8 text-orange-600 mr-2" />
                <CounterAnimation end={2000} duration={2000} />
                <span className="text-2xl md:text-3xl font-bold text-gray-900">+</span>
              </div>
              <p className="text-sm md:text-base text-gray-600">Students Trained</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Building className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mr-2" />
                <CounterAnimation end={15} duration={2000} />
                <span className="text-2xl md:text-3xl font-bold text-gray-900">+</span>
              </div>
              <p className="text-sm md:text-base text-gray-600">Training Programs</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="w-6 h-6 md:w-8 md:h-8 text-green-600 mr-2" />
                <CounterAnimation end={15} duration={2000} />
                <span className="text-2xl md:text-3xl font-bold text-gray-900">+</span>
              </div>
              <p className="text-sm md:text-base text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-6 h-6 md:w-8 md:h-8 text-yellow-600 mr-2" />
                <CounterAnimation end={98} duration={2000} />
                <span className="text-2xl md:text-3xl font-bold text-gray-900">%</span>
              </div>
              <p className="text-sm md:text-base text-gray-600">Success Rate</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img
                src="/profilepic.jpg"
                alt="About Namaste & Shalom"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 text-center lg:text-left"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">About Our Training Institute</h2>
              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
                Namaste & Shalom Multipurpose Trade Pvt. Ltd. is a premier training institute dedicated to empowering individuals with practical skills and knowledge. Based in Kathmandu, Nepal, we offer comprehensive training programs across diverse fields including agriculture, hospitality, technology, and professional development.
              </p>
              <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
                Our commitment to quality education and hands-on training has made us a trusted choice for students seeking career advancement and skill development. We bridge the gap between theoretical knowledge and practical application.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/about">
                  <Button className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-sm md:text-base">
                    Our Training Programs
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 text-sm md:text-base">
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
            className="mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg md:text-xl">Expert Training</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm md:text-base">
                  Professional training programs designed by industry experts with hands-on experience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg md:text-xl">Career Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm md:text-base">
                  Comprehensive skills development to advance your career and professional opportunities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                </div>
                <CardTitle className="text-lg md:text-xl">Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm md:text-base">
                  Internationally recognized certifications to validate your skills and expertise.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Our Training Programs</h2>
            <p className="text-base md:text-lg text-gray-600">
              Comprehensive training courses designed to equip you with practical skills and industry knowledge across various fields.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                image: "/agricultural.jpg",
                title: "Agriculture Training",
                description: "Comprehensive training in modern farming techniques, crop management, and sustainable agriculture practices.",
                features: ["Crop Management", "Soil Science", "Irrigation Systems", "Pest Control"]
              },
              {
                image: "/cook.jpg",
                title: "Cook & Hotel Management",
                description: "Professional culinary arts and hospitality management training for the hotel and restaurant industry.",
                features: ["Culinary Arts", "Food Safety", "Hotel Operations", "Customer Service"]
              },
              {
                image: "/computer.jpg",
                title: "Computer Training",
                description: "Modern computer skills and software training to meet today's digital workplace demands.",
                features: ["MS Office", "Web Development", "Digital Marketing", "Data Entry"]
              },
              {
                image: "/accounting.jpg",
                title: "Accounting Training",
                description: "Professional accounting and bookkeeping training with practical business applications.",
                features: ["Financial Accounting", "Tax Preparation", "QuickBooks", "Payroll Management"]
              },
              {
                image: "/drive.jpg",
                title: "Driving Training",
                description: "Professional driving instruction for various vehicle types with safety-focused approach.",
                features: ["Car Driving", "Motorcycle Training", "Traffic Rules", "Safety Protocols"]
              },
              {
                image: "/bridge-course-scaled.jpg",
                title: "Bridge Course",
                description: "Preparatory courses to bridge educational gaps and prepare students for advanced studies.",
                features: ["Academic Preparation", "Skill Assessment", "Career Guidance", "Foundation Building"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white overflow-hidden">
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardHeader className="text-center pb-3 md:pb-4">
                    <CardTitle className="text-lg md:text-xl text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <CardDescription className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
                      {service.description}
                    </CardDescription>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-xs md:text-sm text-gray-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Get In Touch</h2>
              <p className="text-base md:text-lg text-gray-600">
                Ready to start your learning journey? Contact us today to discuss our training programs and how we can help advance your career.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">Contact Information</h3>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm md:text-base">Address</p>
                      <p className="text-gray-600 text-sm md:text-base">
                        Chandragiri-7, Post Box No. 25034
                        <br />
                        Kathmandu, Nepal
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm md:text-base">Phone</p>
                      <p className="text-gray-600 text-sm md:text-base">+977-1-5555555</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm md:text-base">Email</p>
                      <p className="text-gray-600 text-sm md:text-base">info@namastelshalom.com</p>
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
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">Send us a Message</h3>
                <form className="space-y-4 md:space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-sm md:text-base"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-sm md:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 md:mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-sm md:text-base"
                      placeholder="Tell us about your training interests..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 py-2 md:py-3 text-sm md:text-base">
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
                Multipurpose Trade Pvt. Ltd. - Empowering minds through quality education and training.
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
                    Training Programs
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
