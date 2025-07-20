import { FeatureCard } from "@/components/feature-card"
import { ImageGallery } from "@/components/image-gallery"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { EventCTA } from "@/components/event-cta"
import { AnimatedSection } from "@/components/animated-section"
import { GraduationCap, Users, BookOpen, Clock, Leaf, Award } from "lucide-react"
import Image from "next/image"

export default function SchoolGroupsPage() {
  const educationalFeatures = [
    {
      icon: <GraduationCap className="h-8 w-8 text-orange-500" />,
      title: "Curriculum-Aligned Learning",
      description:
        "Educational programs designed to complement school curricula in life sciences, agriculture, and environmental studies.",
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Qualified Educators",
      description:
        "Experienced farm educators who specialize in teaching children about sustainable agriculture and animal care.",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-orange-500" />,
      title: "Hands-On Learning",
      description: "Interactive activities including planting, animal feeding, and practical farming demonstrations.",
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: "Flexible Duration",
      description: "Half-day or full-day programs available to suit your school's schedule and learning objectives.",
    },
    {
      icon: <Leaf className="h-8 w-8 text-orange-500" />,
      title: "Environmental Education",
      description:
        "Learn about sustainability, conservation, and the importance of protecting our natural environment.",
    },
    {
      icon: <Award className="h-8 w-8 text-orange-500" />,
      title: "Educational Materials",
      description: "Take-home worksheets, activity guides, and educational resources for continued classroom learning.",
    },
  ]

  const galleryImages = [
    {
      src: "/placeholder.svg?height=400&width=600&text=School+Children+in+Uniforms+Learning+at+Farm",
      alt: "School children in uniforms learning at farm",
      title: "Educational Farm Visits",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Kids+in+Uniform+Learning+to+Plant",
      alt: "Kids in uniform learning to plant",
      title: "Hands-on Planting",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Students+with+Teacher+Observing+Farm+Animals",
      alt: "Students with teacher observing farm animals",
      title: "Animal Education",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=School+Group+in+Uniforms+on+Educational+Tour",
      alt: "School group in uniforms on educational tour",
      title: "Guided Learning Tours",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Students+in+Hands+on+Farming+Activities",
      alt: "Students in hands-on farming activities",
      title: "Practical Learning",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Kids+in+Uniforms+Safely+Interacting+with+Animals",
      alt: "Kids in uniforms safely interacting with animals",
      title: "Safe Animal Interactions",
    },
  ]

  const testimonials = [
    {
      name: "Mrs. Sarah Adams",
      role: "Grade 4 Teacher",
      content:
        "Our students learned so much during their visit to Portion 85! The hands-on activities perfectly complemented our life sciences curriculum. Highly recommended!",
      rating: 5,
    },
    {
      name: "Mr. John Peterson",
      role: "School Principal",
      content:
        "Excellent educational experience! The farm educators were professional and engaging. Our students are still talking about their visit weeks later.",
      rating: 5,
    },
    {
      name: "Ms. Emily Roberts",
      role: "Environmental Science Teacher",
      content:
        "Perfect venue for environmental education. The sustainability practices demonstrated here gave our students real-world examples of conservation in action.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-green-800/60 z-10"></div>
        <Image
          src="/placeholder.svg?height=800&width=1200&text=School+Children+in+Uniforms+Learning+Farming+with+Teacher"
          alt="School children in uniforms learning farming with teacher"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl">
              <AnimatedSection direction="up" delay={0.2}>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">School Group Visits</h1>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.4}>
                <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-3xl">
                  Educational Farm Experiences for Students
                </p>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.6}>
                <p className="text-lg text-white/80 mb-8 max-w-2xl">
                  Bring learning to life with our comprehensive educational farm programs. Students will discover
                  sustainable agriculture, animal care, and environmental conservation through hands-on activities and
                  expert guidance.
                </p>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.8}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg text-white">
                    <span className="text-2xl font-bold">R100</span>
                    <span className="text-white/80 ml-2">per student</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg text-white">
                    <Clock className="inline h-5 w-5 mr-2" />
                    <span>Half or full day</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg text-white">
                    <Users className="inline h-5 w-5 mr-2" />
                    <span>Up to 30 students</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Educational Program Features</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Our school programs are designed to provide meaningful, curriculum-aligned learning experiences that
              inspire students to connect with agriculture and the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationalFeatures.map((feature, index) => (
              <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Student Learning Gallery</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              See students in action as they explore, learn, and discover the wonders of sustainable farming and animal
              care.
            </p>
          </div>

          <ImageGallery images={galleryImages} />
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">What Educators Say</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Hear from teachers and principals who have brought their students to Portion 85 for educational farm
              experiences.
            </p>
          </div>

          <TestimonialSlider testimonials={testimonials} />
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-stone-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-8 text-center">
              Program Options & Curriculum Links
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-stone-800 mb-4">Half-Day Program (3 hours)</h3>
                <ul className="space-y-2 text-stone-600">
                  <li>• Farm tour and orientation</li>
                  <li>• Animal feeding and interaction</li>
                  <li>• Basic planting activity</li>
                  <li>• Sustainability presentation</li>
                  <li>• Educational worksheets</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-stone-800 mb-4">Full-Day Program (6 hours)</h3>
                <ul className="space-y-2 text-stone-600">
                  <li>• Everything in half-day program</li>
                  <li>• Extended hands-on activities</li>
                  <li>• Composting workshop</li>
                  <li>• Farm-to-table lunch experience</li>
                  <li>• Group reflection and discussion</li>
                  <li>• Take-home farm products</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-stone-800 mb-4">Curriculum Alignment</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-stone-700 mb-2">Life Sciences</h4>
                  <ul className="text-stone-600 text-sm space-y-1">
                    <li>• Plant and animal life cycles</li>
                    <li>• Ecosystems and habitats</li>
                    <li>• Food chains and webs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-700 mb-2">Geography</h4>
                  <ul className="text-stone-600 text-sm space-y-1">
                    <li>• Land use and agriculture</li>
                    <li>• Weather and climate</li>
                    <li>• Natural resources</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-700 mb-2">Technology</h4>
                  <ul className="text-stone-600 text-sm space-y-1">
                    <li>• Sustainable technologies</li>
                    <li>• Problem-solving skills</li>
                    <li>• Innovation in agriculture</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <EventCTA
        title="Book Your School's Educational Farm Visit"
        description="Provide your students with an unforgettable learning experience that brings textbook concepts to life through hands-on farm activities."
        primaryAction="Book School Visit"
        secondaryAction="Download Info Pack"
      />
    </div>
  )
}
