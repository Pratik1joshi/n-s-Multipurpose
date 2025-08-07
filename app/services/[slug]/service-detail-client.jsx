"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Phone, 
  Mail, 
  MessageCircle, 
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
  BookOpen,
  Target
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServiceDetailClient({ service }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link href="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-1 flex items-center justify-between">
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
          <Link href="/#services">
            <Button variant="outline" className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Services</span>
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Award className="w-4 h-4 mr-2" />
                {service.category} Training
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {service.title}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Clock className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Duration</div>
                  <div className="font-semibold text-gray-900">{service.duration}</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Users className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Level</div>
                  <div className="font-semibold text-gray-900">{service.level}</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Award className="w-6 h-6 text-green-500 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Certificate</div>
                  <div className="font-semibold text-gray-900">Yes</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Target className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                  <div className="text-sm text-gray-600">Price</div>
                  <div className="font-semibold text-gray-900">{service.price}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/9779841757991?text=Hello%2C%20I%20saw%20your%20website%20and%20I'm%20interested%20in%20your%20${encodeURIComponent(service.title)}%20training.%20I%20want%20to%20enroll.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enroll Now via WhatsApp
                </a>
                <a
                  href="tel:+9779841757991"
                  className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-600 font-semibold py-3 px-8 rounded-full transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </motion.div>

            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={service.images[selectedImage]}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex mt-4 space-x-2 justify-center">
                  {service.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        selectedImage === index ? 'border-orange-500 shadow-md' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${service.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-8 border-b">
            {[
              { id: 'overview', label: 'Overview', icon: BookOpen },
              { id: 'curriculum', label: 'Curriculum', icon: Award },
              { id: 'benefits', label: 'Benefits', icon: Star },
              { id: 'contact', label: 'Contact', icon: MessageCircle }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 font-medium transition-all duration-300 border-b-2 ${
                  activeTab === tab.id
                    ? 'text-orange-600 border-orange-600'
                    : 'text-gray-600 border-transparent hover:text-orange-500'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {activeTab === 'overview' && (
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Course Overview</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.fullDescription}
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Certification</h4>
                    <p className="text-gray-600">{service.certification}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
                  <div className="space-y-3">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h3>
                <div className="grid gap-6">
                  {service.curriculum?.map((module, index) => (
                    <Card key={index} className="border border-gray-200">
                      <CardHeader>
                        <CardTitle className="text-lg text-gray-900 flex items-center">
                          <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                            {index + 1}
                          </div>
                          {module.module}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {module.topics.map((topic, topicIndex) => (
                            <div key={topicIndex} className="flex items-center space-x-2 text-gray-600">
                              <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                              <span>{topic}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'benefits' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Career Benefits</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.benefits?.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg">
                      <Star className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>
                  <p className="text-gray-600 mb-6">
                    Ready to begin your {service.title} journey? Contact us through any of the methods below to get more information or enroll in the program.
                  </p>
                  <div className="space-y-4">
                    <a
                      href={`https://wa.me/9779841757991?text=Hello%2C%20I%20saw%20your%20website%20and%20I'm%20interested%20in%20your%20${encodeURIComponent(service.title)}%20training.%20I%20want%20to%20enroll.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors duration-300"
                    >
                      <MessageCircle className="w-6 h-6 text-green-600" />
                      <div>
                        <div className="font-semibold text-green-900">WhatsApp</div>
                        <div className="text-green-700">+977 9841757991</div>
                      </div>
                    </a>
                    <a
                      href="tel:+9779841757991"
                      className="flex items-center space-x-3 p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors duration-300"
                    >
                      <Phone className="w-6 h-6 text-blue-600" />
                      <div>
                        <div className="font-semibold text-blue-900">Phone</div>
                        <div className="text-blue-700">+977 9841757991</div>
                      </div>
                    </a>
                    <a
                      href="mailto:info@namasteshalom.com"
                      className="flex items-center space-x-3 p-4 bg-orange-50 border border-orange-200 rounded-lg hover:bg-orange-100 transition-colors duration-300"
                    >
                      <Mail className="w-6 h-6 text-orange-600" />
                      <div>
                        <div className="font-semibold text-orange-900">Email</div>
                        <div className="text-orange-700">info@namasteshalom.com</div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-100 to-blue-100 p-8 rounded-xl">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Quick Enrollment</h4>
                  <p className="text-gray-600 mb-6">
                    Send us a quick message and we'll get back to you within 24 hours with all the details you need.
                  </p>
                  <a
                    href={`https://wa.me/9779841757991?text=Hello%2C%20I%20want%20to%20enroll%20in%20${encodeURIComponent(service.title)}%20training.%20Please%20send%20me%20more%20details%20about%3A%0A-%20Course%20schedule%0A-%20Fees%20and%20payment%20options%0A-%20Requirements%20and%20prerequisites%0A-%20Certification%20details`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 w-full"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Send Quick Message
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
