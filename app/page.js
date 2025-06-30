"use client";

import { useState, useEffect, useRef } from "react";
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
  Quote,
  Heart,
  Sparkles,
  Mountain,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";
import CounterAnimation from "@/components/counter-animation";

// Nepali Text Animation Component
const NepaliTextReveal = ({ text, translation, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setIsVisible(true), delay);
    }
  }, [isInView, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="relative bg-gradient-to-r from-orange-50 to-blue-50 p-6 rounded-xl border-l-4 border-orange-500 shadow-lg backdrop-blur-sm">
        <Quote className="absolute top-2 left-2 w-6 h-6 text-orange-400 opacity-50" />
        <div className="pl-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl font-semibold text-gray-800 mb-2 leading-relaxed"
            style={{ fontFamily: 'Noto Sans Devanagari, serif' }}
          >
            {text}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-sm text-gray-600 italic"
          >
            "{translation}"
          </motion.p>
        </div>
        <div className="absolute top-4 right-4">
          <Heart className="w-5 h-5 text-red-400" />
        </div>
      </div>
    </motion.div>
  );
};

// Floating Nepali Elements Component
const FloatingNepaliElements = () => {
  const [isClient, setIsClient] = useState(false);
  
  // Predefined positions that will be consistent between server and client
  const elements = [
    { text: "सफलता", translation: "Success", delay: 0, position: 20 },
    { text: "शिक्षा", translation: "Education", delay: 1000, position: 40 },
    { text: "प्रगति", translation: "Progress", delay: 2000, position: 60 },
    { text: "ज्ञान", translation: "Knowledge", delay: 3000, position: 80 }
  ];
  
  // Set isClient to true only on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 100, x: 0 }}
          animate={isClient ? { 
            opacity: [0, 0.7, 0],
            y: -100,
            x: index % 2 === 0 ? 50 : -50
          } : { opacity: 0, y: 100, x: 0 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: element.delay / 1000,
            ease: "easeOut"
          }}
          className="absolute bottom-0"
          style={{ left: `${element.position}%` }}
        >
          <div className="bg-gradient-to-r from-orange-400 to-blue-400 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
            {element.text}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Mountain Range Component
const MountainRange = () => (
  <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
    <svg viewBox="0 0 1200 300" className="w-full h-full">
      <path
        d="M0,300 L0,200 L100,150 L200,180 L300,120 L400,160 L500,100 L600,140 L700,90 L800,130 L900,80 L1000,120 L1100,70 L1200,110 L1200,300 Z"
        fill="url(#mountainGradient)"
      />
      <defs>
        <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const WhatsAppIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "20"}
      height={props.height || "20"}
      viewBox="0 0 24 24"
      fill="currentColor"
      strokeWidth="0"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className || "lucide lucide-whatsapp"}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M20.352 3.648C18.057 1.353 14.967 0 11.712 0 5.314 0 .165 5.148.165 11.548c0 2.033.513 4.023 1.489 5.779L0 24l6.817-1.587c1.69.92 3.602 1.405 5.543 1.405 6.397 0 11.545-5.149 11.545-11.548 0-3.254-1.353-6.344-3.553-8.622zm-8.64 17.886c-1.732 0-3.435-.435-4.935-1.26l-.352-.21-3.683 1.063.883-3.556-.23-.364c-.892-1.564-1.364-3.347-1.364-5.163 0-5.323 4.328-9.65 9.651-9.65 2.576 0 5.001 1.004 6.822 2.826s2.825 4.247 2.825 6.822c0 5.324-4.328 9.652-9.651 9.652z" fillRule="nonzero" />
    </svg>
  );
};

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAllServices, setShowAllServices] = useState(false);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const heroControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isHeroInView) {
      heroControls.start("visible");
    }
  }, [isHeroInView, heroControls]);

  // Add smooth scroll behavior globally
  useEffect(() => {
    // Add smooth scrolling to the document
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const headerOffset = 80; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const allServices = [
    // Core Training Programs
    {
      image: "/agricultural.jpg",
      title: "Agriculture Training",
      description:
        "Comprehensive training in modern farming techniques, crop management, and sustainable agriculture practices.",
      features: [
        "Crop Management",
        "Soil Science",
        "Irrigation Systems",
        "Pest Control",
      ],
      category: "agricultural",
    },
    {
      image: "/cook.jpg",
      title: "Cook & Hotel Management",
      description:
        "Professional culinary arts and hospitality management training for the hotel and restaurant industry.",
      features: [
        "Culinary Arts",
        "Food Safety",
        "Hotel Operations",
        "Customer Service",
      ],
      category: "hospitality",
    },
    {
      image: "/computer.jpg",
      title: "Computer Training",
      description:
        "Basic to advanced computer skills including MS Office, data entry, and digital literacy.",
      features: [
        "MS Office",
        "Data Entry",
        "Digital Literacy",
        "Computer Basics",
      ],
      category: "technical",
    },
    {
      image: "/accounting.jpg",
      title: "Accounting Training",
      description:
        "Professional accounting and bookkeeping training with practical business applications.",
      features: [
        "Financial Accounting",
        "Tax Preparation",
        "QuickBooks",
        "Payroll Management",
      ],
      category: "financial",
    },
    {
      image: "/drive.jpg",
      title: "Driving Training",
      description:
        "Professional driving instruction for various vehicle types with safety-focused approach.",
      features: [
        "Car Driving",
        "Motorcycle Training",
        "Traffic Rules",
        "Safety Protocols",
      ],
      category: "core",
    },
    {
      image: "/bridge-course-scaled.jpg",
      title: "Bridge Course",
      description:
        "Preparatory courses to bridge educational gaps and prepare students for advanced studies.",
      features: [
        "Academic Preparation",
        "Skill Assessment",
        "Career Guidance",
        "Foundation Building",
      ],
      category: "educational",
    },
    // Technical & Digital Skills
    {
      image: "/webdesign.png",
      title: "Web Design",
      description:
        "Learn modern web designing technologies, design principles, and full designing skills.",
      features: [
        "HTML/CSS",
        "Figma",
        "Canva",
        "Responsive Design",
      ],
      category: "technical",
    },
    {
      image: "/webdevelopment.jpg",
      title: "Web Development",
      description:
        "Learn modern web development technologies, development principles, and full-stack development skills.",
      features: [
        "HTML/CSS",
        "React",
        "Node.js",
        "Database Management",
      ],
      category: "technical",
    },
    {
      image: "/Digital-Marketing.jpg",
      title: "Digital Marketing",
      description:
        "Master digital marketing strategies, SEO, social media marketing, and online advertising.",
      features: [
        "SEO & SEM",
        "Social Media Marketing",
        "Content Marketing",
        "Analytics",
      ],
      category: "technical",
    },
    // Financial Services
    {
      image: "/forextrading.png",
      title: "Forex Trading",
      description:
        "Professional forex trading education covering market analysis, risk management, and trading strategies.",
      features: [
        "Market Analysis",
        "Trading Strategies",
        "Risk Management",
        "Technical Analysis",
      ],
      category: "financial",
    },
    {
      image: "/Share_market.jpg",
      title: "Share Market Training",
      description:
        "Comprehensive stock market education including fundamental and technical analysis.",
      features: [
        "Stock Analysis",
        "Portfolio Management",
        "Market Research",
        "Investment Strategies",
      ],
      category: "financial",
    },
    {
      image: "/banking-insurance.jpeg",
      title: "Banking & Insurance Training",
      description:
        "Banking operations, insurance products, and financial services training with internship opportunities.",
      features: [
        "Banking Operations",
        "Insurance Products",
        "Customer Service",
        "Internship Program",
      ],
      category: "financial",
    },
    {
      image: "/income.jpg",
      title: "Income-Based Programs",
      description:
        "Practical training programs designed to generate immediate income opportunities.",
      features: [
        "Skill Monetization",
        "Freelancing",
        "Business Setup",
        "Market Linkage",
      ],
      category: "financial",
    },
    // Healthcare & Caregiving
    {
      image: "/carenursing.jpg",
      title: "Basic Nursing & Caregiving",
      description:
        "Essential nursing and caregiving skills for elderly, disabled, and children care.",
      features: [
        "Elderly Care",
        "Disability Support",
        "Child Care",
        "Basic Medical Skills",
      ],
      category: "healthcare",
    },
    {
      image: "/housekeeping.jpg",
      title: "Housekeeping & Cleaning",
      description:
        "Professional housekeeping, cleaning techniques, and hospitality maintenance services.",
      features: [
        "Cleaning Techniques",
        "Hospitality Standards",
        "Safety Protocols",
        "Equipment Handling",
      ],
      category: "hospitality",
    },
    // Construction & Technical
    {
      image: "/building.jpg",
      title: "Building & Construction",
      description:
        "Construction skills, building techniques, and project management in the construction industry.",
      features: [
        "Construction Techniques",
        "Safety Standards",
        "Project Management",
        "Quality Control",
      ],
      category: "construction",
    },
    {
      image: "/plumbing.png",
      title: "Electrical & Plumbing",
      description:
        "Wire fitting, electrical installations, plumbing, and pipe fitting technical training.",
      features: [
        "Wire Fitting",
        "Electrical Installation",
        "Plumbing Systems",
        "Pipe Fitting",
      ],
      category: "construction",
    },
    // Communication & Professional Skills
    {
      image: "/communication.jpg",
      title: "Communication Skills",
      description:
        "Enhance your verbal and written communication skills for professional success.",
      features: [
        "Public Speaking",
        "Business Writing",
        "Presentation Skills",
        "Interpersonal Communication",
      ],
      category: "professional",
    },
    {
      image: "/translationgraphic.jpg",
      title: "Translation Services",
      description:
        "Professional translation training and services for multiple languages and document types.",
      features: [
        "Language Translation",
        "Document Localization",
        "Technical Translation",
        "Cultural Adaptation",
      ],
      category: "professional",
    },
    {
      image: "/jobplacement.jpg",
      title: "Job Placement & Internship",
      description:
        "Career guidance, job placement assistance, and internship opportunities to kickstart your career.",
      features: [
        "Career Counseling",
        "Resume Building",
        "Interview Preparation",
        "Industry Connections",
      ],
      category: "professional",
    },
    {
      image: "/airline_ticket.png",
      title: "Airlines and Ticketing Training",
      description:"Comprehensive training in airline operations, reservation systems, and ticketing procedures for a successful career in the travel industry.",
      features: [
        "Airline Reservation Systems",
        "Ticketing Procedures",
        "Customer Service Skills",
        "Industry Certifications"
      ],
      category: "professional",

    },
  ];

  const displayedServices = showAllServices
    ? allServices
    : allServices.slice(0, 6);

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
                href="https://wa.me/9779863995341?text=Hello%2C%20I%20saw%20your%20website!" target="_blank"
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
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center">
              <HelpingHand className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <span className="font-bold text-lg md:text-xl text-gray-900">
              N&S Trade
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Training Programs
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Desktop Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Button className="cursor-pointer hidden sm:block bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-sm md:text-base px-4 md:px-6">
              Enroll Now
            </Button>

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

      {/* Enhanced Hero Section */}
      <section
        ref={heroRef}
        className="relative py-12 md:py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-hidden"
      >
        <MountainRange />
        <FloatingNepaliElements />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={heroControls}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <motion.div
                variants={itemVariants}
                className="mb-6"
              >
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-blue-100 px-4 py-2 rounded-full mb-4">
                  <Mountain className="w-4 h-4 text-orange-600" />
                  <span className="text-sm font-medium text-gray-700">नेपालको गर्व</span>
                  <Sparkles className="w-4 h-4 text-blue-600" />
                </div>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6"
              >
                <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                  Namaste And Shalom
                </span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-700">
                  Multipurpose Trade Pvt.ltd
                </span>
              </motion.h1>

              {/* Enhanced Nepali Motto with Animation */}
              <motion.div
                variants={itemVariants}
                className="mb-6"
              >
                <div className="relative p-6 bg-gradient-to-r from-orange-400/10 to-blue-400/10 rounded-2xl border border-orange-200/50 backdrop-blur-sm">
                  <div className="absolute -top-3 left-6">
                    <div className="bg-gradient-to-r from-orange-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      हाम्रो संकल्प
                    </div>
                  </div>
                  
                  <motion.p
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="text-lg md:text-xl font-bold text-gray-800 mb-2 text-center leading-relaxed"
                    style={{ fontFamily: 'Noto Sans Devanagari, serif' }}
                  >
                    समृद्धि तथा दिगो विकासका लागि नविन सोच, नविन प्रविधि सहित सेवाका लागि सक्षम
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center gap-2 text-sm text-gray-600 bg-white/70 px-3 py-1 rounded-full">
                      <Sun className="w-4 h-4 text-yellow-500" />
                      <span className="italic">
                        "Prosperity and sustainable development through innovative thinking, modern technology, and capable service"
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8"
              >
                Empowering minds through quality education and practical
                training. Your pathway to professional excellence and career
                advancement.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link href="#services">
                  <Button
                    size="lg"
                    onClick={() => smoothScrollTo('services')}
                    className="cursor-pointer bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-sm md:text-base"
                  >
                    Explore Training Programs
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="cursor-pointer bg-white text-gray-900 border-gray-300 hover:bg-gray-50 text-sm md:text-base"
                  >
                    Enroll Now
                  </Button>
                </Link>
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
                  src="/profile1.jpg"
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
                <span className="text-2xl md:text-3xl font-bold text-gray-900">
                  +
                </span>
              </div>
              <p className="text-sm md:text-base text-gray-600">
                Students Trained
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Building className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mr-2" />
                <CounterAnimation end={15} duration={2000} />
                <span className="text-2xl md:text-3xl font-bold text-gray-900">
                  +
                </span>
              </div>
              <p className="text-sm md:text-base text-gray-600">
                Training Programs
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="w-6 h-6 md:w-8 md:h-8 text-green-600 mr-2" />
                <CounterAnimation end={15} duration={2000} />
                <span className="text-2xl md:text-3xl font-bold text-gray-900">
                  +
                </span>
              </div>
              <p className="text-sm md:text-base text-gray-600">
                Years Experience
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-6 h-6 md:w-8 md:h-8 text-yellow-600 mr-2" />
                <CounterAnimation end={98} duration={2000} />
                <span className="text-2xl md:text-3xl font-bold text-gray-900">
                  %
                </span>
              </div>
              <p className="text-sm md:text-base text-gray-600">Success Rate</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-12 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-orange-50/30 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <div className="relative">
                <img
                  src="/profilepic.jpg"
                  alt="About Namaste & Shalom"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-blue-500 text-white p-4 rounded-lg shadow-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm">वर्षको अनुभव</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 text-center lg:text-left"
            >
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-orange-100 px-4 py-2 rounded-full mb-4">
                  <span className="text-sm font-medium text-gray-700">हाम्रो बारेमा</span>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                About Our Institute
              </h2>

              {/* Enhanced Nepali Philosophy Section */}
              <div className="mb-6">
                <NepaliTextReveal 
                  text="शिक्षा नै जीवनको आधार हो, र हामी यसैलाई व्यावहारिक र प्रभावकारी बनाउँछौं।"
                  translation="Education is the foundation of life, and we make it practical and effective."
                />
              </div>

              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
                Namaste & Shalom Multipurpose Trade Pvt. Ltd. is a premier
                training institute dedicated to empowering individuals with
                practical skills and knowledge. Based in Kathmandu, Nepal, we
                offer comprehensive training programs across diverse fields
                including agriculture, hospitality, technology, and professional
                development.
              </p>

              <div className="mb-6">
                <NepaliTextReveal 
                  text="सिप र ज्ञानको संयोजनले व्यक्तिको भविष्य उज्यालो बनाउँछ।"
                  translation="The combination of skills and knowledge brightens a person's future."
                  delay={500}
                />
              </div>

              <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">
                Our commitment to quality education and hands-on training has
                made us a trusted choice for students seeking career advancement
                and skill development. We bridge the gap between theoretical
                knowledge and practical application.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/about">
                  <Button className="cursor-pointer bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-sm md:text-base">
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
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg md:text-xl">
                  Expert Training
                </CardTitle>
                <div className="text-sm text-orange-600 font-medium">विशेषज्ञ तालिम</div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm md:text-base">
                  Professional training programs designed by industry experts
                  with hands-on experience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg md:text-xl">
                  Career Growth
                </CardTitle>
                <div className="text-sm text-blue-600 font-medium">करियर वृद्धि</div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm md:text-base">
                  Comprehensive skills development to advance your career and
                  professional opportunities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group sm:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                </div>
                <CardTitle className="text-lg md:text-xl">
                  Certification
                </CardTitle>
                <div className="text-sm text-green-600 font-medium">प्रमाणीकरण</div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-sm md:text-base">
                  Internationally recognized certifications to validate your
                  skills and expertise.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Services Section - keeping your existing implementation */}
      <section id="services" className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Our Training Programs
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Comprehensive training courses designed to equip you with
              practical skills and industry knowledge across various fields.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {displayedServices.map((service, index) => (
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
                    <div className="absolute top-3 left-3">
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full capitalize">
                        {service.category}
                      </span>
                    </div>
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
                        <div
                          key={featureIndex}
                          className="flex items-center text-xs md:text-sm text-gray-600"
                        >
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

          {/* View More/Less Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-8 md:mt-12"
          >
            <Button
              onClick={() => setShowAllServices(!showAllServices)}
              className="cursor-pointer bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-sm px-8 py-3 font-medium"
            >
              {showAllServices
                ? "Show Less Services"
                : `View All ${allServices.length} Services`}
            </Button>
            <p className="text-sm text-gray-500 mt-2">
              {showAllServices
                ? "Showing all training programs"
                : `Showing ${displayedServices.length} of ${allServices.length} training programs`}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - keeping your existing implementation */}
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
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Get In Touch
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                Ready to start your learning journey? Contact us today to
                discuss our training programs and how we can help advance your
                career.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm md:text-base">
                        Address
                      </p>
                      <p className="text-gray-600 text-sm md:text-base">
                        Namaste And Shalom Multipurpose Trade Pvt.ltd
                        <br />
                        Kathmandu, Post Box No. 25034, Nepal
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm md:text-base">
                        Contact Numbers
                      </p>
                      <div className="text-gray-600 text-sm md:text-base space-y-1">
                        <p>9841 5298 43</p>
                        <p>98032 66 514</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm md:text-base">
                        WhatsApp / Viber
                      </p>
                      <p className="text-gray-600 text-sm md:text-base">
                        +977 9841529843
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-purple-600 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm md:text-base">
                        Email
                      </p>
                      <p className="text-gray-600 text-sm md:text-base">
                        namaste.shalom2000@gmail.com
                      </p>
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
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">
                  Send us a Message
                </h3>
                <form className="space-y-4 md:space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1 md:mb-2"
                    >
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
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1 md:mb-2"
                    >
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
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1 md:mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-sm md:text-base"
                      placeholder="Tell us about your training interests..."
                    ></textarea>
                  </div>
                  <Button className="cursor-pointer w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 py-2 md:py-3 text-sm md:text-base">
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - keeping your existing implementation */}
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
                Multipurpose Trade Pvt. Ltd. - Empowering minds through quality
                education and training.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    Training Programs
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
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
