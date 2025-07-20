import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users, Coffee, Utensils, Wifi, Monitor, CheckCircle } from "lucide-react"

export default function ConferencingPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/60 z-10"></div>
          <Image src="/images/conference-room.png" alt="Conferencing at Portion 85" fill className="object-cover" />
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Conferences & Functions</h1>
                <p className="text-xl text-white/90 mb-6">
                  Host your next corporate event, workshop, or team building in our unique farm setting
                </p>
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                  Request a Quote
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Conference Room Showcase */}
        <div className="mb-16 bg-white rounded-xl overflow-hidden shadow-xl">
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[400px]">
                <Image src="/images/conference-room.png" alt="Conference Room Setup" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold text-white">Professional Meeting Spaces</h2>
                      <div className="flex items-center">
                        <div className="h-16 w-16 relative mr-2">
                          <Image src="/images/hydro-water.png" alt="Hydro Water" fill className="object-contain" />
                        </div>
                        <span className="text-white font-medium">Complimentary Hydro Water</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-green-700 mb-4">Modern Conference Facilities</h3>
                <p className="text-lg text-stone-700 mb-6">
                  Our conference rooms are designed to provide the perfect environment for productive meetings and
                  events. Each space features modern amenities, comfortable seating, and professional setups to
                  accommodate various meeting styles.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                    <span>U-shaped, boardroom, classroom, or theater-style seating arrangements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                    <span>High-quality projector and screen for presentations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                    <span>Complimentary Hydro water for all attendees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                    <span>Farm-to-table catering options available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-stone-800 mb-6">Conference Facilities</h2>
            <p className="text-lg text-stone-700 mb-6">
              Portion 85 offers a unique conferencing experience in a tranquil farm setting, just minutes away from the
              bustling cities of Johannesburg and Pretoria. Our versatile venues can accommodate various types of
              corporate events, from intimate strategy sessions to large conferences.
            </p>
            <p className="text-lg text-stone-700 mb-8">
              All our conference packages include state-of-the-art audio-visual equipment, high-speed Wi-Fi, and
              dedicated support staff to ensure your event runs smoothly. We also offer customized catering options
              featuring fresh ingredients from our farm.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                  <h3 className="text-xl font-bold text-stone-800">Venue Capacity</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Main Conference Hall:</span>
                    <span className="font-bold">Up to 150 people</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Executive Boardroom:</span>
                    <span className="font-bold">Up to 20 people</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Workshop Spaces:</span>
                    <span className="font-bold">Up to 50 people</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Outdoor Event Area:</span>
                    <span className="font-bold">Up to 200 people</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Coffee className="h-6 w-6 text-green-600" />
                  <h3 className="text-xl font-bold text-stone-800">Catering Options</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                    <span>Full-day conference packages with meals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                    <span>Half-day packages with refreshments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                    <span>Customized menu options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                    <span>Farm-to-table dining experiences</span>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-stone-800 mb-4">Facilities & Amenities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 bg-stone-50 rounded-lg">
                <Wifi className="h-5 w-5 text-green-600" />
                <span>High-speed Wi-Fi</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-stone-50 rounded-lg">
                <Monitor className="h-5 w-5 text-green-600" />
                <span>AV Equipment</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-stone-50 rounded-lg">
                <Utensils className="h-5 w-5 text-green-600" />
                <span>Catering Services</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-stone-50 rounded-lg">
                <Users className="h-5 w-5 text-green-600" />
                <span>Team Building</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-stone-50 rounded-lg">
                <Coffee className="h-5 w-5 text-green-600" />
                <span>Coffee Stations</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-stone-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Support Staff</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-lg sticky top-24">
              <h3 className="text-xl font-bold text-stone-800 mb-6">Request Information</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your phone"
                  />
                </div>

                <div>
                  <label htmlFor="event-type" className="block text-sm font-medium text-stone-700 mb-1">
                    Event Type
                  </label>
                  <select
                    id="event-type"
                    className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select event type</option>
                    <option value="conference">Conference</option>
                    <option value="meeting">Meeting</option>
                    <option value="workshop">Workshop</option>
                    <option value="team-building">Team Building</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-stone-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-stone-700 mb-1">
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    id="guests"
                    className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Estimated number of guests"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Tell us more about your event"
                  ></textarea>
                </div>

                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-stone-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-stone-800 mb-6 text-center">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-stone-700 mb-4">
                "We hosted our annual strategy session at Portion 85 and were impressed by the professional service and
                unique farm setting. The team-building activities were a highlight for our staff."
              </p>
              <p className="font-bold text-stone-800">Sarah Johnson</p>
              <p className="text-stone-600">HR Director, ABC Corporation</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-stone-700 mb-4">
                "The conference facilities at Portion 85 exceeded our expectations. The farm-to-table catering was
                exceptional, and our international guests loved the unique South African experience."
              </p>
              <p className="font-bold text-stone-800">Michael Thompson</p>
              <p className="text-stone-600">Events Manager, Global Tech</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-stone-700 mb-4">
                "We've held multiple workshops at Portion 85, and each time has been perfect. The peaceful environment
                away from the city helps our team focus, and the staff are always accommodating."
              </p>
              <p className="font-bold text-stone-800">Lisa Ndlovu</p>
              <p className="text-stone-600">CEO, Innovation Partners</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
