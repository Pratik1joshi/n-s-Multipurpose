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
  ChevronRight,
  FileText,
  Award,
  CheckCircle,
  AlertCircle
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

export default function ExamsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const upcomingExams = [
    {
      title: "Korean Language Proficiency Test (EPS-TOPIK)",
      date: "April 20, 2025",
      time: "9:00 AM - 12:00 PM",
      location: "Namaste & Shalom Examination Center",
      category: "Language Certification",
      duration: "3 Hours",
      fee: "NPR 5,000",
      description: "Official Korean language proficiency test required for employment in South Korea under the Employment Permit System.",
      eligibility: [
        "Age: 18-39 years",
        "Minimum education: Class 10 pass",
        "Valid passport required",
        "No previous EPS-TOPIK certificate"
      ],
      examSections: [
        "Listening Comprehension (25 questions)",
        "Reading Comprehension (25 questions)"
      ],
      preparationTips: [
        "Complete our Korean language course",
        "Practice with sample papers",
        "Focus on basic vocabulary",
        "Improve listening skills"
      ],
      resultDate: "May 15, 2025",
      status: "Registration Open"
    },
    {
      title: "Computer Skills Assessment Test",
      date: "March 28, 2025",
      time: "10:00 AM - 1:00 PM",
      location: "Computer Lab, Training Center",
      category: "Technical Certification",
      duration: "3 Hours",
      fee: "NPR 3,000",
      description: "Comprehensive computer skills assessment covering basic to intermediate level computer operations and software usage.",
      eligibility: [
        "Basic computer knowledge required",
        "Completed our computer training course",
        "Age: 16+ years"
      ],
      examSections: [
        "MS Office Applications (Word, Excel, PowerPoint)",
        "Internet and Email Usage",
        "Basic Computer Operations",
        "Typing Speed Test"
      ],
      preparationTips: [
        "Practice MS Office daily",
        "Improve typing speed (minimum 25 WPM)",
        "Learn keyboard shortcuts",
        "Practice email operations"
      ],
      resultDate: "April 5, 2025",
      status: "Registration Open"
    },
    {
      title: "Hospitality Service Excellence Certification",
      date: "May 8, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Hospitality Training Center",
      category: "Hospitality Certification",
      duration: "7 Hours",
      fee: "NPR 8,000",
      description: "Professional certification exam for hospitality industry skills including customer service, hotel operations, and tourism management.",
      eligibility: [
        "Completed hospitality training course",
        "Age: 18+ years",
        "Basic English communication skills"
      ],
      examSections: [
        "Customer Service Excellence",
        "Hotel Operations Management",
        "Tourism and Travel Operations",
        "Food and Beverage Service",
        "Practical Skills Assessment"
      ],
      preparationTips: [
        "Review hospitality industry standards",
        "Practice customer service scenarios",
        "Study hotel management basics",
        "Improve English communication"
      ],
      resultDate: "May 20, 2025",
      status: "Registration Open"
    },
    {
      title: "Agricultural Technology Competency Test",
      date: "June 15, 2025",
      time: "8:00 AM - 2:00 PM",
      location: "Agricultural Training Ground",
      category: "Agricultural Certification",
      duration: "6 Hours",
      fee: "NPR 6,000",
      description: "Comprehensive assessment of modern agricultural techniques, crop management, and sustainable farming practices.",
      eligibility: [
        "Agricultural training course completion",
        "Basic farming knowledge",
        "Age: 18+ years"
      ],
      examSections: [
        "Crop Management and Production",
        "Soil Science and Fertilizers",
        "Pest and Disease Management",
        "Agricultural Technology",
        "Practical Field Assessment"
      ],
      preparationTips: [
        "Review modern farming techniques",
        "Study crop rotation methods",
        "Learn about organic farming",
        "Practice soil testing procedures"
      ],
      resultDate: "June 30, 2025",
      status: "Early Registration"
    },
    {
      title: "Professional Driving License Test",
      date: "April 12, 2025",
      time: "6:00 AM - 12:00 PM",
      location: "Driving Test Center",
      category: "Driving Certification",
      duration: "6 Hours",
      fee: "NPR 4,500",
      description: "Official driving license examination including both theoretical knowledge and practical driving skills assessment.",
      eligibility: [
        "Age: 18+ years",
        "Completed driving training course",
        "Valid learner's permit",
        "Medical fitness certificate"
      ],
      examSections: [
        "Traffic Rules and Regulations",
        "Road Signs and Signals",
        "Vehicle Safety and Maintenance",
        "Practical Driving Test"
      ],
      preparationTips: [
        "Study traffic rules thoroughly",
        "Practice parallel parking",
        "Learn road signs and signals",
        "Practice defensive driving"
      ],
      resultDate: "April 20, 2025",
      status: "Registration Open"
    },
    {
      title: "English Communication Proficiency Test",
      date: "May 25, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Language Testing Center",
      category: "Language Certification",
      duration: "5 Hours",
      fee: "NPR 4,000",
      description: "Comprehensive English language proficiency assessment for professional and academic purposes.",
      eligibility: [
        "Basic English knowledge",
        "Age: 16+ years",
        "Completed English course (recommended)"
      ],
      examSections: [
        "Listening Comprehension",
        "Reading Comprehension",
        "Writing Skills",
        "Speaking Assessment"
      ],
      preparationTips: [
        "Practice English daily",
        "Read English newspapers",
        "Watch English movies with subtitles",
        "Practice speaking with friends"
      ],
      resultDate: "June 10, 2025",
      status: "Registration Open"
    }
  ];

  const examCategories = [
    { name: "Language Certification", count: 2, color: "blue" },
    { name: "Technical Certification", count: 1, color: "purple" },
    { name: "Hospitality Certification", count: 1, color: "green" },
    { name: "Agricultural Certification", count: 1, color: "yellow" },
    { name: "Driving Certification", count: 1, color: "red" }
  ];

  const stats = [
    { icon: FileText, label: "Available Exams", value: "6" },
    { icon: Users, label: "Registered Students", value: "250+" },
    { icon: Award, label: "Certifications Issued", value: "500+" },
    { icon: Star, label: "Pass Rate", value: "95%" }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Registration Open":
        return "bg-green-100 text-green-800";
      case "Early Registration":
        return "bg-blue-100 text-blue-800";
      case "Limited Seats":
        return "bg-red-100 text-red-800";
      case "Closed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Language Certification":
        return "bg-blue-500";
      case "Technical Certification":
        return "bg-purple-500";
      case "Hospitality Certification":
        return "bg-green-500";
      case "Agricultural Certification":
        return "bg-yellow-500";
      case "Driving Certification":
        return "bg-red-500";
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
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Next Events
            </Link>
            <Link
              href="/exams"
              className="text-orange-600 font-medium transition-colors"
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
                className="block text-gray-600 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Next Events
              </Link>
              <Link
                href="/exams"
                className="block text-orange-600 font-medium transition-colors py-2"
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
                <FileText className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium text-gray-700">परीक्षा तालिका</span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Certification <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">Exams & Tests</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 mb-8"
            >
              Validate your skills and knowledge with our comprehensive certification exams. Get officially recognized credentials that enhance your career prospects and professional standing.
            </motion.p>

            <motion.div
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Exams Grid Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Upcoming Certification Exams
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Register for our professional certification exams and validate your skills with industry-recognized credentials.
            </p>
          </motion.div>

          {/* Exam Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {examCategories.map((category, index) => (
              <div key={index} className="flex items-center bg-gray-50 px-4 py-2 rounded-full">
                <div className={`w-3 h-3 rounded-full mr-2 ${getCategoryColor(category.name)}`}></div>
                <span className="text-sm font-medium text-gray-700">{category.name}</span>
                <span className="text-xs text-gray-500 ml-2">({category.count})</span>
              </div>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingExams.map((exam, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group bg-white overflow-hidden">
                  <div className="relative">
                    <div className={`h-2 ${getCategoryColor(exam.category)}`}></div>
                    <div className="absolute top-4 right-4">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(exam.status)}`}>
                        {exam.status}
                      </span>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-orange-600 font-medium">{exam.category}</span>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {exam.duration}
                      </div>
                    </div>
                    <CardTitle className="text-lg text-gray-900 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                      {exam.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-orange-500" />
                        {exam.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-blue-500" />
                        {exam.time}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-green-500" />
                        {exam.location}
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      {exam.description}
                    </p>

                    {/* Eligibility Criteria */}
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        Eligibility:
                      </h4>
                      <ul className="space-y-1">
                        {exam.eligibility.map((criteria, criteriaIndex) => (
                          <li key={criteriaIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                            {criteria}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Exam Sections */}
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                        <BookOpen className="w-4 h-4 mr-2 text-blue-500" />
                        Exam Sections:
                      </h4>
                      <ul className="space-y-1">
                        {exam.examSections.map((section, sectionIndex) => (
                          <li key={sectionIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                            {section}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Preparation Tips */}
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-2 text-orange-500" />
                        Preparation Tips:
                      </h4>
                      <ul className="space-y-1">
                        {exam.preparationTips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 flex-shrink-0"></div>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t pt-4 mb-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Exam Fee:</span>
                          <p className="font-medium text-green-600">{exam.fee}</p>
                        </div>
                        <div>
                          <span className="text-gray-500">Result Date:</span>
                          <p className="font-medium text-gray-900">{exam.resultDate}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <a
                        href={`https://wa.me/9779841757991?text=Hello%2C%20I%20want%20to%20register%20for%20the%20${encodeURIComponent(exam.title)}%20exam%20scheduled%20for%20${encodeURIComponent(exam.date)}.%20Please%20provide%20me%20with%20registration%20details.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white text-sm py-2 px-4 rounded-full transition-all duration-300 font-medium text-center flex items-center justify-center"
                      >
                        Register for Exam
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                      <button className="border border-orange-500 text-orange-600 hover:bg-orange-50 text-sm py-2 px-4 rounded-full transition-all duration-300 font-medium">
                        Download Syllabus
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Information Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Important Examination Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-orange-600" />
                    Registration Process
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-orange-500 flex-shrink-0" />
                      Contact us via WhatsApp or visit our center
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-orange-500 flex-shrink-0" />
                      Submit required documents and eligibility proof
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-orange-500 flex-shrink-0" />
                      Pay examination fee
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-orange-500 flex-shrink-0" />
                      Receive admit card 3 days before exam
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-blue-600" />
                    Certification Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-blue-500 flex-shrink-0" />
                      Industry-recognized certificates
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-blue-500 flex-shrink-0" />
                      Enhanced career opportunities
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-blue-500 flex-shrink-0" />
                      Professional skill validation
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-blue-500 flex-shrink-0" />
                      Lifetime certificate validity
                    </li>
                  </ul>
                </CardContent>
              </Card>
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
              Ready to Get Certified?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Take the next step in your professional journey. Register for our certification exams and validate your skills with industry-recognized credentials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/9779841757991?text=Hello%2C%20I%20want%20to%20know%20more%20about%20your%20certification%20exams%20and%20registration%20process."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="cursor-pointer bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700"
                >
                  Register for Exams
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
                  <Link
                    href="/exams"
                    className="hover:text-white transition-colors"
                  >
                    Exams
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
