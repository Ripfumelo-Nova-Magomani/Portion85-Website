import { FeatureCard } from "@/components/feature-card"
import { ImageGallery } from "@/components/image-gallery"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { EventCTA } from "@/components/event-cta"
import { AnimatedSection } from "@/components/animated-section"
import { Cake, Gift, Users, Clock, Camera, Heart } from "lucide-react"
import Image from "next/image"

export default function BirthdayPartiesPage() {
  const partyFeatures = [
    {
      icon: <Cake className="h-8 w-8 text-orange-500" />,
      title: "Custom Cake & Treats",
      description: "Delicious birthday cakes and farm-fresh treats prepared specially for your celebration.",
    },
    {
      icon: <Gift className="h-8 w-8 text-orange-500" />,
      title: "Party Decorations",
      description: "Colorful balloons, banners, and farm-themed decorations to make the day extra special.",
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Group Activities",
      description: "Fun farm activities including animal feeding, pony rides, and educational games.",
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: "3-Hour Package",
      description: "Complete party experience with activities, food, and celebration time.",
    },
    {
      icon: <Camera className="h-8 w-8 text-orange-500" />,
      title: "Photo Opportunities",
      description: "Beautiful farm settings perfect for memorable birthday photos with family and friends.",
    },
    {
      icon: <Heart className="h-8 w-8 text-orange-500" />,
      title: "Party Favors",
      description: "Special farm-themed party favors and small gifts for all the young guests.",
    },
  ]

  const galleryImages = [
    {
      src: "/placeholder.svg?height=400&width=600&text=Kids+Birthday+Party+with+Cake+Balloons+Farm+Setting",
      alt: "Kids birthday party with cake, balloons and farm setting",
      title: "Farm Birthday Celebration",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Colorful+Party+Setup+with+Balloons+Birthday+Cake",
      alt: "Colorful party setup with balloons and birthday cake",
      title: "Party Decorations",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Children+Celebrating+with+Party+Hats",
      alt: "Children celebrating with party hats",
      title: "Happy Celebrations",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Kids+Playing+Farm+Games+with+Balloons",
      alt: "Kids playing farm games with balloons",
      title: "Fun Farm Activities",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Birthday+Cake+Cutting+Ceremony",
      alt: "Birthday cake cutting ceremony",
      title: "Special Moments",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Children+Interacting+with+Farm+Animals+During+Celebration",
      alt: "Children interacting with farm animals during celebration",
      title: "Animal Encounters",
    },
  ]

  const testimonials = [
    {
      name: "Lisa Thompson",
      role: "Parent",
      content:
        "My daughter's 8th birthday party at Portion 85 was absolutely magical! The kids loved the animals, the cake was delicious, and the staff made everything perfect.",
      rating: 5,
    },
    {
      name: "David Martinez",
      role: "Father of Birthday Child",
      content:
        "Best birthday party venue ever! The combination of farm activities and traditional party fun was perfect. All the kids had an amazing time.",
      rating: 5,
    },
    {
      name: "Rachel Green",
      role: "Party Organizer",
      content:
        "The staff at Portion 85 made organizing my son's party so easy. Everything was taken care of, and the farm setting made it truly unique and memorable.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/70 to-orange-800/60 z-10"></div>
        <Image
          src="/placeholder.svg?height=800&width=1200&text=Kids+Birthday+Party+Cake+Balloons+Farm+Setting+Celebration"
          alt="Kids birthday party with cake, balloons and farm setting celebration"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl">
              <AnimatedSection direction="up" delay={0.2}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">Birthday Parties</h1>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.4}>
                <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-3xl">
                  Unforgettable Farm Birthday Celebrations
                </p>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.6}>
                <p className="text-lg text-white/80 mb-8 max-w-2xl">
                  Create magical memories with a unique farm birthday party! Combine traditional party fun with exciting
                  farm activities, delicious treats, and beautiful outdoor settings.
                </p>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.8}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg text-white">
                    <span className="text-2xl font-bold">R500</span>
                    <span className="text-white/80 ml-2">per child</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg text-white">
                    <Clock className="inline h-5 w-5 mr-2" />
                    <span>3 hours</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg text-white">
                    <Users className="inline h-5 w-5 mr-2" />
                    <span>Up to 15 children</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">What's Included in Your Party</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              We handle all the details so you can focus on celebrating! Our birthday party packages include everything
              needed for an unforgettable farm celebration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partyFeatures.map((feature, index) => (
              <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Birthday Party Gallery</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              See the joy and excitement of previous birthday celebrations at our farm - from cake cutting to animal
              encounters!
            </p>
          </div>

          <ImageGallery images={galleryImages} />
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Happy Parents & Children</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Read what families say about their birthday party experiences at Portion 85.
            </p>
          </div>

          <TestimonialSlider testimonials={testimonials} />
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-stone-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-8 text-center">
              Party Packages & Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-stone-800 mb-4">Standard Package</h3>
                <ul className="space-y-2 text-stone-600">
                  <li>• Birthday cake and candles</li>
                  <li>• Party decorations and balloons</li>
                  <li>• Farm animal interactions</li>
                  <li>• Pony rides (weather permitting)</li>
                  <li>• Party games and activities</li>
                  <li>• Party favors for all children</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-stone-800 mb-4">Premium Package</h3>
                <ul className="space-y-2 text-stone-600">
                  <li>• Everything in Standard Package</li>
                  <li>• Custom themed decorations</li>
                  <li>• Professional party host</li>
                  <li>• Extended farm tour</li>
                  <li>• Special birthday photo session</li>
                  <li>• Take-home farm products</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-stone-800 mb-4">Important Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-stone-700 mb-2">Age Groups</h4>
                  <p className="text-stone-600">Perfect for ages 4-12 years old</p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-700 mb-2">Booking</h4>
                  <p className="text-stone-600">Book at least 2 weeks in advance</p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-700 mb-2">Weather</h4>
                  <p className="text-stone-600">Indoor backup venue available</p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-700 mb-2">Supervision</h4>
                  <p className="text-stone-600">Adult supervision required</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <EventCTA
        title="Book Your Child's Dream Birthday Party"
        description="Give your child an unforgettable birthday celebration with farm fun, delicious treats, and magical memories that will last a lifetime."
        primaryAction="Book Party Now"
        secondaryAction="Customize Package"
      />
    </div>
  )
}
