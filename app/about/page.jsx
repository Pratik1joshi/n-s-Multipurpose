"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
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
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import CounterAnimation from "@/components/counter-animation"

export default function AboutPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center">
              <HelpingHand className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <span className="font-bold text-lg md:text-xl text-gray-900">N&S Trade</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>            
            <a href="/#services" className="text-gray-600 hover:text-gray-900 transition-colors">
              Training Programs
            </a>
            <a href="/#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
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
              <Link 
                href="/" 
                className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <a 
                href="/#services" 
                className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Training Programs
              </a>
              <a 
                href="/#contact" 
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
      </header>{/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                N&S Training Institute
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
              Discover our journey, mission, and the values that drive us to empower minds through quality education and professional training.
            </p>
          </motion.div>
        </div>
      </section>      {/* Company Story */}
      <section className="py-12 md:py-20 bg-white">
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
                src="/himal.jpg"
                alt="Our Company Story"
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
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Our Story</h2>
              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
                Founded with the vision of empowering individuals through quality education and practical training, Namaste & Shalom
                Multipurpose Trade Pvt. Ltd. embodies the spirit of knowledge sharing and skill development. Our name itself represents
                the beautiful convergence of Eastern and Western educational philosophies - "Namaste" from Sanskrit meaning "I bow to
                you" and "Shalom" from Hebrew meaning "peace."
              </p>
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                Since our establishment, we have been committed to providing comprehensive training programs that bridge the gap between
                theoretical knowledge and practical application. Our headquarters in Kathmandu, Nepal, serves as a center of excellence
                for diverse educational offerings spanning agriculture, hospitality, technology, and professional development.
              </p>
              <p className="text-sm md:text-base text-gray-600">
                Today, we stand as a testament to the power of education in transforming lives, serving thousands of students
                and building careers that transcend geographical and cultural boundaries. Our training programs are designed to meet
                industry standards and prepare students for the global marketplace.
              </p>
            </motion.div>
          </div>
        </div>
      </section>      {/* Mission & Vision */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Mission & Vision</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Our mission and vision guide every decision we make and every partnership we forge.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl text-gray-900">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="text-center">                  
                  <CardDescription className="text-gray-600 text-base md:text-lg leading-relaxed">
                    To provide exceptional education and training that empowers individuals with practical skills and knowledge,
                    fostering personal growth and professional development. We are committed to excellence, innovation, and
                    creating opportunities that transform lives and build stronger communities.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl md:text-2xl text-gray-900">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="text-center">                  
                  <CardDescription className="text-gray-600 text-base md:text-lg leading-relaxed">
                    To become the leading training institute that exemplifies educational excellence and practical skill development.
                    We envision a world where quality education is accessible to all, creating opportunities for individuals to
                    achieve their full potential and contribute meaningfully to society and the global workforce.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>      {/* Values */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Our Core Values</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              These fundamental principles shape our culture and guide our actions in every business relationship.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">              {[
                {
                  icon: <Handshake className="w-6 h-6 md:w-8 md:h-8" />,
                  title: "Integrity",
                  description:
                    "We conduct our educational programs with honesty, transparency, and ethical practices in all our interactions.",
                  color: "orange",
                },
                {
                  icon: <Globe className="w-6 h-6 md:w-8 md:h-8" />,
                  title: "Excellence in Education",
                  description:
                    "We strive for the highest quality in our training programs and continuously improve our educational methods.",
                  color: "blue",
                },
                {
                  icon: <Award className="w-6 h-6 md:w-8 md:h-8" />,
                  title: "Practical Learning",
                  description:
                    "We focus on hands-on training that bridges the gap between theory and real-world application.",
                  color: "green",
                },
                {
                  icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />,
                  title: "Innovation",
                  description: "We embrace new teaching methodologies and technologies to enhance the learning experience.",
                  color: "purple",
                },
              ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-3 md:pb-4">
                    <div
                      className={`w-12 h-12 md:w-16 md:h-16 bg-${value.color}-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4`}
                    >
                      <div className={`text-${value.color}-600`}>{value.icon}</div>
                    </div>
                    <CardTitle className="text-lg md:text-xl text-gray-900">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-sm md:text-base">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Our Achievements</h2>            
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to educational excellence and the trust our students place in us.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-3 md:mb-4">
                <Users className="w-8 h-8 md:w-12 md:h-12 text-orange-600 mr-2 md:mr-3" />                
                <div className="flex items-baseline">
                  <CounterAnimation end={2000} duration={2500} />
                  <span className="text-3xl md:text-4xl font-bold text-gray-900">+</span>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-600 font-medium">Students Trained</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-3 md:mb-4">
                <Building className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mr-2 md:mr-3" />                
                <div className="flex items-baseline">
                  <CounterAnimation end={15} duration={2500} />
                  <span className="text-3xl md:text-4xl font-bold text-gray-900">+</span>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-600 font-medium">Training Programs</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-3 md:mb-4">
                <Calendar className="w-8 h-8 md:w-12 md:h-12 text-green-600 mr-2 md:mr-3" />
                <div className="flex items-baseline">
                  <CounterAnimation end={10} duration={2500} />
                  <span className="text-3xl md:text-4xl font-bold text-gray-900">+</span>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-600 font-medium">Years of Experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-3 md:mb-4">
                <Star className="w-8 h-8 md:w-12 md:h-12 text-yellow-600 mr-2 md:mr-3" />
                <div className="flex items-baseline">
                  <CounterAnimation end={100} duration={2500} />
                  <span className="text-3xl md:text-4xl font-bold text-gray-900">%</span>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-600 font-medium">Student Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
