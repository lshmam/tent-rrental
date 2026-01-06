import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, CheckCircle2, MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              {/* <div className="w-12 h-12 relative">
                <img src="/tent-house-logo.jpg" alt="Celebration Tent and Lighting House Inc." className="w-full h-full object-contain" />
              </div> */}
              <span className="font-bold text-xl text-primary">Celebration Tent & Lighting</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
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
              {/* <Link
                href="/gallery"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                GALLERY
              </Link> */}
            </div>

            {/* <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div> */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center mt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Home/home4-BzHD3TNY.webp')",
          }}
        >
          <div className="absolute inset-0 " />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
            TRULY
            <br />
            MEMORABLE
          </h1>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed text-pretty">
            Welcome to Celebration Tent and Lighting House Inc.! From elegant tents and stylish tables to comfy chairs and stunning stages, we've
            got you covered. Get ready to elevate your celebration to the next level with our top-notch rental services.
            Your dream event starts here!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
              <Link href="#contact">REQUEST BOOKING</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-orange-500 hover:bg-orange-600 text-white border-0 px-8"
            >
              <Link href="#contact">GET IN TOUCH</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">PRODUCTS</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Tents */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-white flex items-center justify-center p-8">
                <img src="/Home/tent-B-XoR1K7.png" alt="Tents" className="w-full h-full object-contain" />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">Tents</h3>
                <p className="text-sm text-muted-foreground mb-3">2 Products</p>
                <p className="text-sm">
                  Get ready to elevate your event with our rental tents. Experience the perfect blend of style and
                  professionalism.
                </p>
              </CardContent>
            </Card>

            {/* Chairs */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-white flex items-center justify-center p-8">
                <img src="/Home/chair-BU4z2K9L.png" alt="Chairs" className="w-full h-full object-contain" />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">Chairs</h3>
                <p className="text-sm text-muted-foreground mb-3">4 Products</p>
                <p className="text-sm">
                  Take a seat in style with our elegant chairs and enhance the sophistication and comfort.
                </p>
              </CardContent>
            </Card>

            {/* Tables */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-white flex items-center justify-center p-8">
                <img src="/Home/tables-BDhfs_wH.png" alt="Tables" className="w-full h-full object-contain" />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">Tables</h3>
                <p className="text-sm text-muted-foreground mb-3">4 Products</p>
                <p className="text-sm">
                  Gather around in style with our sleek tables and create a memorable evening with our elegant and
                  versatile options.
                </p>
              </CardContent>
            </Card>

            {/* Floors */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-white flex items-center justify-center p-8">
                <img src="/Home/floors-Enx67mKI.png" alt="Floors" className="w-full h-full object-contain" />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">Floors</h3>
                <p className="text-sm text-muted-foreground mb-3">3 Products</p>
                <p className="text-sm">Dance the night away on our stylish flooring options.</p>
              </CardContent>
            </Card>

            {/* Add-ons */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-white flex items-center justify-center p-8">
                <img src="/Home/bars-Cwrx78BG.png" alt="Add-ons" className="w-full h-full object-contain" />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">Add-ons</h3>
                <p className="text-sm text-muted-foreground mb-3">2 Products</p>
                <p className="text-sm">
                  We've got you covered with our fantastic add-ons to take your event to the next level.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews and About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Google Reviews */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Celebration Tent and Lighting House Inc.</h3>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Write a review
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mb-4">7809 122 St, Surrey, BC</p>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl font-bold">5.0</span>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">79 reviews</p>
                </div>
              </div>

              {/* Sample Review */}
              <Card className="mb-4">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                      D
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="font-semibold">Dalbir Bagha</p>
                          <p className="text-sm text-muted-foreground">4 reviews</p>
                        </div>
                      </div>
                      <div className="flex gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">a week ago</p>
                      <p className="text-sm leading-relaxed">
                        This company is great for all your event needs. They helped me out in a last minute crisis due
                        to the other tent company not showing up on time. The team was very professional and efficient.
                        They even went above and beyond by helping us setup as requested. The owners and team were very
                        pleasant to deal with. I recommend this company for your next event.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* About Us */}
            <div>
              <h3 className="text-2xl font-bold mb-6">ABOUT US</h3>

              <p className="text-muted-foreground leading-relaxed mb-8">
                At Celebration Tent and Lighting House Inc., we prioritize customer appreciation and offer top-notch service, quality tents, and
                competitive pricing. Whether it's a wedding, birthday, or corporate gathering, we ensure your event is
                unforgettable with our elegant marquees and sturdy frames. We believe in the finest tents and
                accessories, and genuinely care about making your celebration truly memorable. Contact us today!
              </p>

              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4">Why Choose Us?</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Family-Owned and Customer-Centric</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Attention to Detail</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Unmatched Quality and Reliability</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Excellent Customer Service</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Competitive Pricing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Wide Range of Options</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Experience and Expertise</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
          <Card>
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="(604) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="event" className="block text-sm font-medium mb-2">
                    Event Type
                  </label>
                  <select
                    id="event"
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option>Wedding</option>
                    <option>Corporate Event</option>
                    <option>Birthday Party</option>
                    <option>Festival</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Tell us about your event..."
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Celebration Tent & Lighting</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">7809 122 St, Surrey, BC</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">(604) 750-9113</span>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">ApnaTentandPartyRentals@gmail.com</span>
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Weddings
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Corporate
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Festivals
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    Film Production
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-400 transition-colors">
                    More
                  </Link>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/tents" className="hover:text-blue-400 transition-colors">
                    Tents
                  </Link>
                </li>
                <li>
                  <Link href="/chairs" className="hover:text-blue-400 transition-colors">
                    Chairs
                  </Link>
                </li>
                <li>
                  <Link href="/tables" className="hover:text-blue-400 transition-colors">
                    Tables
                  </Link>
                </li>
                <li>
                  <Link href="/floors" className="hover:text-blue-400 transition-colors">
                    Floors
                  </Link>
                </li>
                <li>
                  <Link href="/add-ons" className="hover:text-blue-400 transition-colors">
                    Stages
                  </Link>
                </li>
                <li>
                  <Link href="/add-ons" className="hover:text-blue-400 transition-colors">
                    Bars
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8 text-center text-sm">
            <p>© 2026 Celebration Tent and Lighting House Inc. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
