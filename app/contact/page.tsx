"use client"

import type React from "react"

import { useState } from "react"
import { OptimizedImage } from "@/components/optimized-image"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Navigation,
  Calendar,
  Users,
  Star,
  Car,
} from "lucide-react"

interface ContactMethod {
  icon: React.ReactNode
  title: string
  details: string[]
  action?: string
  actionLink?: string
}

const contactMethods: ContactMethod[] = [
  {
    icon: <Phone className="h-8 w-8" />,
    title: "Phone",
    details: ["Ms Siyanda Bani: 067 963 4795", "Available: Mon-Fri 8AM-5PM"],
    action: "Call Now",
    actionLink: "tel:0679634795",
  },
  {
    icon: <Mail className="h-8 w-8" />,
    title: "Email",
    details: ["info@portion85.co.za", "Response within 24 hours"],
    action: "Send Email",
    actionLink: "mailto:info@portion85.co.za",
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    title: "Visit Us",
    details: ["Portion 85 M26 Knopjeslaagte", "Centurion, 0014"],
    action: "Get Directions",
    actionLink: "#directions",
  },
  {
    icon: <MessageCircle className="h-8 w-8" />,
    title: "WhatsApp",
    details: ["067 963 4795", "Quick responses during business hours"],
    action: "Chat Now",
    actionLink: "https://wa.me/27679634795",
  },
]

const departments = [
  {
    name: "General Inquiries",
    email: "info@portion85.co.za",
    description: "General questions about Portion 85",
  },
  {
    name: "Bookings & Reservations",
    email: "bookings@portion85.co.za",
    description: "Visit bookings and group reservations",
  },
  {
    name: "Events & Venue Hire",
    email: "events@portion85.co.za",
    description: "Weddings, corporate events, and venue hire",
  },
  {
    name: "Educational Programs",
    email: "education@portion85.co.za",
    description: "School visits and educational tours",
  },
]

const faqs = [
  {
    question: "What are your operating hours?",
    answer:
      "We're open Monday to Friday 8:00 AM - 5:00 PM, Saturday 8:00 AM - 5:00 PM, and Sunday 8:00 AM - 3:30 PM. We're closed on Christmas Day.",
  },
  {
    question: "Do I need to book in advance?",
    answer:
      "While walk-ins are welcome, we highly recommend booking in advance, especially for weekends and group visits, to ensure availability and the best experience.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes, we have ample free parking available for all visitors, including space for buses and larger vehicles.",
  },
  {
    question: "Are pets allowed?",
    answer:
      "For the safety of our farm animals and other visitors, pets are not permitted on the farm premises, except for registered service animals.",
  },
  {
    question: "What should I wear for my visit?",
    answer:
      "We recommend comfortable walking shoes and weather-appropriate clothing. Don't forget sun protection like hats and sunscreen for outdoor activities.",
  },
  {
    question: "Do you cater for dietary restrictions?",
    answer:
      "Yes, our restaurant can accommodate most dietary requirements including vegetarian, vegan, and gluten-free options. Please inform us when booking.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    department: "",
    message: "",
    preferredContact: "email",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        department: "",
        message: "",
        preferredContact: "email",
      })
    }, 3000)
  }

  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/60 z-10"></div>
        <OptimizedImage
          src="/images/about-image.jpg"
          alt="Contact Portion 85"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Get in Touch</h1>
              <p className="text-xl text-white/90 mb-6">
                We'd love to hear from you! Whether you're planning a visit, organizing an event, or just have questions
                about Portion 85, we're here to help.
              </p>
              <div className="flex items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>Quick Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>Friendly Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  <span>Expert Advice</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">How to Reach Us</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Choose the method that works best for you. We're committed to responding quickly and providing the
              information you need.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <AnimatedSection
                key={method.title}
                className="bg-stone-50 rounded-xl p-6 text-center hover:bg-orange-50 transition-all duration-300 group"
                delay={index * 0.1}
              >
                <div className="bg-orange-600 text-white p-4 rounded-full w-fit mx-auto mb-4 group-hover:bg-orange-700 transition-colors">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">{method.title}</h3>
                <div className="space-y-1 mb-4">
                  {method.details.map((detail, idx) => (
                    <p key={idx} className="text-stone-600">
                      {detail}
                    </p>
                  ))}
                </div>
                {method.action && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                    onClick={() => {
                      if (method.actionLink?.startsWith("#")) {
                        document.querySelector(method.actionLink)?.scrollIntoView({ behavior: "smooth" })
                      } else if (method.actionLink) {
                        window.open(method.actionLink, "_blank")
                      }
                    }}
                  >
                    {method.action}
                  </Button>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="left">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-stone-800 mb-6">Send Us a Message</h2>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="bg-green-100 text-green-800 p-4 rounded-full w-fit mx-auto mb-4">
                        <CheckCircle className="h-12 w-12" />
                      </div>
                      <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                      <p className="text-green-600">
                        Thank you for contacting us. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Your phone number"
                          />
                        </div>
                        <div>
                          <label htmlFor="department" className="block text-sm font-medium text-stone-700 mb-2">
                            Department
                          </label>
                          <select
                            id="department"
                            name="department"
                            value={formData.department}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                          >
                            <option value="">Select department</option>
                            {departments.map((dept) => (
                              <option key={dept.name} value={dept.name}>
                                {dept.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="What is your message about?"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="Tell us how we can help you..."
                        ></textarea>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-3">
                          Preferred Contact Method
                        </label>
                        <div className="flex gap-4">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="preferredContact"
                              value="email"
                              checked={formData.preferredContact === "email"}
                              onChange={handleInputChange}
                              className="mr-2"
                            />
                            Email
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="preferredContact"
                              value="phone"
                              checked={formData.preferredContact === "phone"}
                              onChange={handleInputChange}
                              className="mr-2"
                            />
                            Phone
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="preferredContact"
                              value="whatsapp"
                              checked={formData.preferredContact === "whatsapp"}
                              onChange={handleInputChange}
                              className="mr-2"
                            />
                            WhatsApp
                          </label>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <AnimatedSection direction="right">
                <div className="space-y-6">
                  {/* Office Hours */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-orange-600" />
                      Office Hours
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-stone-600">Monday - Friday:</span>
                        <span className="font-medium">8:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-600">Saturday:</span>
                        <span className="font-medium">8:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-600">Sunday:</span>
                        <span className="font-medium">8:00 AM - 3:30 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-600">Public Holidays:</span>
                        <span className="font-medium">8:00 AM - 3:30 PM</span>
                      </div>
                      <p className="text-sm text-stone-500 mt-3">*Closed on Christmas Day</p>
                    </div>
                  </div>

                  {/* Departments */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-stone-800 mb-4">Departments</h3>
                    <div className="space-y-4">
                      {departments.map((dept, index) => (
                        <div key={index} className="border-l-4 border-orange-600 pl-4">
                          <h4 className="font-medium text-stone-800">{dept.name}</h4>
                          <p className="text-sm text-stone-600 mb-1">{dept.description}</p>
                          <a href={`mailto:${dept.email}`} className="text-sm text-orange-600 hover:text-orange-700">
                            {dept.email}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Tips */}
                  <div className="bg-orange-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-stone-800 mb-4">Quick Tips</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5" />
                        <span className="text-sm text-stone-700">
                          Include your preferred visit date for faster booking
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5" />
                        <span className="text-sm text-stone-700">Mention group size for accurate pricing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5" />
                        <span className="text-sm text-stone-700">Ask about special packages and discounts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5" />
                        <span className="text-sm text-stone-700">We respond within 24 hours</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Find quick answers to common questions about visiting Portion 85.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} className="border-b border-stone-200 last:border-b-0" delay={index * 0.1}>
                <button
                  className="w-full py-6 text-left flex items-center justify-between hover:text-orange-600 transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-medium text-stone-800 pr-4">{faq.question}</h3>
                  <div className={`transform transition-transform ${expandedFaq === index ? "rotate-180" : ""}`}>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {expandedFaq === index && (
                  <div className="pb-6">
                    <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section id="directions" className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">How to Find Us</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Located conveniently between Johannesburg and Pretoria, Portion 85 is easily accessible from major routes.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection direction="left">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-stone-800 mb-6 flex items-center gap-2">
                  <Navigation className="h-6 w-6 text-orange-600" />
                  GPS Coordinates
                </h3>
                <div className="bg-orange-50 rounded-lg p-4 mb-6">
                  <p className="text-lg font-mono">25° 54' 00.0" S</p>
                  <p className="text-lg font-mono">28° 06' 00.0" E</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-stone-800 mb-2">From Johannesburg (Southern Areas):</h4>
                    <p className="text-stone-600">
                      Take the N3 to Malibongwe (R512) towards Lanseria Airport. Pass Ferreiras, Northriding, cross
                      Witkoppen Rd, past Kya Sands and Cosmo City. At the big 4-way stop intersection with M26, turn
                      right. Portion 85 is 2.5km on the left.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-stone-800 mb-2">From Pretoria:</h4>
                    <p className="text-stone-600">
                      Take R28/N14 to Krugersdorp, turn off at R512 (Lanseria/Randburg) offramp, keep left towards
                      Randburg. About 1km further, turn left at the big 4-way stop intersection with M26. Portion 85 is
                      2.5km on the left.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-stone-800 mb-2">From Beyers Naude:</h4>
                    <p className="text-stone-600">
                      Turn on M26 towards Knopjeslaagte. Go 9-10km to the big 4-way stop with M26 intersection
                      (Malibongwe road). Go straight over intersection. Portion 85 is 2.5km on the left.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-stone-200">
                  <div className="flex items-center gap-4 text-sm text-stone-600">
                    <div className="flex items-center gap-1">
                      <Car className="h-4 w-4" />
                      <span>Free Parking</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Navigation className="h-4 w-4" />
                      <span>Easy Access</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Well Signposted</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                <div className="p-6 border-b">
                  <h3 className="text-xl font-bold text-stone-800">Interactive Map</h3>
                  <p className="text-stone-600">Click and drag to explore the area</p>
                </div>
                <div className="h-96 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14343.346907785936!2d28.1!3d-25.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDU0JzAwLjAiUyAyOMKwMDYnMDAuMCJF!5e0!3m2!1sen!2sza!4v1650000000000!5m2!1sen!2sza"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Visit Portion 85?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              We're excited to welcome you to our farm! Book your visit today or get in touch to learn more about what
              we have to offer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                Book Your Visit <Calendar className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-700"
              >
                Call Us Now <Phone className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
