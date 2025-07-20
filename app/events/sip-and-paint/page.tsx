import { FeatureCard } from "@/components/feature-card"
import { ImageGallery } from "@/components/image-gallery"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { EventCTA } from "@/components/event-cta"
import { AnimatedSection } from "@/components/animated-section"
import { Palette, Wine, Users, Clock, Camera, Heart } from "lucide-react"
import Image from "next/image"

export default function SipAndPaintPage() {
  const paintingFeatures = [
    {
      icon: <Palette className="h-8 w-8 text-orange-500" />,
      title: "All Art Supplies Included",
      description: "Professional canvases, acrylic paints, brushes, and easels provided for every participant.",
    },
    {
      icon: <Wine className="h-8 w-8 text-orange-500" />,
      title: "Wine & Refreshments",
      description: "Selection of local wines, non-alcoholic beverages, and light snacks served throughout the session.",
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Expert Art Instruction",
      description: "Professional artist guides you step-by-step through creating your masterpiece.",
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: "3-Hour Experience",
      description: "Relaxed pace allowing time for creativity, socializing, and enjoying the farm atmosphere.",
    },
    {
      icon: <Camera className="h-8 w-8 text-orange-500" />,
      title: "Beautiful Farm Setting",
      description: "Paint surrounded by scenic farm landscapes and peaceful natural environments.",
    },
    {
      icon: <Heart className="h-8 w-8 text-orange-500" />,
      title: "Take Home Your Art",
      description: "Keep your completed painting as a memorable souvenir of your creative farm experience.",
    },
  ]

  const galleryImages = [
    {
      src: "/placeholder.svg?height=400&width=600&text=Sip+and+Paint+Event+with+Canvas+Wine+Wooden+Tables",
      alt: "Sip and paint event with canvas, wine, wooden tables",
      title: "Creative Art Sessions",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=People+Painting+on+Canvas+with+Wine+Glasses",
      alt: "People painting on canvas with wine glasses",
      title: "Artistic Expression",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Art+Session+with+Wine+and+Wooden+Tables",
      alt: "Art session with wine and wooden tables",
      title: "Relaxed Atmosphere",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Group+Painting+Activity+with+Wine",
      alt: "Group painting activity with wine",
      title: "Social Creativity",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Canvas+Painting+Setup+with+Wine+Tasting",
      alt: "Canvas painting setup with wine tasting",
      title: "Perfect Setup",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Creative+Art+Workshop+Wine+Experience",
      alt: "Creative art workshop wine experience",
      title: "Professional Equipment",
    },
  ]

  const testimonials = [
    {
      name: "Amanda Foster",
      role: "Art Enthusiast",
      content:
        "What a wonderful way to spend an afternoon! The combination of painting, wine, and the beautiful farm setting made for a perfect creative experience. I loved every minute!",
      rating: 5,
    },
    {
      name: "Jennifer Clark",
      role: "Group Organizer",
      content:
        "Organized this for my book club and it was a huge hit! The instructor was patient and encouraging, and the wine selection was excellent. We'll definitely be back!",
      rating: 5,
    },
    {
      name: "Michelle Taylor",
      role: "First-time Painter",
      content:
        "I was nervous about painting, but the instructor made it so easy and fun! The relaxed atmosphere and beautiful surroundings helped me create something I'm actually proud of.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-pink-800/60 z-10"></div>
        <Image
          src="/placeholder.svg?height=800&width=1200&text=Sip+Paint+Event+People+Canvas+Wine+Wooden+Tables+Farm"
          alt="Sip and paint event with people painting on canvas with wine glasses on wooden tables at farm"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl">
              <AnimatedSection direction="up" delay={0.2}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">Sip & Paint Events</h1>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.4}>
                <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-3xl">
                  Creative Art Sessions with Wine & Farm Views
                </p>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.6}>
                <p className="text-lg text-white/80 mb-8 max-w-2xl">
                  Unleash your creativity in our unique sip and paint sessions! Enjoy wine, create beautiful art, and
                  relax in the peaceful farm setting with friends or fellow art enthusiasts.
                </p>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.8}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg text-white">
                    <span className="text-2xl font-bold">R350</span>
                    <span className="text-white/80 ml-2">per person</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg text-white">
                    <Clock className="inline h-5 w-5 mr-2" />
                    <span>3 hours</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg text-white">
                    <Users className="inline h-5 w-5 mr-2" />
                    <span>Up to 20 people</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">What's Included in Your Experience</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Everything you need for a perfect creative afternoon - from professional art supplies to delicious
              refreshments in a beautiful farm setting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paintingFeatures.map((feature, index) => (
              <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Sip & Paint Gallery</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              See the creative atmosphere and beautiful artworks created during our sip and paint sessions at the farm.
            </p>
          </div>

          <ImageGallery images={galleryImages} />
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">What Our Artists Say</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Hear from participants who have enjoyed our creative sip and paint experiences at Portion 85.
            </p>
          </div>

          <TestimonialSlider testimonials={testimonials} />
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-stone-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-8 text-center">
              Session Information & Themes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-stone-800 mb-4">Session Schedule</h3>
                <ul className="space-y-2 text-stone-600">
                  <li>
                    <strong>Friday Evenings:</strong> 6:00 PM - 9:00 PM
                  </li>
                  <li>
                    <strong>Saturday Afternoons:</strong> 2:00 PM - 5:00 PM
                  </li>
                  <li>
                    <strong>Sunday Sessions:</strong> 11:00 AM - 2:00 PM
                  </li>
                  <li>
                    <strong>Private Groups:</strong> By appointment
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-stone-800 mb-4">Popular Themes</h3>
                <ul className="space-y-2 text-stone-600">
                  <li>• Farm landscape paintings</li>
                  <li>• Sunset over the fields</li>
                  <li>• Farm animal portraits</li>
                  <li>• Seasonal nature scenes</li>
                  <li>• Abstract farm-inspired art</li>
                  <li>• Custom themes for groups</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-stone-800 mb-4">What to Expect</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-stone-700 mb-2">For Beginners</h4>
                  <p className="text-stone-600">
                    No experience needed! Our instructors guide you through every step, making art accessible and
                    enjoyable for everyone.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-700 mb-2">Group Events</h4>
                  <p className="text-stone-600">
                    Perfect for date nights, girls' nights out, team building, or celebrating special occasions with
                    friends.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-700 mb-2">Age Requirements</h4>
                  <p className="text-stone-600">
                    18+ for wine sessions, family-friendly non-alcoholic sessions available on request.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-700 mb-2">What to Bring</h4>
                  <p className="text-stone-600">
                    Just yourself! We provide everything needed. Wear clothes you don't mind getting paint on.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <EventCTA
        title="Book Your Creative Sip & Paint Experience"
        description="Join us for a relaxing and creative afternoon combining art, wine, and the beautiful farm atmosphere. Perfect for all skill levels!"
        primaryAction="Book Session Now"
        secondaryAction="Private Group Booking"
      />
    </div>
  )
}
