"use client"

import { ArrowRight, Users, Target, Heart, Lightbulb, Award, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { OptimizedImage } from "@/components/optimized-image"
import { LazySection } from "@/components/lazy-section"

const values = [
  {
    icon: Heart,
    title: "Community Focus",
    description:
      "We believe in building strong communities through education, skills development, and meaningful experiences that bring people together.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously explore new ways to combine traditional farming with modern educational tourism and business development.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work closely with schools, businesses, and individuals to create partnerships that benefit everyone involved.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, from our facilities to our programs and visitor experiences.",
  },
]

const milestones = [
  {
    year: "2020",
    title: "Vision Conceived",
    description:
      "The idea for Portion 85 was born from a desire to create a unique space that combines farming, education, and business development.",
  },
  {
    year: "2021",
    title: "Land Acquisition",
    description:
      "Secured Portion 85 of Farm 385 in Knopjeslaagte, Centurion, recognizing its strategic location and potential.",
  },
  {
    year: "2022",
    title: "Development Begins",
    description: "Started developing the 25 different facilities that would become the heart of our diverse offerings.",
  },
  {
    year: "2023",
    title: "First Visitors",
    description:
      "Welcomed our first educational tour groups and began hosting events, marking the beginning of our journey.",
  },
  {
    year: "2024",
    title: "Full Operations",
    description:
      "Achieved full operational capacity with all facilities open and a comprehensive program of activities and services.",
  },
  {
    year: "2025",
    title: "Expansion & Innovation",
    description:
      "Currently expanding our educational programs, developing new sustainable farming initiatives, launching advanced skills development courses, and building partnerships with universities and corporations for research and development projects.",
  },
]

const stats = [
  { number: "25", label: "Unique Facilities", icon: Award },
  { number: "1000+", label: "Visitors Annually", icon: Users },
  { number: "50+", label: "Training Programs", icon: Target },
  { number: "15", label: "Hectares of Land", icon: MapPin },
]

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
        <div className="absolute inset-0">
          <OptimizedImage
            src="/images/about-image.jpg"
            alt="About Portion 85"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-start px-4 md:px-6">
          <AnimatedSection direction="up" delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              About <span className="text-orange-400">Portion 85</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.4}>
            <p className="text-xl md:text-2xl text-white max-w-3xl mb-8">
              Where farming meets education, innovation meets tradition, and dreams become reality.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.6}>
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
              Discover Our Story <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection direction="up" className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">Our Story</h2>
              <p className="text-lg text-stone-600">
                The journey of Portion 85 is one of vision, dedication, and community impact.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <AnimatedSection direction="left">
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <OptimizedImage
                    src="/images/portion85-hero.jpg"
                    alt="Portion 85 Landscape"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-stone-800">A Vision Realized</h3>
                  <p className="text-lg text-stone-700">
                    Portion 85 is a portion of Farm 385 in Knopjeslaagte in Centurion, Gauteng. Located in the belt that
                    splits the City of Johannesburg and the City of Tshwane, our land carries the rich history of
                    farming traditions while embracing modern innovation.
                  </p>
                  <p className="text-lg text-stone-700">
                    What started as a vision to create something unique has evolved into a thriving hub that serves
                    multiple purposes: sustainable farming, educational tourism, skills development, and business
                    growth.
                  </p>
                  <p className="text-lg text-stone-700">
                    Today, we proudly offer 25 different facilities that provide a variety of experiences and
                    attractions to our visitors and guests, enabling them to build memories and satisfy a wide range of
                    personal needs.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-orange-600">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection direction="up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-lg text-orange-100 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and community development.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} direction="up" delay={index * 0.1}>
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="h-12 w-12 text-orange-200" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-orange-100 font-medium">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">Our Values</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our commitment to our community.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <value.icon className="h-6 w-6 text-orange-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-stone-800 mb-3">{value.title}</h3>
                      <p className="text-stone-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">Our Journey</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              From vision to reality - the key milestones that shaped Portion 85 into what it is today.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-orange-200"></div>

              {milestones.map((milestone, index) => (
                <AnimatedSection
                  key={milestone.year}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 0.2}
                >
                  <div
                    className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg z-10 ${
                        milestone.year === "2025" ? "bg-green-600 animate-pulse" : "bg-orange-600"
                      }`}
                    ></div>

                    {/* Content */}
                    <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                      <div
                        className={`p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${
                          milestone.year === "2025" ? "bg-green-50 border-l-4 border-green-600" : "bg-stone-50"
                        }`}
                      >
                        <div
                          className={`text-2xl font-bold mb-2 ${
                            milestone.year === "2025" ? "text-green-600" : "text-orange-600"
                          }`}
                        >
                          {milestone.year}
                          {milestone.year === "2025" && <span className="text-sm ml-2 text-green-500">(Current)</span>}
                        </div>
                        <h3 className="text-xl font-bold text-stone-800 mb-3">{milestone.title}</h3>
                        <p className="text-stone-600 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection direction="left">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                <p className="text-lg leading-relaxed opacity-90">
                  To create a unique destination that combines sustainable farming practices with educational tourism,
                  skills development, and business growth opportunities, while building memories and providing
                  meaningful experiences for all our visitors.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
                <p className="text-lg leading-relaxed opacity-90">
                  To be the leading agri-tourism destination in South Africa, recognized for our innovative approach to
                  education, community development, and sustainable farming practices that inspire and empower
                  individuals and communities.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <LazySection className="py-20 bg-stone-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedSection direction="up">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">Ready to Experience Portion 85?</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-8">
              Join us on this incredible journey of learning, growth, and discovery. Whether you're interested in
              educational tours, skills development, or hosting your next event, we're here to make it memorable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                Book Your Visit <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-stone-300 text-stone-700 hover:bg-stone-200 bg-transparent"
              >
                Contact Us
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </LazySection>
    </main>
  )
}
