"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, Utensils, CalendarCheck, CreditCard } from "lucide-react"

export default function ReservationPage() {
  return (
    <main className="pt-24 pb-16 bg-stone-50 relative overflow-hidden">
      {/* Animated Farm Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-8 h-8 bg-green-600 rounded-full animate-pulse"></div>
        <div
          className="absolute top-32 right-20 w-6 h-6 bg-orange-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-40 left-1/4 w-4 h-4 bg-yellow-500 rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Moving People Icons */}
        <div className="absolute top-24 left-0 w-full h-full">
          <div className="absolute animate-move-right-slow">
            <div className="w-3 h-6 bg-blue-400 rounded-full mb-1"></div>
            <div className="w-4 h-4 bg-blue-600 rounded"></div>
          </div>

          <div className="absolute top-16 animate-move-left-slow" style={{ animationDelay: "2s" }}>
            <div className="w-3 h-6 bg-green-400 rounded-full mb-1"></div>
            <div className="w-4 h-4 bg-green-600 rounded"></div>
          </div>

          <div className="absolute top-32 animate-move-diagonal" style={{ animationDelay: "3s" }}>
            <div className="w-3 h-6 bg-orange-400 rounded-full mb-1"></div>
            <div className="w-4 h-4 bg-orange-600 rounded"></div>
          </div>
        </div>

        {/* Farm Elements */}
        <div
          className="absolute bottom-20 left-10 w-12 h-8 bg-amber-600 rounded animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-32 right-16 w-8 h-8 bg-green-700 rounded-full animate-bounce"
          style={{ animationDelay: "2.5s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/3 w-6 h-10 bg-amber-700 rounded animate-pulse"
          style={{ animationDelay: "3.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Make a Reservation</h1>
            <p className="text-lg text-stone-600">
              Book your visit to Portion 85 and experience our unique farm, educational activities, and more.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 animate-fade-in-delay">
            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-50 p-4 rounded-lg text-center transform hover:scale-105 transition-transform">
                <div className="bg-green-100 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold text-stone-800 mb-1">Choose Date</h3>
                <p className="text-sm text-stone-600">Select your preferred visit date</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg text-center transform hover:scale-105 transition-transform">
                <div className="bg-green-100 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold text-stone-800 mb-1">Select Experience</h3>
                <p className="text-sm text-stone-600">Choose from our various activities</p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg text-center transform hover:scale-105 transition-transform">
                <div className="bg-green-100 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CreditCard className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold text-stone-800 mb-1">Confirm & Pay</h3>
                <p className="text-sm text-stone-600">Complete your booking securely</p>
              </div>
            </div>

            {/* Optimized Form */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-stone-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    required
                    className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Your first name"
                  />
                </div>

                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-stone-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    required
                    className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="+27 XX XXX XXXX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="visit-date" className="block text-sm font-medium text-stone-700 mb-1">
                    Visit Date *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <CalendarCheck className="h-5 w-5 text-stone-400" />
                    </div>
                    <input
                      type="date"
                      id="visit-date"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full pl-10 px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="visit-time" className="block text-sm font-medium text-stone-700 mb-1">
                    Visit Time *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Clock className="h-5 w-5 text-stone-400" />
                    </div>
                    <select
                      id="visit-time"
                      required
                      className="w-full pl-10 px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a time</option>
                      <option value="09:00">09:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">01:00 PM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="15:00">03:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-stone-700 mb-1">
                  Number of Guests *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Users className="h-5 w-5 text-stone-400" />
                  </div>
                  <input
                    type="number"
                    id="guests"
                    min="1"
                    max="50"
                    required
                    className="w-full pl-10 px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="Number of guests"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-stone-700 mb-1">
                  Select Experience *
                </label>
                <select
                  id="experience"
                  required
                  className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                >
                  <option value="">Select an experience</option>
                  <option value="general">General Farm Visit - R150 per person</option>
                  <option value="guided-tour">Guided Farm Tour - R250 per person</option>
                  <option value="wine-processing">Wine Processing Simulation - R300 per person</option>
                  <option value="wine-sip">Wine & Sip Experience - R400 per person</option>
                  <option value="educational">Educational Workshop - R200 per person</option>
                  <option value="birthday">Birthday Party Package - R500 per child</option>
                  <option value="school">School Group Visit - R100 per student</option>
                  <option value="sip-paint">Sip & Paint Event - R350 per person</option>
                </select>
              </div>

              <div>
                <label htmlFor="meal" className="block text-sm font-medium text-stone-700 mb-1">
                  Meal Options (Optional)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Utensils className="h-5 w-5 text-stone-400" />
                  </div>
                  <select
                    id="meal"
                    className="w-full pl-10 px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a meal option</option>
                    <option value="none">No meal required</option>
                    <option value="lunch">Lunch at The Harvest Table Restaurant - R180 per person</option>
                    <option value="picnic">Farm Picnic Basket - R120 per person</option>
                    <option value="pizza">Wood-fired Pizza Experience - R150 per person</option>
                    <option value="braai">Traditional South African Braai - R200 per person</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="special-requests" className="block text-sm font-medium text-stone-700 mb-1">
                  Special Requests (Optional)
                </label>
                <textarea
                  id="special-requests"
                  rows={4}
                  className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                  placeholder="Any special requests, dietary requirements, or accessibility needs"
                ></textarea>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-stone-800 mb-2">Booking Information</h3>
                <ul className="text-sm text-stone-600 space-y-1">
                  <li>• Bookings must be made at least 24 hours in advance</li>
                  <li>• A 50% deposit is required to confirm your reservation</li>
                  <li>• Free cancellation up to 48 hours before your visit</li>
                  <li>• Group discounts available for 15+ people</li>
                </ul>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Complete Reservation
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes move-right-slow {
          0% { transform: translateX(-100px) translateY(0px); }
          50% { transform: translateX(50vw) translateY(-20px); }
          100% { transform: translateX(100vw) translateY(0px); }
        }
        
        @keyframes move-left-slow {
          0% { transform: translateX(100vw) translateY(0px); }
          50% { transform: translateX(50vw) translateY(20px); }
          100% { transform: translateX(-100px) translateY(0px); }
        }
        
        @keyframes move-diagonal {
          0% { transform: translateX(-50px) translateY(100px); }
          25% { transform: translateX(25vw) translateY(50px); }
          50% { transform: translateX(50vw) translateY(20px); }
          75% { transform: translateX(75vw) translateY(60px); }
          100% { transform: translateX(100vw) translateY(100px); }
        }
        
        .animate-move-right-slow {
          animation: move-right-slow 15s linear infinite;
        }
        
        .animate-move-left-slow {
          animation: move-left-slow 18s linear infinite;
        }
        
        .animate-move-diagonal {
          animation: move-diagonal 20s linear infinite;
        }
      `}</style>
    </main>
  )
}
