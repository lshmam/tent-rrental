import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronLeft } from "lucide-react"

export default function FAQsPage() {
  const faqs = [
    {
      question: "How far in advance should I book?",
      answer:
        "We recommend booking as early as possible, especially for peak season events (May-October). For popular dates, we suggest booking 6-12 months in advance. However, we often accommodate last-minute bookings based on availability.",
    },
    {
      question: "Do you deliver and set up?",
      answer:
        "Yes! We provide complete delivery, setup, and takedown services. Our professional team will arrive at your venue, set up all equipment, and return after your event to dismantle and remove everything. Setup is included in our rental prices.",
    },
    {
      question: "What is your service area?",
      answer:
        "We primarily serve Surrey, BC and surrounding areas including Vancouver, Burnaby, Richmond, and the Lower Mainland. For events outside our standard service area, additional delivery fees may apply. Contact us to discuss your specific location.",
    },
    {
      question: "What happens if it rains?",
      answer:
        "Our tents are designed to withstand various weather conditions including rain and wind. We ensure all tents are properly secured and weather-resistant. For severe weather forecasts, we can discuss additional reinforcement options.",
    },
    {
      question: "Can I rent items for multiple days?",
      answer:
        "We offer flexible rental periods. Standard rentals include setup the day before your event and pickup the day after. Extended rental periods can be arranged with adjusted pricing.",
    },
    {
      question: "Do you require a deposit?",
      answer:
        "Yes, we require a 50% deposit to secure your booking, with the remaining balance due 7 days before your event date. We accept various payment methods including credit cards, e-transfers, and checks.",
    },
    {
      question: "What if I need to cancel or change my reservation?",
      answer:
        "We understand plans can change. Cancellations made 30+ days before the event receive a full refund minus a 10% processing fee. Cancellations within 30 days may forfeit the deposit. We're happy to work with you on rescheduling when possible.",
    },
    {
      question: "Are tables and chairs included with tent rentals?",
      answer:
        "Tents, tables, and chairs are rented separately, allowing you to customize exactly what you need. We offer package deals that bundle multiple items at discounted rates. Contact us to create a custom package for your event.",
    },
    {
      question: "Do you provide linens and decorations?",
      answer:
        "Yes! We offer a wide selection of table linens, chair covers, and basic decorative elements. Colors and styles can be customized to match your event theme. These are available as add-ons to your rental package.",
    },
    {
      question: "How do I get a quote?",
      answer:
        "Getting a quote is easy! You can call us at (604) 750-9113, email ApnaTentandPartyRentals@gmail.com, or fill out our contact form. Provide details about your event date, location, guest count, and items needed for an accurate quote.",
    },
    {
      question: "Do you offer tours or consultations?",
      answer:
        "Yes! We welcome clients to visit our showroom by appointment to see our inventory in person. We also offer on-site consultations for larger events to assess the venue and discuss optimal layouts.",
    },
    {
      question: "What size tent do I need?",
      answer:
        "Tent size depends on your guest count and setup style. As a general guide: 150 sq ft per 10 guests for seated dining, 100 sq ft per 10 guests for cocktail style. We'll help determine the perfect size based on your specific needs.",
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
              <Link href="/faqs" className="text-sm font-medium hover:text-primary transition-colors">
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">Frequently Asked Questions</h1>
          <p className="text-white text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
            Find answers to common questions about our rental services. Can't find what you're looking for? Contact us directly!
          </p>
        </div>
      </section>

      {/* FAQs Accordion */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Our team is here to help! Contact us for personalized assistance with your event planning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:6047509113"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors"
            >
              Call (604) 750-9113
            </Link>
            <Link
              href="mailto:ApnaTentandPartyRentals@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-medium transition-colors"
            >
              Email Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
