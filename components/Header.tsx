"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="font-bold text-lg md:text-xl text-primary">Celebration Tent & Lighting</span>
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
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2 rounded-md hover:bg-gray-100"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile menu dropdown */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <div className="flex flex-col space-y-3">
                            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                                HOME
                            </Link>
                            <Link href="/tents" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                                TENTS
                            </Link>
                            <Link href="/chairs" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                                CHAIRS
                            </Link>
                            <Link href="/tables" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                                TABLES
                            </Link>
                            <Link href="/floors" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                                FLOORS
                            </Link>
                            <Link href="/add-ons" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                                ADD-ONS
                            </Link>
                            <Link href="/faqs" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                                FAQS
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
