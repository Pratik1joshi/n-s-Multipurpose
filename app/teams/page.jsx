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
  GraduationCap,
  Award,
  Users,
  Star,
  BookOpen,
  Globe,
  Quote
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

export default function TeamsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const teamMembers = [
    {
      name: "Yamakanta nyaupane",
      position: "Managing Director & Chief Instructor",
      specialization: "Agricultural Sciences & Business Development",
      experience: "15+ Years",
      education: "PhD in Agricultural Sciences, MBA",
      image: "/profile1.jpg",
      bio: "Leading our institute with vision and expertise in agricultural innovation and business development.",
      achievements: [
        "Published 20+ research papers",
        "International consultant",
        "Award-winning educator"
      ],
      email: "rajesh@namastelanding.com",
      phone: "+977 9841529843"
    },
    {
      name: "Sapana Acharya",
      position: "Senior Training Coordinator",
      specialization: "Agriculture & Horticulture",
      experience: "2+ Years",
      education: "Bachelors in Agricultural Sciences",
      image: "/sapana.png",
      bio: "Expert in agriculture training with extensive industry experience and international exposure.",
      achievements: [
        "Trained 50+ students",
        "Industry partnerships",
        "Excellence in teaching"
      ],
      email: "sapana@namastelanding.com",
      phone: "+977 9841757991"
    },
    // {
    //   name: "Ramesh Bhandari",
    //   position: "Technology & IT Instructor",
    //   specialization: "Computer Training & Digital Skills",
    //   experience: "10+ Years",
    //   education: "Masters in Computer Science",
    //   image: "/team/tech-instructor.jpg",
    //   bio: "Passionate about bridging the digital divide through practical computer training and modern technology education.",
    //   achievements: [
    //     "Certified trainer",
    //     "Software developer",
    //     "Tech innovation advocate"
    //   ],
    //   email: "ramesh@namastelanding.com",
    //   phone: "+977 9841529843"
    // },
    // {
    //   name: "Maya Gurung",
    //   position: "Language & Communication Trainer",
    //   specialization: "English, Korean & Japanese Languages",
    //   experience: "8+ Years",
    //   education: "Masters in Linguistics, TESOL Certified",
    //   image: "/team/language-trainer.jpg",
    //   bio: "Multilingual expert helping students master foreign languages for international opportunities.",
    //   achievements: [
    //     "Fluent in 5 languages",
    //     "International certified",
    //     "Cultural exchange expert"
    //   ],
    //   email: "maya@namastelanding.com",
    //   phone: "+977 9841757991"
    // },
    // {
    //   name: "Bikash Shrestha",
    //   position: "Practical Skills Instructor",
    //   specialization: "Driving & Technical Skills",
    //   experience: "7+ Years",
    //   education: "Technical Diploma, Certified Instructor",
    //   image: "/team/practical-instructor.jpg",
    //   bio: "Hands-on instructor specializing in practical life skills and technical training programs.",
    //   achievements: [
    //     "Safe driving advocate",
    //     "Technical expertise",
    //     "Student safety focus"
    //   ],
    //   email: "bikash@namastelanding.com",
    //   phone: "+977 9841529843"
    // },
    // {
    //   name: "Sunita Oli",
    //   position: "Student Counselor & Support",
    //   specialization: "Career Guidance & Student Welfare",
    //   experience: "6+ Years",
    //   education: "Masters in Psychology, Counseling Certified",
    //   image: "/team/counselor.jpg",
    //   bio: "Dedicated to student success through personalized guidance and comprehensive support services.",
    //   achievements: [
    //     "Career guidance expert",
    //     "Student welfare advocate",
    //     "Success rate improvement"
    //   ],
    //   email: "sunita@namastelanding.com",
    //   phone: "+977 9841757991"
    // }
  ];

  const stats = [
    { icon: Users, label: "Team Members", value: "15+" },
    { icon: GraduationCap, label: "Years Combined Experience", value: "80+" },
    { icon: Award, label: "Certifications", value: "50+" },
    { icon: Star, label: "Student Success Rate", value: "98%" }
  ];

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
              className="text-orange-600 font-medium transition-colors"
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
                className="block text-orange-600 font-medium transition-colors py-2"
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
                <Users className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium text-gray-700">हाम्रो टोली</span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Meet Our <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">Expert Team</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 mb-8"
            >
              Our dedicated team of experienced professionals is committed to providing you with the highest quality education and training. Meet the experts who will guide your learning journey.
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

      {/* Team Members Section */}
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
              Our Professional Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each member of our team brings unique expertise and passion for education, ensuring you receive comprehensive and practical training.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group bg-white overflow-hidden">
                  <div className="relative">
                    <div className="h-70 bg-gradient-to-br from-orange-100 to-blue-100 flex items-center justify-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 text-orange-600 text-xs px-2 py-1 rounded-full font-medium">
                        {member.experience}
                      </span>
                    </div>
                  </div>

                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                      {member.name}
                    </CardTitle>
                    <p className="text-orange-600 font-medium">{member.position}</p>
                    <p className="text-sm text-gray-600">{member.specialization}</p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                        <GraduationCap className="w-4 h-4 mr-2 text-blue-600" />
                        Education
                      </h4>
                      <p className="text-sm text-gray-600">{member.education}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                        <Quote className="w-4 h-4 mr-2 text-green-600" />
                        About
                      </h4>
                      <p className="text-sm text-gray-600">{member.bio}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                        <Award className="w-4 h-4 mr-2 text-yellow-600" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {member.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col gap-2 mt-6">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center justify-center text-sm text-gray-600 hover:text-orange-600 transition-colors"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Contact via Email
                      </a>
                      <a
                        href={`https://wa.me/${member.phone.replace(/[^0-9]/g, '')}?text=Hello%20${member.name}%2C%20I%20would%20like%20to%20know%20more%20about%20your%20training%20programs.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white text-sm py-2 px-4 rounded-full transition-all duration-300 font-medium text-center"
                      >
                        Message on WhatsApp
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
              Ready to Learn from the Best?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our community of learners and benefit from the expertise of our professional team. Start your journey towards skill development and career advancement today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button
                  size="lg"
                  className="cursor-pointer bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700"
                >
                  View Training Programs
                </Button>
              </Link>
              <a
                href="https://wa.me/9779841757991?text=Hello%2C%20I%20saw%20your%20team%20page%20and%20I%20want%20to%20enroll%20in%20your%20training%20program."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="cursor-pointer bg-white text-gray-900 border-gray-300 hover:bg-gray-50"
                >
                  Contact Our Team
                </Button>
              </a>
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
