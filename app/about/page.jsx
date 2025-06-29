"use client"

import { useState, useEffect } from "react"
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
  ChevronRight,
  Lightbulb,
  Shield,
  Heart,
  Zap,
  BookOpen,
  Trophy,
  Rocket,
  ArrowRight
} from "lucide-react"

// Counter Animation Component
const CounterAnimation = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let startTime = null
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration])
  
  return <span className="text-3xl md:text-4xl font-bold text-gray-900">{count}</span>
}

export default function AboutPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const values = [
    {
      icon: <Handshake className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Integrity",
      description: "We conduct our educational programs with honesty, transparency, and ethical practices in all our interactions.",
      color: "orange",
    },
    {
      icon: <Globe className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Excellence in Education",
      description: "We strive for the highest quality in our training programs and continuously improve our educational methods.",
      color: "blue",
    },
    {
      icon: <Award className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Practical Learning",
      description: "We focus on hands-on training that bridges the gap between theory and real-world application.",
      color: "green",
    },
    {
      icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Innovation",
      description: "We embrace new teaching methodologies and technologies to enhance the learning experience.",
      color: "purple",
    }
  ]

  const principles = [
    {
      title: "Innovation",
      description: "Developing new ideas and approaches to continuously improve our educational offerings",
      color: "orange",
      icon: <Lightbulb className="w-5 h-5" />
    },
    {
      title: "Improvement",
      description: "Commitment to continuous enhancement of our programs, processes, and student experiences",
      color: "blue",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: "Corporate Governance",
      description: "Maintaining transparent, ethical, and accountable organizational practices",
      color: "green",
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: "Culture",
      description: "Fostering an environment that respects diversity and promotes collaborative learning",
      color: "purple",
      icon: <Heart className="w-5 h-5" />
    }
  ]

  const achievements = [
    {
      icon: <Users className="w-8 h-8 md:w-12 md:h-12 text-orange-600" />,
      number: 2000,
      suffix: "+",
      label: "Students Trained",
      color: "orange"
    },
    {
      icon: <Building className="w-8 h-8 md:w-12 md:h-12 text-blue-600" />,
      number: 15,
      suffix: "+",
      label: "Training Programs",
      color: "blue"
    },
    {
      icon: <Calendar className="w-8 h-8 md:w-12 md:h-12 text-green-600" />,
      number: 10,
      suffix: "+",
      label: "Years of Experience",
      color: "green"
    },
    {
      icon: <Star className="w-8 h-8 md:w-12 md:h-12 text-yellow-600" />,
      number: 100,
      suffix: "%",
      label: "Student Satisfaction",
      color: "yellow"
    }
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className={`border-b backdrop-blur-lg transition-all duration-300 sticky top-0 z-50 ${
        scrollY > 50 ? 'bg-white/90 shadow-lg' : 'bg-white/95'
      }`}>
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <HelpingHand className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <span className="font-bold text-lg md:text-xl text-gray-900">N&S Trade</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-orange-600 transition-colors duration-300 font-medium">
              Home
            </a>            
            <a href="/#services" className="text-gray-600 hover:text-orange-600 transition-colors duration-300 font-medium">
              Training Programs
            </a>
            <a href="/#contact" className="text-gray-600 hover:text-orange-600 transition-colors duration-300 font-medium">
              Contact
            </a>
          </nav>

          {/* Desktop Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <button className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white text-sm md:text-base px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">
              <span>Enroll Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white/95 backdrop-blur-lg">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <a 
                href="/" 
                className="block text-gray-600 hover:text-orange-600 transition-colors duration-300 py-2 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="/#services" 
                className="block text-gray-600 hover:text-orange-600 transition-colors duration-300 py-2 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Training Programs
              </a>
              <a 
                href="/#contact" 
                className="block text-gray-600 hover:text-orange-600 transition-colors duration-300 py-2 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <button className="w-full bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white text-sm mt-4 px-6 py-3 rounded-full font-medium transition-all duration-300">
                Enroll Now
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-blue-500/5"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-sm font-medium text-gray-600 border">
              <BookOpen className="w-4 h-4 text-orange-600" />
              <span>Learn About Our Journey</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                N&S Training Institute
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover our journey, mission, and the values that drive us to empower minds through quality education and professional training.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
                <span>Explore Programs</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 font-medium transition-colors duration-300">
                <span>Watch Our Story</span>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                  <div className="w-0 h-0 border-l-4 border-l-orange-600 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                alt="Our Company Story"
                className="relative w-full h-auto rounded-2xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-500"
              />
            </div>

            <div className="order-1 lg:order-2 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center space-x-2 bg-orange-50 rounded-full px-4 py-2 text-sm font-medium text-orange-600">
                <Rocket className="w-4 h-4" />
                <span>Our Journey</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">Our Story</h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Founded with the vision of empowering individuals through quality education and practical training, Namaste & Shalom
                  Multipurpose Trade Pvt. Ltd. embodies the spirit of knowledge sharing and skill development.
                </p>
                <p>
                  Our name represents the beautiful convergence of Eastern and Western educational philosophies - "Namaste" from Sanskrit meaning "I bow to
                  you" and "Shalom" from Hebrew meaning "peace."
                </p>
                <p>
                  Since our establishment, we have been committed to providing comprehensive training programs that bridge the gap between
                  theoretical knowledge and practical application. Our headquarters in Kathmandu, Nepal, serves as a center of excellence.
                </p>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                </div>
                <p className="text-sm text-gray-500">Trusted by thousands of students worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 mb-4 text-sm font-medium text-gray-600 shadow-sm">
              <Target className="w-4 h-4 text-orange-600" />
              <span>Our Purpose</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Mission & Vision</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our mission and vision guide every decision we make and every partnership we forge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="group">
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8 border border-orange-100">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To provide exceptional education and training that empowers individuals with practical skills and knowledge,
                    fostering personal growth and professional development. We are committed to excellence, innovation, and
                    creating opportunities that transform lives and build stronger communities.
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-8 border border-blue-100">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To become the leading training institute that exemplifies educational excellence and practical skill development.
                    We envision a world where quality education is accessible to all, creating opportunities for individuals to
                    achieve their full potential and contribute meaningfully to society and the global workforce.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-orange-50 rounded-full px-4 py-2 mb-4 text-sm font-medium text-orange-600">
              <Heart className="w-4 h-4" />
              <span>What We Stand For</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These fundamental principles shape our culture and guide our actions in every business relationship.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="text-center h-full bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-6 border">
                  <div className={`w-16 h-16 bg-gradient-to-r ${
                    value.color === 'orange' ? 'from-orange-500 to-orange-600' :
                    value.color === 'blue' ? 'from-blue-500 to-blue-600' :
                    value.color === 'green' ? 'from-green-500 to-green-600' :
                    'from-purple-500 to-purple-600'
                  } rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{value.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Principles */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 mb-4 text-sm font-medium text-gray-600 shadow-sm">
              <Shield className="w-4 h-4 text-blue-600" />
              <span>How We Operate</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Organizational Principles</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These guiding principles define how we operate and deliver value to our students and stakeholders.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {principles.map((principle, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      principle.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                      principle.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                      principle.color === 'green' ? 'bg-green-100 text-green-600' :
                      'bg-purple-100 text-purple-600'
                    }`}>
                      {principle.icon}
                    </div>
                    <h4 className="font-semibold text-lg text-gray-900">{principle.title}</h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motivational Quote */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative bg-gradient-to-br from-orange-50 via-white to-blue-50 p-8 md:p-12 rounded-3xl shadow-xl border">
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full opacity-10 -translate-x-10 -translate-y-10"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-r from-blue-500 to-orange-600 rounded-full opacity-10 translate-x-16 translate-y-16"></div>
              
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Our Philosophy</h3>
                <blockquote className="text-xl md:text-2xl font-semibold text-gray-700 mb-4 space-y-2">
                  <div className="text-orange-600">उद्यम गरौं, उद्यमी बनौं</div>
                  <div className="text-blue-600">विदेश हैन, स्वदेश रोजौं</div>
                </blockquote>
                <p className="text-gray-500 italic">
                  (Let's be enterprising, let's become entrepreneurs; Choose our homeland, not foreign lands)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 mb-4 text-sm font-medium text-gray-600 shadow-sm">
              <Trophy className="w-4 h-4 text-yellow-600" />
              <span>Our Impact</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Achievements</h2>            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to educational excellence and the trust our students place in us.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="group">
                <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border">
                  <div className="flex items-center justify-center mb-4">
                    {achievement.icon}
                  </div>
                  <div className="flex items-baseline justify-center mb-2">
                    <CounterAnimation end={achievement.number} duration={2500} />
                    <span className="text-3xl md:text-4xl font-bold text-gray-900">{achievement.suffix}</span>
                  </div>
                  <p className="text-gray-600 font-medium">{achievement.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-orange-500 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of students who have transformed their careers with our training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center space-x-2">
                <span>Browse Programs</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}