"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Phone } from "lucide-react"
import Header from "@/components/Header"

export default function LightingPage() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const images = [
        { src: "/lighting-1.jpeg", alt: "Professional event lighting setup" },
        { src: "/lighting-2.jpeg", alt: "Ambient lighting for celebrations" },
    ]

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
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
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Lighting</h1>
                        <p className="text-white text-lg md:text-xl max-w-3xl mx-auto">
                            Transform your venue with stunning lighting solutions. Create the perfect ambiance for any celebration.
                        </p>
                    </div>
                </div>
            </section >

            {/* Lighting Card with Carousel */}
            < div className="container mx-auto px-4 py-12" >
                <div className="max-w-2xl mx-auto">
                    <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                        {/* Carousel */}
                        <div className="relative aspect-[4/3] bg-gray-100">
                            <img
                                src={images[currentSlide].src}
                                alt={images[currentSlide].alt}
                                className="w-full h-full object-cover transition-opacity duration-300"
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
                                {images.map((_, index) => (
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
                            <h3 className="text-xl font-bold mb-2 text-blue-600">Professional Event Lighting</h3>
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                                Create the perfect atmosphere for your event with our professional lighting packages.
                                From elegant uplighting to dramatic string lights, we have options to suit every style and venue.
                            </p>

                            {/* Pricing Notice */}
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                                <p className="text-sm text-blue-800 font-medium mb-1">
                                    📍 Pricing Based on Square Footage
                                </p>
                                <p className="text-sm text-blue-700">
                                    Lighting prices depend on the square footage of your venue. Contact us for a personalized quote tailored to your space.
                                </p>
                            </div>

                            <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                <a href="tel:6047509113" className="flex items-center justify-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    Call (604) 750-9113 for a Quote
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div >
        </div >
    )
}
