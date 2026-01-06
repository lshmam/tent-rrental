import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"
import Header from "@/components/Header"

export default function AddOnsPage() {
  const products = [
    {
      name: "Bistro String Lights",
      description:
        "Create enchanting ambiance with warm Edison-style bulbs. Ideal for ceiling canopies, tree wrapping, and perimeter lighting.",
      image: "/Miscellaneous/stringlight.jpg",
      features: ["Warm glow", "Outdoor rated", "100ft strands", "Connectable"],
    },
    {
      name: "Uplighting Package",
      description:
        "Transform your venue with wireless LED uplights. Choose any color to match your theme. Creates dramatic atmosphere for photos and dancing.",
      image: "/Miscellaneous/whitelight.jpg",
      features: ["16M colors", "Wireless", "App control", "Battery powered"],
    },
    {
      name: "Rustic Bar Setup",
      description:
        "Fully decorated bar stations ready for your bartender. Includes back bar shelving, ice bins, and decorative elements.",
      image: "/Miscellaneous/bars.png",
      features: ["Turn-key", "Rustic or modern", "Ice included", "Glassware rental"],
    },
    {
      name: "Industrial Cooling Fans",
      description:
        "Beat the heat with our powerful drum fans. Essential for summer tent events. Quiet enough for conversation, strong enough for crowds.",
      image: "/Miscellaneous/fans.jpg",
      features: ["High CFM", "Low noise", "GFCI safe", "Misting option"],
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">Add-ons</h1>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
            Chandeliers, string lights, portable bars, and cooling fans. The finishing touches for your event.
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
