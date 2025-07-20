"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { User, Mail, MessageSquare, Send, CheckCircle } from "lucide-react"

export function AnimatedContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        subject: "",
        message: "",
      })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center py-12 animate-fade-in">
          <div className="bg-green-100 text-green-800 p-4 rounded-full w-fit mx-auto mb-6 animate-bounce">
            <CheckCircle className="h-16 w-16" />
          </div>
          <h3 className="text-3xl font-bold text-green-800 mb-4">Message Sent!</h3>
          <p className="text-green-600 text-lg">Thank you for contacting us. We'll get back to you within 24 hours.</p>
          <div className="mt-6 flex justify-center">
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl md:text-3xl font-bold text-stone-800 mb-6 animate-slide-in-left">Send Us a Message</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Name Field */}
          <div className="relative group animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-400 group-focus-within:text-orange-500 transition-colors duration-300" />
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 md:py-4 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 peer placeholder-transparent"
                placeholder="Your full name"
              />
              <label
                htmlFor="name"
                className="absolute left-10 top-1/2 transform -translate-y-1/2 text-stone-500 transition-all duration-300 pointer-events-none peer-focus:-translate-y-8 peer-focus:text-orange-500 peer-focus:text-sm peer-focus:font-medium peer-valid:-translate-y-8 peer-valid:text-orange-500 peer-valid:text-sm peer-valid:font-medium"
              >
                Full Name *
              </label>
            </div>
          </div>

          {/* Email Field */}
          <div className="relative group animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-400 group-focus-within:text-orange-500 transition-colors duration-300" />
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 md:py-4 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 peer placeholder-transparent"
                placeholder="your@email.com"
              />
              <label
                htmlFor="email"
                className="absolute left-10 top-1/2 transform -translate-y-1/2 text-stone-500 transition-all duration-300 pointer-events-none peer-focus:-translate-y-8 peer-focus:text-orange-500 peer-focus:text-sm peer-focus:font-medium peer-valid:-translate-y-8 peer-valid:text-orange-500 peer-valid:text-sm peer-valid:font-medium"
              >
                Email Address *
              </label>
            </div>
          </div>
        </div>

        {/* Subject Field */}
        <div className="relative group animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-400 group-focus-within:text-orange-500 transition-colors duration-300" />
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 md:py-4 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 peer placeholder-transparent"
              placeholder="Subject of your message"
            />
            <label
              htmlFor="subject"
              className="absolute left-10 top-1/2 transform -translate-y-1/2 text-stone-500 transition-all duration-300 pointer-events-none peer-focus:-translate-y-8 peer-focus:text-orange-500 peer-focus:text-sm peer-focus:font-medium peer-valid:-translate-y-8 peer-valid:text-orange-500 peer-valid:text-sm peer-valid:font-medium"
            >
              Subject *
            </label>
          </div>
        </div>

        {/* Message Field */}
        <div className="relative group animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-stone-400 group-focus-within:text-orange-500 transition-colors duration-300" />
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 md:py-4 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 peer placeholder-transparent resize-none"
              placeholder="Your message"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-10 top-4 text-stone-500 transition-all duration-300 pointer-events-none peer-focus:-translate-y-6 peer-focus:text-orange-500 peer-focus:text-sm peer-focus:font-medium peer-valid:-translate-y-6 peer-valid:text-orange-500 peer-valid:text-sm peer-valid:font-medium"
            >
              Message *
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="animate-slide-in-up" style={{ animationDelay: "0.5s" }}>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white py-3 md:py-4 text-lg font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                Sending Message...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                Send Message
                <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
