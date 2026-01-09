"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

const products = [
    {
        name: "Tents",
        href: "/tents",
        image: "/Home/tent-B-XoR1K7.png",
        description: "Premium frame and marquee tents for any occasion. Weather-resistant and professionally installed.",
    },
    {
        name: "Chairs",
        href: "/chairs",
        image: "/Home/chair-BU4z2K9L.png",
        description: "Comfortable seating options from classic folding to elegant chiavari. Perfect for any guest count.",
    },
    {
        name: "Tables",
        href: "/tables",
        image: "/Home/tables-BDhfs_wH.png",
        description: "Round, rectangular, and cocktail tables available. Complete with linens for a polished look.",
    },
    {
        name: "Floors",
        href: "/floors",
        image: "/Home/floors-Enx67mKI.png",
        description: "Professional dance floors and staging platforms for memorable celebrations.",
    },
    {
        name: "Lighting",
        href: "/lighting",
        image: "/lighting-1.jpeg",
        description: "Transform your venue with stunning lighting solutions. Create the perfect ambiance for any celebration.",
    },
    {
        name: "Sound",
        href: "/sound",
        image: "/sound-system.jpeg",
        description: "Professional sound systems for crystal-clear audio at any event. From intimate gatherings to large celebrations.",
    },
    {
        name: "Fans",
        href: "/fans",
        image: "/Miscellaneous/fans.jpg",
        description: "Keep your guests comfortable with powerful industrial cooling fans. Perfect for summer events.",
    },
]

export default function ProductCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % products.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
    }

    const currentProduct = products[currentIndex]

    return (
        <div className="max-w-xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
                {/* Image Carousel */}
                <div className="relative aspect-square bg-white">
                    <Link href={currentProduct.href}>
                        <img
                            src={currentProduct.image}
                            alt={currentProduct.name}
                            className="w-full h-full object-contain p-8 transition-opacity duration-300"
                        />
                    </Link>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                        aria-label="Previous product"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-700" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                        aria-label="Next product"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-700" />
                    </button>

                    {/* Slide Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {products.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex
                                    ? "bg-blue-600 scale-110"
                                    : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                                aria-label={`Go to ${products[index].name}`}
                            />
                        ))}
                    </div>
                </div>

                <CardContent className="p-6 text-center">
                    <Link href={currentProduct.href}>
                        <h3 className="text-2xl font-bold mb-2 text-blue-600 hover:text-blue-700 transition-colors">
                            {currentProduct.name}
                        </h3>
                    </Link>
                    <p className="text-muted-foreground leading-relaxed">
                        {currentProduct.description}
                    </p>
                    <Link
                        href={currentProduct.href}
                        className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                        View Details →
                    </Link>
                </CardContent>
            </Card>
        </div>
    )
}
