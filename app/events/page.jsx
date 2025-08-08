"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin,
  Menu,
  X,
  Calendar,
  Clock,
  Users,
  Star,
  BookOpen,
  Globe,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";

// WhatsApp Icon Component
const WhatsAppIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.515z"/>
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function EventsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const upcomingEvents = [
    {
      title: "Advanced Agricultural Training Workshop",
      date: "March 15-17, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Namaste & Shalom Training Center",
      category: "Agriculture",
      duration: "3 Days",
      participants: "30 Students",
      description: "Intensive workshop covering modern farming techniques, sustainable agriculture practices, and crop management strategies.",
      highlights: [
        "Hands-on farming demonstrations",
        "Expert guest speakers",
        "Certificate of completion",
        "Networking opportunities"
      ],
      instructor: "Dr. Rajesh Sharma",
      fee: "NPR 15,000",
      status: "Registration Open"
    },
    {
      title: "Hospitality & Tourism Management Seminar",
      date: "March 22-24, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Hotel Management Lab",
      category: "Hospitality",
      duration: "3 Days",
      participants: "25 Students",
      description: "Comprehensive seminar on hospitality industry trends, customer service excellence, and tourism management best practices.",
      highlights: [
        "Industry case studies",
        "Professional networking",
        "Career guidance session",
        "Industry certification"
      ],
      instructor: "Sita Kumari Thapa",
      fee: "NPR 12,000",
      status: "Registration Open"
    },
    {
      title: "Digital Skills Bootcamp",
      date: "April 5-12, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Computer Training Lab",
      category: "Technology",
      duration: "8 Days",
      participants: "20 Students",
      description: "Intensive bootcamp covering computer fundamentals, digital literacy, and modern software applications for professional use.",
      highlights: [
        "Hands-on computer training",
        "Software certifications",
        "Project-based learning",
        "Job placement assistance"
      ],
      instructor: "Ramesh Bhandari",
      fee: "NPR 20,000",
      status: "Early Bird Discount"
    },
    {
      title: "Korean Language Intensive Course",
      date: "April 18-25, 2025",
      time: "8:00 AM - 12:00 PM",
      location: "Language Training Center",
      category: "Language",
      duration: "8 Days",
      participants: "15 Students",
      description: "Accelerated Korean language course designed for students preparing for Korea employment or further studies.",
      highlights: [
        "Native speaker instruction",
        "Cultural orientation",
        "EPS-TOPIK preparation",
        "Conversation practice"
      ],
      instructor: "Maya Gurung",
      fee: "NPR 18,000",
      status: "Limited Seats"
    },
    {
      title: "Professional Driving Training Program",
      date: "May 3-10, 2025",
      time: "6:00 AM - 10:00 AM",
      location: "Driving Training Ground",
      category: "Practical Skills",
      duration: "8 Days",
      participants: "12 Students",
      description: "Comprehensive driving training program covering both theoretical knowledge and practical driving skills for professional drivers.",
      highlights: [
        "Professional instructor training",
        "Safety protocols",
        "License preparation",
        "Vehicle maintenance basics"
      ],
      instructor: "Bikash Shrestha",
      fee: "NPR 25,000",
      status: "Registration Open"
    },
    {
      title: "Career Guidance & Counseling Workshop",
      date: "May 15-16, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Counseling Center",
      category: "Career Development",
      duration: "2 Days",
      participants: "40 Students",
      description: "Professional development workshop focusing on career planning, job search strategies, and personal branding.",
      highlights: [
        "Career assessment",
        "Resume building workshop",
        "Interview preparation",
        "Personal development plan"
      ],
      instructor: "Sunita Oli",
      fee: "NPR 8,000",
      status: "Registration Open"
    }
  ];

  const eventCategories = [
    { name: "Agriculture", count: 1, color: "green" },
    { name: "Hospitality", count: 1, color: "blue" },
    { name: "Technology", count: 1, color: "purple" },
    { name: "Language", count: 1, color: "orange" },
    { name: "Practical Skills", count: 1, color: "red" },
    { name: "Career Development", count: 1, color: "yellow" }
  ];

  const stats = [
    { icon: Calendar, label: "Upcoming Events", value: "6" },
    { icon: Users, label: "Total Participants", value: "142" },
    { icon: Clock, label: "Training Hours", value: "200+" },
    { icon: Star, label: "Success Rate", value: "98%" }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Registration Open":
        return "bg-green-100 text-green-800";
      case "Early Bird Discount":
        return "bg-orange-100 text-orange-800";
      case "Limited Seats":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Agriculture":
        return "bg-green-500";
      case "Hospitality":
        return "bg-blue-500";
      case "Technology":
        return "bg-purple-500";
      case "Language":
        return "bg-orange-500";
      case "Practical Skills":
        return "bg-red-500";
      case "Career Development":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-orange-600 to-blue-600 text-white py-2 md:py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4 md:space-x-8 text-xs md:text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-medium">namaste.shalom2000@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-medium">+977 9841529843</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2">
                <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-medium">
                  Chandragiri-7, Kathmandu, Nepal
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-3 md:space-x-4">
              <a
                href="https://wa.me/9779841757991?text=Hello%2C%20I%20saw%20your%20website!" 
                target="_blank"
                className="hover:text-orange-200 transition-colors duration-200 p-1 rounded"
              >
                <WhatsAppIcon />
              </a>
              <a
                href="#"
                className="hover:text-orange-200 transition-colors duration-200 p-1 rounded"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-orange-200 transition-colors duration-200 p-1 rounded"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="hover:text-orange-200 transition-colors duration-200 p-1 rounded"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="container mx-auto px-4 py-1 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="Namaste & Shalom Logo"
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
              />
              <span className="font-bold text-lg md:text-xl text-gray-900">
                Namaste & Shalom
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <a
              href="/#about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </a>
            <a
              href="/#services"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Training Services
            </a>
            <Link
              href="/teams"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Teams
            </Link>
            <Link
              href="/events"
              className="text-orange-600 font-medium transition-colors"
            >
              Next Events
            </Link>
            <Link
              href="/exams"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Exams
            </Link>
            <a
              href="/#contact"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Desktop Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://wa.me/9779841757991?text=Hello%2C%20I%20saw%20your%20website%20and%20I%20want%20to%20enroll%20in%20your%20training%20program."
              target="_blank"
              rel="noopener noreferrer" 
              className="cursor-pointer hidden sm:block bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-sm md:text-base px-4 md:px-6 py-2 rounded-md text-white font-medium"
            >
              Enroll Now
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
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
                href="/#about"
                className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/#services"
                className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Training Services
              </a>
              <Link
                href="/teams"
                className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Teams
              </Link>
              <Link
                href="/events"
                className="block text-orange-600 font-medium transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Next Events
              </Link>
              <Link
                href="/exams"
                className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Exams
              </Link>
              <a
                href="/#contact"
                className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a 
                href="https://wa.me/9779841757991?text=Hello%2C%20I%20saw%20your%20website%20and%20I%20want%20to%20enroll%20in%20your%20training%20program." 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:hidden bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-sm mt-4 px-4 py-2 rounded-md text-white font-medium text-center block"
              >
                Enroll Now
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-blue-100 px-4 py-2 rounded-full mb-6">
                <Calendar className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium text-gray-700">आगामी कार्यक्रमहरू</span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Upcoming <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">Events & Workshops</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 mb-8"
            >
              We are planning exciting training events, workshops, and special programs. Stay tuned for upcoming schedules and registration details.
            </motion.p>

            {/* Coming Soon Badge */}
            <motion.div
              variants={itemVariants}
              className="mb-12"
            >
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg">
                <Clock className="w-6 h-6" />
                Coming Soon
              </div>
            </motion.div>

            {/* <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-orange-600 mr-2" />
                    <span className="text-2xl md:text-3xl font-bold text-gray-900">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-gray-600">{stat.label}</p>
                </div>
              ))}
            </motion.div> */}
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="mb-12">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Calendar className="w-16 h-16 text-orange-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Exciting Events Coming Soon
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We are currently organizing comprehensive training events, workshops, and special programs to enhance your skills and advance your career. These events will feature expert instructors, hands-on learning, and networking opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Training Workshops</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">Intensive workshops covering agricultural techniques, healthcare, technology, and professional skills development.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Networking Events</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">Connect with industry professionals, alumni, and fellow learners to expand your professional network and opportunities.</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">Special Programs</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">Career guidance sessions, skill assessment programs, and industry-specific training events tailored to market demands.</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Be the First to Know</h3>
              <p className="text-gray-600 mb-6">
                Stay updated on our upcoming events and be among the first to register when they become available. Get exclusive early bird discounts and priority access.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/9779841757991?text=Hello%2C%20I%20want%20to%20be%20notified%20about%20upcoming%20training%20events%20and%20workshops.%20Please%20keep%20me%20updated."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="cursor-pointer bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700"
                  >
                    Get Notified
                  </Button>
                </a>
                <Link href="/">
                  <Button
                    size="lg"
                    variant="outline"
                    className="cursor-pointer bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                  >
                    View Training Programs
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Stay Connected for Upcoming Events
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're working on exciting training events and workshops. Contact us to stay informed about upcoming programs and get priority registration when they become available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/9779841757991?text=Hello%2C%20I%20want%20to%20know%20more%20about%20your%20upcoming%20events%20and%20workshops.%20Please%20keep%20me%20updated."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="cursor-pointer bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700"
                >
                  Get Updates
                </Button>
              </a>
              <Link href="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="cursor-pointer bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                >
                  View Training Programs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="/logo.png"
                  alt="Namaste & Shalom Logo"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
                <span className="font-bold text-xl">Namaste & Shalom</span>
              </div>
              <p className="text-gray-400">
                Multipurpose Trade Pvt. Ltd. - Empowering minds through quality
                education and training.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/"
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <a
                    href="/#about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/#services"
                    className="hover:text-white transition-colors"
                  >
                    Training Programs
                  </a>
                </li>
                <li>
                  <Link
                    href="/teams"
                    className="hover:text-white transition-colors"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="hover:text-white transition-colors"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <a
                    href="/#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>Kathmandu, Nepal</p>
                <p>Post Box No. 25034</p>
                <p>namaste.shalom2000@gmail.com</p>
                <p>+977 9841529843</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 Namaste & Shalom Multipurpose Trade Pvt. Ltd. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
