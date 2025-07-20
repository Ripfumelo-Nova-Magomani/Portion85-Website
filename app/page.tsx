"use client"

import { ArrowRight, ChevronDown, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import FacilityCard from "@/components/facility-card"
import ServiceCard from "@/components/service-card"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { AnimatedContactForm } from "@/components/animated-contact-form"
import { FarmTourMap } from "@/components/farm-tour-map"
import { OptimizedImage } from "@/components/optimized-image"
import { LazySection } from "@/components/lazy-section"
import { Suspense } from "react"

// Loading fallback for lazy sections
const SectionSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-8 bg-stone-200 rounded w-1/3 mx-auto mb-4"></div>
    <div className="h-4 bg-stone-200 rounded w-2/3 mx-auto mb-8"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="h-64 bg-stone-200 rounded-lg"></div>
      ))}
    </div>
  </div>
)

const testimonials = [
  {
    quote:
      "The educational farm tour was eye-opening for our school group. The children learned so much about sustainable farming practices.",
    author: "Sarah Johnson",
    role: "School Teacher",
  },
  {
    quote:
      "The wine processing simulation was fascinating! It's rare to get such hands-on experience and insight into the process.",
    author: "Michael Thompson",
    role: "Wine Enthusiast",
  },
  {
    quote:
      "We held our company retreat at Portion 85 and it was perfect. Great facilities, beautiful surroundings, and excellent service.",
    author: "Lisa Ndlovu",
    role: "HR Director",
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section - Critical above-the-fold content */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0">
          <OptimizedImage
            src="/images/hero-bg.jpg"
            alt="Portion 85 Farm"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-start px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in">
            Explore{" "}
            <span className="text-white">
              Portion <span className="text-orange-400">85</span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-2xl mb-8 animate-fade-in-delay">
            Farming, Educational Tourism, Skills Development, and Business Growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
              Explore Our Facilities <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20"
            >
              Book A Visit
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <ChevronDown className="h-10 w-10 text-white" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-stone-50" id="about">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">ABOUT PORTION 85</h2>
              <p className="text-lg text-stone-700 mb-6">
                Portion 85 is a portion of Farm 385 in Knopjeslaagte in Centurion, Gauteng. It is in the same belt that
                splits the City of Johannesburg and the City of Tshwane. Historically these different portions of farms
                were under the same roof.
              </p>
              <p className="text-lg text-stone-700 mb-6">
                We have 25 different facilities that provide a variety of experiences and attraction to our visitors and
                guests, enabling them to build memories and satisfy a wide range of personal needs, from pleasure to a
                search for meaning.
              </p>
              <p className="text-lg text-stone-700">
                As a unique addition to the bouquet of experiences, we intend to offer a simulation of wine processing
                which will give our guests and visitors a live observation of wine processing including key steps like
                preparation (fruit de-stemming/crushing) to bottling.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl animate-slide-in-right">
              <OptimizedImage
                src="/images/about-image.jpg"
                alt="Portion 85 Landscape"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Farm Tour Map Section */}
      <LazySection className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">EXPLORE OUR FARM</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Take a virtual tour of Portion 85 and discover the various attractions and facilities we offer. Click on
              any location marker to learn more about that specific area.
            </p>
          </div>

          <div className="relative pt-16">
            <Suspense fallback={<div className="h-96 bg-stone-100 rounded-xl animate-pulse" />}>
              <FarmTourMap />
            </Suspense>
          </div>

          <div className="mt-12 text-center">
            <p className="text-stone-600 mb-4">Want to experience Portion 85 in person?</p>
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white"
              onClick={() => (window.location.href = "/reservation")}
            >
              Book Your Visit <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </LazySection>

      {/* Core Areas Section */}
      <LazySection className="py-20 bg-stone-50" id="services">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">OUR CORE AREAS</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Discover the diverse range of activities and services that make Portion 85 a unique destination for
              visitors and a hub for growth and development.
            </p>
          </div>

          <Suspense fallback={<SectionSkeleton />}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="FARMING"
                description="Sustainable agricultural practices focusing on local produce and environmental stewardship."
                icon="plant"
                color="green"
              />
              <ServiceCard
                title="EDUCATIONAL TOURISM"
                description="Tourism that promotes knowledge, enhances skills, educates and enables research opportunities."
                icon="book-open"
                color="blue"
              />
              <ServiceCard
                title="EDUCATION"
                description="Providing learning experiences for all ages through hands-on activities and structured programs."
                icon="graduation-cap"
                color="yellow"
              />
              <ServiceCard
                title="SKILLS DEVELOPMENT"
                description="Training programs designed to equip individuals with practical skills for personal and professional growth."
                icon="tool"
                color="orange"
              />
              <ServiceCard
                title="TRAINING"
                description="Specialized courses and workshops led by industry experts in various fields."
                icon="users"
                color="purple"
              />
              <ServiceCard
                title="JOB CREATION & BUSINESS DEVELOPMENT"
                description="Initiatives aimed at fostering entrepreneurship and creating employment opportunities."
                icon="briefcase"
                color="red"
              />
            </div>
          </Suspense>
        </div>
      </LazySection>

      {/* Facilities Section */}
      <LazySection className="py-20 bg-stone-100" id="facilities">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">OUR FACILITIES</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Explore our 25 different facilities that provide a variety of experiences and attractions for our
              visitors.
            </p>
          </div>

          <Suspense fallback={<SectionSkeleton />}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FacilityCard
                title="Wine Processing Simulation"
                description="Experience a live observation of wine processing from fruit preparation to bottling."
                imageSrc="/images/facility-1.jpg"
              />
              <FacilityCard
                title="Educational Farm Tours"
                description="Guided tours showcasing sustainable farming practices and agricultural innovations."
                imageSrc="/images/facility-2.jpg"
              />
              <FacilityCard
                title="Training Center"
                description="Modern facilities for workshops, seminars, and skills development programs."
                imageSrc="/images/facility-3.jpg"
              />
              <FacilityCard
                title="Outdoor Adventure Area"
                description="Exciting activities for all ages in a beautiful natural setting."
                imageSrc="/images/facility-4.jpg"
              />
              <FacilityCard
                title="Cultural Exhibition Space"
                description="Showcasing local heritage, arts, and traditions through interactive displays."
                imageSrc="/images/facility-5.jpg"
              />
              <FacilityCard
                title="Event Venue"
                description="Versatile spaces for private events, conferences, and celebrations."
                imageSrc="/images/facility-6.jpg"
              />
            </div>
          </Suspense>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
              View All Facilities <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </LazySection>

      {/* Testimonials Section */}
      <LazySection className="py-20 bg-green-700 text-white" id="testimonials">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">VISITOR EXPERIENCES</h2>
            <p className="text-lg max-w-3xl mx-auto opacity-90">
              Hear what our visitors have to say about their time at Portion 85.
            </p>
          </div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </LazySection>

      {/* Venue Hire Section */}
      <LazySection className="py-20 bg-white" id="venue">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 relative h-[400px] rounded-lg overflow-hidden shadow-xl animate-slide-in-left">
              <OptimizedImage
                src="/images/venue-hire.jpg"
                alt="Venue at Portion 85"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="md:w-1/2 animate-slide-in-right">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">VENUE HIRE</h2>
              <p className="text-lg text-stone-700 mb-6">
                We provide venue hire for private events in our beautiful and versatile spaces. Whether you're planning
                a corporate event, wedding, birthday celebration, or any special occasion, our facilities can
                accommodate your needs.
              </p>
              <p className="text-lg text-stone-700 mb-8">
                Our team will work with you to ensure your event is memorable and runs smoothly, with options for
                catering, decoration, and entertainment.
              </p>
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                Inquire About Venue Hire <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </LazySection>

      {/* Contact Section */}
      <LazySection className="py-20 bg-stone-100" id="contact">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">CONTACT US</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Get in touch with us to learn more about Portion 85 or to plan your visit.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedContactForm />

            <div className="flex flex-col gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-stone-800 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <p className="font-medium text-stone-800">Address</p>
                      <p className="text-stone-600">Portion 85 M26 Knopjeslaagte Centurion, 0014</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <p className="font-medium text-stone-800">Phone</p>
                      <p className="text-stone-600">Ms Siyanda Bani: 067 963 4795</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <p className="font-medium text-stone-800">Email</p>
                      <p className="text-stone-600">
                        <a href="mailto:info@portion85.co.za" className="hover:text-orange-500 transition-colors">
                          info@portion85.co.za
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg h-[300px] relative overflow-hidden">
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
          </div>
        </div>
      </LazySection>
    </main>
  )
}
