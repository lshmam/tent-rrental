import Link from "next/link"
import { MapPin, Phone, Instagram, Facebook } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Celebration Tent & Lighting</h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-2">
                                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                <span className="text-sm">13062 61a Ave, Surrey, BC V3X 2G8</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-5 h-5 flex-shrink-0" />
                                <span className="text-sm">(604) 751-1404</span>
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
    )
}
