import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"
import Header from "@/components/Header"

export default function TablesPage() {
  const products = [
    {
      name: "60-Inch Round Tables",
      description:
        "The go-to choice for wedding receptions and banquets. Seats 8-10 guests comfortably. Linens available in white, ivory, and black.",
      image: "/Tables/table2.png",
      features: ["Seats 8-10 guests", "Linens included", "Stable base", "Easy setup"],
    },
    {
      name: "6-Foot Rectangular Tables",
      description:
        "Ideal for buffets, registration, and family-style dining. Strong construction supports heavy loads. Perfect for any event configuration.",
      image: "/Tables/table3.png",
      features: ["Heavy-duty", "Foldable", "Multi-purpose", "Scratch resistant"],
    },
    {
      name: "Cocktail Tables",
      description:
        "High-top tables perfect for mingling and appetizer stations. Available with black or white linens. Great for cocktail hours and networking events.",
      image: "/Tables/table1.png",
      features: ["Standing height", "Compact footprint", "Modern look", "Stable design"],
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">Tables</h1>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
            Round, rectangular, and cocktail tables with linens included. Quality rentals for any event size.
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
