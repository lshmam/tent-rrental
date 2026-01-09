import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, CheckCircle2 } from "lucide-react"
import Header from "@/components/Header"
import ProductCarousel from "@/components/ProductCarousel"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center mt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/wedding.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/5" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl px-8 py-12 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
              CREATE
              <br />
              UNFORGETTABLE MOMENTS
            </h1>
            <p className="text-white text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed text-pretty">
              Transform any venue into a stunning celebration space. From premium tent structures and elegant furniture
              to ambient lighting and decor, we bring your vision to life. Serving Surrey and the Greater Vancouver area
              with exceptional event rentals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                <a href="tel:6047509113" className="flex items-center gap-2">
                  📞 Call (604) 750-9113
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">PRODUCTS</h2>
          <ProductCarousel />
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
                <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <a href="https://www.google.com/search?sca_esv=7158150de61051ff&rlz=1C1RXQR_enCA1114CA1114&sxsrf=AE3TifPsF33zTjGlUiG4_CP4MeGABDiWFA:1767733986363&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E8VI_8JpSRrJm5-0RRH7NradLPloWQhKSOShHV8TY2VoBcaV-nkHUsaY7JN8ZyXrGdF1TMYb1Pu_3Ry__8QhKeBhPqeSGjl1KaHnj9KMbwYBMwekI9zzil_PfuSd_Z1VzzDjkUE%3D&q=CELEBRATION+TENT+AND+LIGHTING+HOUSE+INC.+Reviews&sa=X&ved=2ahUKEwj18MGi6veRAxUbIjQIHRoeJcAQ0bkNegQIHBAD&biw=1396&bih=632&dpr=1.38#lrd=0x5485dbc6ea3a76ef:0x2ebc1cb20c981a3b,3,,,," target="_blank" rel="noopener noreferrer">
                    Write a review
                  </a>
                </Button>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl font-bold">5.0</span>
                <div>
                  <div className="flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  {/* <p className="text-sm text-muted-foreground">79 reviews</p> */}
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
                          <p className="font-semibold">Parmod Kumar</p>
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
                        Excellent service from start to finish! The team was professional, friendly, and very easy to work with. All our questions were answered quickly, and they offered great options at reasonable prices. Everything was set up on time and looked amazing.

                        Big thanks to Celebration Tent & Lighting House for making our event memorable. Highly recommended!
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
                Celebration Tent and Lighting House Inc. is your trusted partner for exceptional event rentals in Surrey
                and the Greater Vancouver area. We take pride in delivering premium quality equipment, reliable service,
                and competitive rates. From intimate gatherings to grand celebrations, our experienced team ensures
                every detail is perfect. Let us help you create moments that last a lifetime.
              </p>

              <div className="mb-8">
                <h4 className="text-xl font-semibold mb-4">Why Choose Us?</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Locally Owned & Operated</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Same-Day Setup Available</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Premium Quality Equipment</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">5-Star Customer Reviews</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Transparent Pricing</span>
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
      {/* <section id="contact" className="py-16 bg-gray-50">
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
      </section> */}
    </div>
  )
}
