import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft } from "lucide-react"

export default function TentsPage() {
  const products = [
    {
      name: "Clear Span Frame Tent",
      description:
        "No center poles means 100% usable space. Our frame tents are engineered for stability and can be installed on any surface including concrete, grass, or decking.",
      image: "/Tents/frametent.jpg",
      features: ["Pole-free interior", "All surfaces", "10x10 to 40x80", "Wind rated"],
    },
    {
      name: "High Peak Marquee Tent",
      description:
        "Dramatic peaks and elegant draping create show-stopping venues. Popular for weddings and galas. Available with optional sidewalls and lighting.",
      image: "/Tents/marqueetent.jpg",
      features: ["Dramatic silhouette", "Sidewalls available", "Lighting ready", "Quick install"],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-bold text-xl text-primary">Celebration Tent & Lighting</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                HOME
              </Link>
              <Link href="/tents" className="text-sm font-medium hover:text-primary transition-colors">
                TENTS
              </Link>
              <Link
                href="/chairs"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                CHAIRS
              </Link>
              <Link
                href="/tables"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                TABLES
              </Link>
              <Link
                href="/floors"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                FLOORS
              </Link>
              <Link
                href="/add-ons"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                ADD-ONS
              </Link>
              <Link
                href="/faqs"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                FAQS
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center mt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Home/home4-BzHD3TNY.webp')",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">Tents</h1>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
            Weather-proof structures professionally installed on any surface. From intimate gatherings to grand celebrations.
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
