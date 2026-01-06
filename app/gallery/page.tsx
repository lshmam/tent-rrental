import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function GalleryPage() {
  const galleryImages = [
    {
      src: "/gallery-wedding-tent.jpg",
      alt: "Elegant wedding tent setup",
    },
    {
      src: "/gallery-reception.jpg",
      alt: "Beautiful reception with round tables",
    },
    {
      src: "/gallery-outdoor-event.jpg",
      alt: "Outdoor corporate event",
    },
    {
      src: "/gallery-chairs-setup.jpg",
      alt: "Elegant chair arrangements",
    },
    {
      src: "/gallery-lighting.jpg",
      alt: "Beautiful event lighting",
    },
    {
      src: "/gallery-table-setting.jpg",
      alt: "Professional table settings",
    },
    {
      src: "/gallery-stage.jpg",
      alt: "Event stage setup",
    },
    {
      src: "/gallery-dance-floor.jpg",
      alt: "Dance floor with lighting",
    },
    {
      src: "/gallery-cocktail-setup.jpg",
      alt: "Cocktail hour setup",
    },
    {
      src: "/gallery-tent-interior.jpg",
      alt: "Tent interior decoration",
    },
    {
      src: "/gallery-bar-setup.jpg",
      alt: "Bar area setup",
    },
    {
      src: "/gallery-ceremony.jpg",
      alt: "Ceremony setup",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-12 h-12 relative">
                <img src="/tent-house-logo.jpg" alt="Celebration Tent and Lighting House Inc." className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-xl text-primary">Celebration Tent & Lighting</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                HOME
              </Link>
              <Link
                href="/tents"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
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
              <Link href="/gallery" className="text-sm font-medium hover:text-primary transition-colors">
                GALLERY
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="pt-24 pb-12 bg-white">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-4">
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Browse through our collection of beautifully executed events. Get inspired for your upcoming celebration!
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
