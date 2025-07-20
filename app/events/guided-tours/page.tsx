import { FeatureCard } from "@/components/feature-card"
import { ImageGallery } from "@/components/image-gallery"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { EventCTA } from "@/components/event-cta"
import { AnimatedSection } from "@/components/animated-section"
import { Clock, Users, MapPin, Star, Camera, Leaf } from "lucide-react"
import Image from "next/image"

export default function GuidedToursPage() {
  const tourFeatures = [
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Expert Guides",
      description:
        "Professional farm guides with extensive knowledge of sustainable farming practices and local agriculture.",
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: "2-Hour Experience",
      description: "Comprehensive tour covering all farm areas including crops, livestock, and processing facilities.",
    },
    {
      icon: <MapPin className="h-8 w-8 text-orange-500" />,
      title: "Complete Farm Tour",
      description:
        "Visit vegetable gardens, animal enclosures, greenhouse facilities, and learn about farm operations.",
    },
    {
      icon: <Camera className="h-8 w-8 text-orange-500" />,
      title: "Photo Opportunities",
      description: "Capture memorable moments with farm animals and scenic agricultural landscapes.",
    },
    {
      icon: <Leaf className="h-8 w-8 text-orange-500" />,
      title: "Sustainable Practices",
      description: "Learn about organic farming methods, composting, and environmentally friendly agriculture.",
    },
    {
      icon: <Star className="h-8 w-8 text-orange-500" />,
      title: "Interactive Learning",
      description: "Hands-on demonstrations of farming techniques and direct interaction with farm animals.",
    },
  ]

  const galleryImages = [
    {
      src: "/placeholder.svg?height=400&width=600&text=Professional+Guide+Leading+Farm+Tour+Group",
      alt: "Professional guide leading farm tour group",
      title: "Expert Farm Guides",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Tour+Guide+Leading+Visitors+Through+Vineyard",
      alt: "Tour guide leading visitors through vineyard",
      title: "Vineyard Tours",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Guide+Explaining+Farming+Techniques+to+Group",
      alt: "Guide explaining farming techniques to group",
      title: "Educational Demonstrations",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Educational+Wine+Processing+Demonstrations",
      alt: "Educational wine processing demonstrations",
      title: "Processing Facilities",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Farm+Tour+Group+with+Animals",
      alt: "Farm tour group with animals",
      title: "Animal Interactions",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Interactive+Farming+Demonstrations",
      alt: "Interactive farming demonstrations",
      title: "Hands-on Learning",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Nature Enthusiast",
      content:
        "The guided tour was absolutely fantastic! Our guide was so knowledgeable and passionate about sustainable farming. We learned so much about organic practices.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Family Visitor",
      content:
        "Perfect family activity! The kids loved seeing the animals and learning about where food comes from. The guide made it educational and fun for all ages.",
      rating: 5,
    },
    {
      name: "Emma Williams",
      role: "Agricultural Student",
      content:
        "As an agriculture student, this tour exceeded my expectations. The practical demonstrations and expert insights were invaluable for my studies.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
        <Image
          src="/placeholder.svg?height=800&width=1200&text=Professional+Guide+Leading+Farm+Tour+Group+Through+Vineyard"
          alt="Professional guide leading farm tour group through vineyard"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl">
              <AnimatedSection direction="up" delay={0.2}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">Guided Farm Tours</h1>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.4}>
                <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-3xl">
                  Discover the Art of Sustainable Agriculture with Expert Guides
                </p>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.6}>
                <p className="text-lg text-white/80 mb-8 max-w-2xl">
                  Join our knowledgeable guides for an immersive journey through Portion 85's sustainable farming
                  operations. Learn about organic practices, meet our animals, and discover the art of modern
                  agriculture.
                </p>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.8}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg text-white">
                    <span className="text-2xl font-bold">R250</span>
                    <span className="text-white/80 ml-2">per person</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg text-white">
                    <Clock className="inline h-5 w-5 mr-2" />
                    <span>2 hours</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg text-white">
                    <Users className="inline h-5 w-5 mr-2" />
                    <span>Up to 15 people</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">What Makes Our Tours Special</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Experience authentic farm life with our expert guides who bring years of agricultural knowledge and
              passion for sustainable farming to every tour.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourFeatures.map((feature, index) => (
              <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Tour Highlights Gallery</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              See what awaits you on our guided farm tours - from hands-on learning experiences to beautiful
              agricultural landscapes.
            </p>
          </div>

          <ImageGallery images={galleryImages} />
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">What Our Visitors Say</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Hear from families, students, and nature enthusiasts who have experienced our guided farm tours.
            </p>
          </div>

          <TestimonialSlider testimonials={testimonials} />
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-stone-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-8 text-center">
              Tour Information & Schedule
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-stone-800 mb-4">Tour Schedule</h3>
                <ul className="space-y-2 text-stone-600">
                  <li>
                    <strong>Morning Tours:</strong> 9:00 AM - 11:00 AM
                  </li>
                  <li>
                    <strong>Afternoon Tours:</strong> 2:00 PM - 4:00 PM
                  </li>
                  <li>
                    <strong>Weekend Tours:</strong> 10:00 AM - 12:00 PM
                  </li>
                  <li>
                    <strong>Group Tours:</strong> By appointment
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-stone-800 mb-4">What to Bring</h3>
                <ul className="space-y-2 text-stone-600">
                  <li>• Comfortable walking shoes</li>
                  <li>• Sun hat and sunscreen</li>
                  <li>• Camera for photos</li>
                  <li>• Water bottle</li>
                  <li>• Weather-appropriate clothing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <EventCTA
        title="Book Your Guided Farm Tour"
        description="Join us for an educational and inspiring journey through sustainable agriculture. Perfect for families, students, and anyone interested in farming."
        primaryAction="Book Tour Now"
        secondaryAction="Ask Questions"
      />
    </div>
  )
}
