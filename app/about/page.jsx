"use client"

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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import CounterAnimation from "@/components/counter-animation"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center">
              <HelpingHand className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">N&S Trade</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <a href="/#services" className="text-gray-600 hover:text-gray-900 transition-colors">
              Services
            </a>
            <a href="/#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </nav>
          <Button className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700">
            Get Quote
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
                Namaste & Shalom
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover our journey, mission, and the values that drive us to bridge cultures and markets worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 px-34 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/himal.jpg"
                alt="Our Company Story"
                className="w-3/4 h-auto rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with the vision of creating bridges between diverse cultures and markets, Namaste & Shalom
                Multipurpose Trade Pvt. Ltd. embodies the spirit of unity and collaboration. Our name itself represents
                the beautiful convergence of Eastern and Western traditions - "Namaste" from Sanskrit meaning "I bow to
                you" and "Shalom" from Hebrew meaning "peace."
              </p>
              <p className="text-gray-600 mb-6">
                Since our establishment, we have been committed to facilitating international trade while respecting
                cultural diversity and maintaining the highest ethical standards. Our headquarters in Kathmandu, Nepal,
                serves as a strategic hub connecting South Asian markets with global opportunities.
              </p>
              <p className="text-gray-600">
                Today, we stand as a testament to the power of cultural harmony in business, serving clients across
                continents and building lasting partnerships that transcend geographical boundaries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Mission & Vision</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our mission and vision guide every decision we make and every partnership we forge.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 text-lg leading-relaxed">
                    To facilitate seamless international trade by bridging cultural gaps, providing comprehensive
                    trading solutions, and fostering sustainable business relationships that benefit all stakeholders.
                    We are committed to excellence, integrity, and cultural sensitivity in every transaction.
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
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 text-lg leading-relaxed">
                    To become the leading multipurpose trading company that exemplifies cultural harmony and business
                    excellence. We envision a world where trade barriers are minimized through understanding, respect,
                    and collaborative partnerships that create prosperity for all communities we serve.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These fundamental principles shape our culture and guide our actions in every business relationship.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Handshake className="w-8 h-8" />,
                title: "Integrity",
                description:
                  "We conduct business with honesty, transparency, and ethical practices in all our dealings.",
                color: "orange",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Cultural Harmony",
                description:
                  "We celebrate diversity and bridge cultural differences to create meaningful partnerships.",
                color: "blue",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Excellence",
                description:
                  "We strive for the highest quality in our services and continuously improve our processes.",
                color: "green",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Innovation",
                description: "We embrace new technologies and creative solutions to enhance our trading capabilities.",
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
                  <CardHeader>
                    <div
                      className={`w-16 h-16 bg-${value.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <div className={`text-${value.color}-600`}>{value.icon}</div>
                    </div>
                    <CardTitle className="text-xl text-gray-900">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Achievements</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and the trust our clients place in us.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-4">
                <Users className="w-12 h-12 text-orange-600 mr-3" />
                <div className="flex items-baseline">
                  <CounterAnimation end={500} duration={2500} />
                  <span className="text-4xl font-bold text-gray-900">+</span>
                </div>
              </div>
              <p className="text-gray-600 font-medium">Happy Customers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-4">
                <Building className="w-12 h-12 text-blue-600 mr-3" />
                <div className="flex items-baseline">
                  <CounterAnimation end={50} duration={2500} />
                  <span className="text-4xl font-bold text-gray-900">+</span>
                </div>
              </div>
              <p className="text-gray-600 font-medium">Global Partnerships</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-4">
                <Calendar className="w-12 h-12 text-green-600 mr-3" />
                <div className="flex items-baseline">
                  <CounterAnimation end={10} duration={2500} />
                  <span className="text-4xl font-bold text-gray-900">+</span>
                </div>
              </div>
              <p className="text-gray-600 font-medium">Years of Experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-4">
                <Star className="w-12 h-12 text-yellow-600 mr-3" />
                <div className="flex items-baseline">
                  <CounterAnimation end={100} duration={2500} />
                  <span className="text-4xl font-bold text-gray-900">%</span>
                </div>
              </div>
              <p className="text-gray-600 font-medium">Customer Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
