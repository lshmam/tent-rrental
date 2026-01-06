import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"
import Header from "@/components/Header"

export default function FloorsPage() {
  const products = [
    {
      name: "LED Dance Floor",
      description:
        "Light up the night with our interactive LED dance floor. Customizable colors and patterns sync with your music for an unforgettable dance experience.",
      image: "/Floors/floor1.jpg",
      features: ["Color changing", "Music sync", "Wow factor", "Safe surface"],
    },
    {
      name: "Classic Wood Dance Floor",
      description:
        "Timeless oak-finish dance flooring that looks stunning in photos. Modular sections connect seamlessly for any size dance area.",
      image: "/Floors/floor2.jpg",
      features: ["Oak finish", "Any size", "Photo-ready", "Non-slip"],
    },
    {
      name: "Outdoor Ground Protection",
      description:
        "Keep feet clean and dry with our turf-protection flooring. Essential for lawn weddings and outdoor festivals. Protects both guests and grass.",
      image: "/Floors/floor3.jpg",
      features: ["Grass friendly", "Level surface", "Rain or shine", "ADA compliant"],
    },
    {
      name: "Checkered Dance Floor",
      description:
        "Retro vibes with our black and white checkered flooring. Perfect for themed parties, corporate events, and milestone celebrations.",
      image: "/Floors/floor4.jpg",
      features: ["Classic pattern", "High contrast", "Party perfect", "Easy clean"],
    },
    {
      name: "Portable Stage Platform",
      description:
        "Elevate your entertainment with professional staging. Adjustable heights from 8 inches to 4 feet. Perfect for bands, speakers, and ceremonies.",
      image: "/Floors/floor5.jpg",
      features: ["Adjustable height", "Skirting included", "Heavy-duty", "Step access"],
    },
  ]


  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center mt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Home/home4-BzHD3TNY.webp')",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">Floors</h1>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
            LED dance floors, classic wood, and outdoor ground protection. Get your guests moving in style.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="h-40 bg-gray-50 flex items-center justify-center p-2">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <CardContent className="p-3 flex flex-col flex-grow">
                <h3 className="text-sm font-bold mb-1 text-blue-600">{product.name}</h3>
                <p className="text-xs text-muted-foreground mb-2 line-clamp-2 flex-grow">{product.description}</p>
                <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs mt-auto">
                  Request Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
