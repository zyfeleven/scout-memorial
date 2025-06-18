"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Heart, Camera, Calendar, MapPin } from "lucide-react"
import { useEffect, useState } from "react"

export default function ScoutMemorial() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Ensure all resources are loaded
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  // You can replace these with your actual photos of Scout
  const galleryImages = [
    { src: "/placeholder.svg?height=400&width=400", alt: "Scout playing in the park", caption: "Playing in the park" },
    { src: "/placeholder.svg?height=400&width=400", alt: "Scout sleeping peacefully", caption: "Peaceful nap time" },
    { src: "/placeholder.svg?height=400&width=400", alt: "Scout with favorite toy", caption: "With favorite toy" },
    { src: "/placeholder.svg?height=400&width=400", alt: "Scout on a hike", caption: "Adventure time" },
    { src: "/placeholder.svg?height=400&width=400", alt: "Scout at the beach", caption: "Beach day fun" },
    { src: "/placeholder.svg?height=400&width=400", alt: "Scout with family", caption: "Family portrait" },
    { src: "/placeholder.svg?height=400&width=400", alt: "Scout in the garden", caption: "Garden explorer" },
    { src: "/placeholder.svg?height=400&width=400", alt: "Scout's birthday", caption: "Birthday celebration" },
    { src: "/placeholder.svg?height=400&width=400", alt: "Scout running", caption: "Running free" },
  ]

  const memories = [
    {
      title: "First Day Home",
      date: "March 15, 2018",
      description: "The day Scout came into our lives and filled our home with joy and endless energy.",
    },
    {
      title: "Learning to Fetch",
      date: "April 2018",
      description:
        "Scout's determination to master the art of fetch, even if it meant bringing back sticks twice his size.",
    },
    {
      title: "Beach Adventures",
      date: "Summer 2019",
      description: "Scout's first time seeing the ocean - the pure excitement and joy in his eyes was unforgettable.",
    },
    {
      title: "Loyal Companion",
      date: "Every Day",
      description: "Through good days and bad, Scout was always there with a wagging tail and unconditional love.",
    },
  ]

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Scout's Memorial...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Badge variant="outline" className="mb-4 bg-white/50 border-amber-200">
              <Heart className="w-4 h-4 mr-2 text-rose-500" />
              Forever in Our Hearts
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-4">Scout</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              A loyal friend, a loving companion, a cherished family member
            </p>
            <div className="flex items-center justify-center gap-6 text-gray-500 text-lg">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>2018 - 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Forever Home</span>
              </div>
            </div>
          </div>

          {/* Main Memorial Photo */}
          <div className="relative max-w-md mx-auto mb-12">
            <div className="relative overflow-hidden rounded-full border-8 border-white shadow-2xl">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Scout - Memorial Photo"
                width={400}
                height={400}
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-white rounded-full p-3 shadow-lg">
                <Heart className="w-6 h-6 text-rose-500" />
              </div>
            </div>
          </div>

          <blockquote className="text-2xl md:text-3xl font-light text-gray-700 italic max-w-3xl mx-auto">
            "Until one has loved an animal, a part of one's soul remains unawakened."
            <footer className="text-lg text-gray-500 mt-4">— Anatole France</footer>
          </blockquote>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Cherished Memories</h2>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Camera className="w-5 h-5" />
              <p className="text-lg">A collection of our favorite moments together</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-center text-gray-700 font-medium">{image.caption}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Memories Timeline */}
      <section className="py-16 px-4 bg-white/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Special Moments</h2>
            <p className="text-lg text-gray-600">The memories that will live on forever</p>
          </div>

          <div className="space-y-8">
            {memories.map((memory, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-800">{memory.title}</h3>
                        <Badge variant="outline" className="text-sm">
                          {memory.date}
                        </Badge>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{memory.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <Heart className="w-8 h-8 text-rose-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Thank you, Scout</h3>
            <p className="text-gray-600 leading-relaxed">
              For the unconditional love, the endless joy, the loyal companionship, and the countless memories that will
              forever warm our hearts. You may be gone, but you will never be forgotten.
            </p>
          </div>
          <div className="text-sm text-gray-500">
            <p>With love and eternal gratitude</p>
            <p className="mt-2">💕 Scout's Family 💕</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
