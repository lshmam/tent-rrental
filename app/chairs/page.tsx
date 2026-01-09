"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Phone } from "lucide-react"
import Header from "@/components/Header"

export default function ChairsPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const products = [
    {
      name: "White Folding Chairs",
      description:
        "Versatile and reliable folding chairs ideal for any event. Lightweight yet sturdy, these chairs are perfect for ceremonies, receptions, and outdoor gatherings.",
      image: "/Chairs/chair2.jpg",
      features: ["Easy to transport", "Weather resistant", "Guest comfort", "Quick setup"],
    },
    {
      name: "Garden Party Seating",
      description:
        "Outdoor-ready seating perfect for garden parties and patio celebrations. Durable construction handles any weather while maintaining style.",
      image: "/Chairs/home4-BzHD3TNY.webp",
      features: ["All-weather", "Rustic charm", "Comfortable", "Easy maintenance"],
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center mt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/wedding.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="bg-black/50 backdrop-blur-sm rounded-2xl px-8 py-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Chairs</h1>
            <p className="text-white text-lg md:text-xl max-w-3xl mx-auto">
              From folding chairs to elegant chiavari, find the perfect seating for your celebration.
            </p>
          </div>
        </div>
      </section>

      {/* Product Card with Carousel */}
      < div className="container mx-auto px-4 py-12" >
        <div className="max-w-2xl mx-auto">
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            {/* Carousel */}
            <div className="relative aspect-[4/3] bg-white">
              <img
                src={products[currentSlide].image}
                alt={products[currentSlide].name}
                className="w-full h-full object-contain p-4 transition-opacity duration-300"
              />

              {/* Carousel Navigation */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentSlide ? "bg-white scale-110" : "bg-white/50 hover:bg-white/75"
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-600">{products[currentSlide].name}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {products[currentSlide].description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {products[currentSlide].features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    {feature}
                  </div>
                ))}
              </div>

              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                <a href="tel:6047511404" className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call (604) 751-1404 for a Quote
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div >
    </div >
  )
}
