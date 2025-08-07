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
import ServiceDetailClient from "./service-detail-client";

// Service data - this would ideally come from a database or API
const servicesData = {
  "agricultural-training": {
    title: "Agricultural Training",
    category: "Agricultural",
    description: "Comprehensive training in modern farming techniques, crop management, and sustainable agriculture practices designed to empower farmers and agricultural professionals.",
    fullDescription: `Our Agriculture Training program is designed to equip participants with modern farming techniques, sustainable practices, and business skills necessary for successful agricultural ventures. This comprehensive course covers everything from soil management to crop marketing, ensuring participants are well-prepared for the evolving agricultural landscape.

The program combines theoretical knowledge with hands-on practical experience, utilizing our state-of-the-art training facilities and partnerships with local farms. Participants will learn from experienced agricultural professionals and gain insights into the latest technologies and practices in the field.`,
    duration: "3-6 months",
    price: "Contact for pricing",
    level: "Beginner to Advanced",
    certification: "Certified by Agricultural Training Institute",
    images: [
      "/agricultural.jpg",
      "/agriculture1.jpg", 
      "/agriculture2.jpg",
      "/farming1.jpg",
      "/farming2.jpg"
    ],
    features: [
      "Modern Farming Techniques",
      "Crop & Soil Management", 
      "Agri-Business Guidance",
      "Sustainable Practices",
      "Hands-on Workshops",
      "Market Analysis & Planning",
      "Pest Control & Disease Management",
      "Irrigation System Design"
    ],
    curriculum: [
      {
        module: "Foundation of Agriculture",
        topics: ["Soil Science Basics", "Plant Biology", "Climate & Agriculture", "Agricultural Economics"]
      },
      {
        module: "Crop Management",
        topics: ["Seed Selection", "Planting Techniques", "Fertilizer Application", "Harvest Planning"]
      },
      {
        module: "Sustainable Practices",
        topics: ["Organic Farming", "Water Conservation", "Integrated Pest Management", "Soil Health"]
      },
      {
        module: "Agri-Business",
        topics: ["Farm Management", "Marketing Strategies", "Financial Planning", "Value Addition"]
      }
    ],
    benefits: [
      "Increase crop yield by 30-40%",
      "Reduce farming costs through efficient practices",
      "Access to modern agricultural technologies",
      "Business development for agricultural ventures",
      "Networking with agricultural professionals",
      "Certification for professional credibility"
    ]
  },
  "professional-nursing-caregiving": {
    title: "Professional Nursing & Caregiving",
    category: "Healthcare",
    description: "Comprehensive nursing and caregiver training for elderly, children, and special needs. Focus on practical skills, compassion, and international standards.",
    fullDescription: `Our Professional Nursing & Caregiving program prepares participants for rewarding careers in healthcare, focusing on providing compassionate care to individuals across all age groups. This comprehensive training covers medical basics, patient care techniques, and the emotional aspects of caregiving.

The program is designed to meet international standards, making graduates eligible for employment both domestically and internationally. With increasing demand for qualified healthcare professionals, this training opens doors to stable and fulfilling career opportunities.`,
    duration: "6-12 months",
    price: "Contact for pricing",
    level: "Beginner to Intermediate",
    certification: "International Nursing & Caregiving Certificate",
    images: [
      "/carenursing.jpg",
      "/nursing1.jpg",
      "/nursing3.jpg",
      "/healthcare1.jpg",
      "/caregiving1.jpg"
    ],
    features: [
      "Elderly & Child Care",
      "Disability Support",
      "Practical Skills",
      "International Standards",
      "Compassionate Service",
      "Medical Equipment Handling",
      "Emergency Response",
      "Patient Communication"
    ],
    curriculum: [
      {
        module: "Healthcare Fundamentals",
        topics: ["Human Anatomy", "Basic Medical Terminology", "Hygiene & Infection Control", "Patient Rights"]
      },
      {
        module: "Caregiving Techniques",
        topics: ["Personal Care Assistance", "Mobility Support", "Nutrition & Feeding", "Medication Management"]
      },
      {
        module: "Specialized Care",
        topics: ["Elderly Care", "Child Care", "Disability Support", "Mental Health Awareness"]
      },
      {
        module: "Professional Skills",
        topics: ["Communication Skills", "Documentation", "Emergency Procedures", "Cultural Sensitivity"]
      }
    ],
    benefits: [
      "High demand career with job security",
      "International employment opportunities",
      "Competitive salary packages",
      "Personal satisfaction from helping others",
      "Continuous learning and growth",
      "Flexible work arrangements"
    ]
  },
  "wire-cable-training": {
    title: "Wire & Cable Training",
    category: "Technical",
    description: "Technical training in wire and cable installation, safety protocols, and maintenance. Includes hands-on practice for aspiring technicians.",
    fullDescription: `Our Wire & Cable Training program provides comprehensive technical education in electrical wiring, cable installation, and safety protocols. This hands-on training is perfect for individuals looking to enter the electrical trades or upgrade their existing skills.

The program covers both residential and commercial electrical work, ensuring participants are well-prepared for various job opportunities in the electrical field. Safety is paramount in this training, with extensive coverage of electrical safety protocols and best practices.`,
    duration: "2-4 months",
    price: "Contact for pricing", 
    level: "Beginner to Intermediate",
    certification: "Electrical Technician Certificate",
    images: [
      "/wire1.jpg",
      "/wire2.jpg",
      "/plumbing.png",
      "/electrical1.jpg",
      "/technical1.jpg"
    ],
    features: [
      "Wire Installation",
      "Cable Fitting",
      "Safety Protocols",
      "Hands-on Practice",
      "Technical Skills",
      "Electrical Testing",
      "Troubleshooting",
      "Code Compliance"
    ],
    curriculum: [
      {
        module: "Electrical Fundamentals",
        topics: ["Electrical Theory", "Ohm's Law", "Circuit Analysis", "Electrical Components"]
      },
      {
        module: "Wiring Techniques",
        topics: ["Wire Types & Selection", "Installation Methods", "Conduit Systems", "Junction Boxes"]
      },
      {
        module: "Safety & Codes",
        topics: ["Electrical Safety", "NEC Guidelines", "Personal Protective Equipment", "Hazard Recognition"]
      },
      {
        module: "Practical Applications",
        topics: ["Residential Wiring", "Commercial Systems", "Motor Controls", "Troubleshooting"]
      }
    ],
    benefits: [
      "High-demand technical skills",
      "Good earning potential",
      "Job opportunities in construction",
      "Self-employment possibilities",
      "Transferable skills",
      "Industry-recognized certification"
    ]
  },
  "marketing-business": {
    title: "Marketing & Business",
    category: "Business",
    description: "Comprehensive training in marketing strategies, business setup, and entrepreneurship. Learn digital marketing, sales, and business management.",
    fullDescription: `Our Marketing & Business program is designed for aspiring entrepreneurs and marketing professionals who want to build successful businesses or advance their marketing careers. This comprehensive course covers traditional and digital marketing strategies, business development, and management skills.

The program emphasizes practical application, with real-world projects and case studies that help participants understand how to implement marketing strategies effectively. Students will learn to develop business plans, execute marketing campaigns, and analyze market trends.`,
    duration: "4-6 months",
    price: "Contact for pricing",
    level: "Beginner to Advanced",
    certification: "Marketing & Business Management Certificate",
    images: [
      "/digitalmarketing.jpg",
      "/marketing1.jpg",
      "/marketing2.jpg",
      "/business1.jpg",
      "/entrepreneurship1.jpg"
    ],
    features: [
      "Digital Marketing",
      "Business Setup",
      "Sales Strategies",
      "Entrepreneurship",
      "Market Analysis",
      "Brand Development",
      "Customer Acquisition",
      "Financial Planning"
    ],
    curriculum: [
      {
        module: "Business Fundamentals",
        topics: ["Business Planning", "Market Research", "Legal Requirements", "Financial Management"]
      },
      {
        module: "Marketing Strategies",
        topics: ["Traditional Marketing", "Digital Marketing", "Social Media", "Content Marketing"]
      },
      {
        module: "Sales & Customer Relations",
        topics: ["Sales Techniques", "Customer Service", "Relationship Building", "Lead Generation"]
      },
      {
        module: "Business Growth",
        topics: ["Scaling Strategies", "Investment", "Partnership", "Innovation"]
      }
    ],
    benefits: [
      "Entrepreneurship skills",
      "Marketing expertise",
      "Business management knowledge",
      "Network building opportunities",
      "Self-employment potential",
      "Career advancement"
    ]
  },
  "construction": {
    title: "Construction",
    category: "Construction",
    description: "Training in construction skills, building techniques, and project management. Focus on safety, quality, and hands-on experience.",
    fullDescription: `Our Construction Training program provides comprehensive education in building techniques, safety protocols, and project management skills essential for the construction industry. This hands-on program prepares participants for various roles in construction, from basic labor to supervisory positions.

The program covers both residential and commercial construction, with emphasis on modern building techniques, safety standards, and project management. Participants will gain practical experience through real construction projects and simulations.`,
    duration: "3-6 months",
    price: "Contact for pricing",
    level: "Beginner to Intermediate", 
    certification: "Construction Technician Certificate",
    images: [
      "/building.jpg",
      "/construction1.jpg",
      "/construction2.jpg",
      "/building1.jpg",
      "/construction3.jpg"
    ],
    features: [
      "Construction Techniques",
      "Project Management",
      "Safety Standards",
      "Quality Control",
      "Hands-on Training",
      "Blueprint Reading",
      "Equipment Operation",
      "Cost Estimation"
    ],
    curriculum: [
      {
        module: "Construction Basics",
        topics: ["Building Materials", "Foundation Work", "Structural Systems", "Building Codes"]
      },
      {
        module: "Construction Techniques",
        topics: ["Masonry Work", "Concrete Operations", "Steel Work", "Finishing Techniques"]
      },
      {
        module: "Safety & Quality",
        topics: ["Safety Protocols", "OSHA Standards", "Quality Control", "Risk Management"]
      },
      {
        module: "Project Management", 
        topics: ["Project Planning", "Resource Management", "Scheduling", "Cost Control"]
      }
    ],
    benefits: [
      "High-demand construction skills",
      "Good career prospects",
      "Opportunities for advancement",
      "Self-employment potential",
      "Stable employment",
      "Competitive wages"
    ]
  },
  "computer-training": {
    title: "Computer Training",
    category: "Technical",
    description: "Basic to advanced computer skills including MS Office, data entry, and digital literacy for modern workplace requirements.",
    fullDescription: `Our Computer Training program is designed to provide comprehensive computer literacy skills essential for today's digital workplace. From basic computer operations to advanced software applications, this course prepares students for various computer-related job opportunities.

The program covers essential software packages, internet usage, digital communication, and basic troubleshooting. Students will gain hands-on experience with popular software applications and learn to navigate the digital world confidently.`,
    duration: "2-3 months",
    price: "Contact for pricing",
    level: "Beginner to Intermediate",
    certification: "Computer Proficiency Certificate",
    images: [
      "/computer.jpg",
      "/technology1.jpg",
      "/computer2.jpg"
    ],
    features: [
      "MS Office Suite",
      "Data Entry Skills",
      "Digital Literacy",
      "Computer Basics",
      "Internet Usage",
      "Email Management",
      "File Management",
      "Basic Troubleshooting"
    ],
    curriculum: [
      {
        module: "Computer Fundamentals",
        topics: ["Hardware Basics", "Operating Systems", "File Management", "Internet Basics"]
      },
      {
        module: "Microsoft Office",
        topics: ["MS Word", "MS Excel", "MS PowerPoint", "MS Outlook"]
      },
      {
        module: "Digital Skills",
        topics: ["Email Management", "Internet Research", "Online Safety", "Cloud Storage"]
      },
      {
        module: "Practical Applications",
        topics: ["Data Entry", "Document Creation", "Presentations", "Basic Graphics"]
      }
    ],
    benefits: [
      "Essential workplace skills",
      "Improved job prospects",
      "Increased productivity",
      "Digital confidence",
      "Career advancement",
      "Remote work capabilities"
    ]
  },
  "digital-marketing": {
    title: "Digital Marketing",
    category: "Business",
    description: "Master digital marketing strategies, SEO, social media marketing, and online advertising for modern business success.",
    fullDescription: `Our Digital Marketing program provides comprehensive training in modern marketing strategies essential for business growth in the digital age. Students learn to create effective online marketing campaigns, manage social media presence, and analyze digital marketing metrics.

This course covers all major aspects of digital marketing including search engine optimization, social media marketing, content marketing, email marketing, and paid advertising. Practical projects and real-world case studies ensure students gain hands-on experience.`,
    duration: "3-4 months",
    price: "Contact for pricing",
    level: "Beginner to Advanced",
    certification: "Digital Marketing Professional Certificate",
    images: [
      "/Digital-Marketing.jpg",
      "/digitalmarketing.jpg",
      "/marketing1.jpg"
    ],
    features: [
      "SEO & SEM",
      "Social Media Marketing",
      "Content Marketing",
      "Analytics",
      "Email Marketing",
      "Paid Advertising",
      "Brand Management",
      "Marketing Strategy"
    ],
    curriculum: [
      {
        module: "Digital Marketing Fundamentals",
        topics: ["Digital Marketing Overview", "Customer Journey", "Marketing Channels", "Strategy Development"]
      },
      {
        module: "Search Marketing",
        topics: ["Search Engine Optimization", "Google Ads", "Keyword Research", "Analytics"]
      },
      {
        module: "Social Media & Content",
        topics: ["Social Media Strategy", "Content Creation", "Community Management", "Influencer Marketing"]
      },
      {
        module: "Advanced Techniques",
        topics: ["Email Marketing", "Conversion Optimization", "Marketing Automation", "ROI Analysis"]
      }
    ],
    benefits: [
      "High-demand digital skills",
      "Freelancing opportunities",
      "Business growth knowledge",
      "Creative skill development",
      "Remote work potential",
      "Entrepreneurship skills"
    ]
  },
  "web-development": {
    title: "Web Development",
    category: "Technical",
    description: "Learn modern web development technologies, development principles, and full-stack development skills for creating dynamic websites.",
    fullDescription: `Our Web Development program provides comprehensive training in modern web development technologies and practices. Students learn to build responsive, dynamic websites and web applications using current industry standards and best practices.

The course covers both front-end and back-end development, including HTML, CSS, JavaScript, and popular frameworks. Students work on real projects to build a professional portfolio and gain practical experience in web development.`,
    duration: "4-6 months",
    price: "Contact for pricing",
    level: "Beginner to Advanced",
    certification: "Full-Stack Web Developer Certificate",
    images: [
      "/webdevelopment.jpg",
      "/coding1.jpg",
      "/technology2.jpg"
    ],
    features: [
      "HTML/CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Database Management",
      "Responsive Design",
      "API Development",
      "Version Control"
    ],
    curriculum: [
      {
        module: "Frontend Development",
        topics: ["HTML5", "CSS3", "JavaScript ES6+", "Responsive Design"]
      },
      {
        module: "Frontend Frameworks",
        topics: ["React.js", "Component Development", "State Management", "Routing"]
      },
      {
        module: "Backend Development",
        topics: ["Node.js", "Express.js", "Database Design", "API Development"]
      },
      {
        module: "Full-Stack Projects",
        topics: ["Project Planning", "Development Workflow", "Testing", "Deployment"]
      }
    ],
    benefits: [
      "High-paying career opportunities",
      "Remote work flexibility",
      "Creative problem solving",
      "Continuous learning",
      "Freelancing potential",
      "Industry-relevant skills"
    ]
  }
};

// Generate static params for all service slugs
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}

export default function ServiceDetailPage({ params }) {
  const service = servicesData[params.slug];

  return <ServiceDetailClient service={service} />;
}
