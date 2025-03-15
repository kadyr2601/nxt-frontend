import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-white">
            <div className="flex h-16 items-center justify-between py-4 max-w-[1600px] mx-auto">
                <div className="flex items-center gap-2">
                    <Image
                        src="/placeholder.svg?height=40&width=40"
                        alt="Restore Elite Logo"
                        width={40}
                        height={40}
                        className="h-10 w-10"
                    />
                    <span className="text-xl font-bold">NXT - Next Experience Transformation</span>
                </div>
                <nav className="hidden lg:flex items-center gap-6">
                    <Link href="#services" className="text-sm font-medium hover:text-[#d3a971] transition-colors">
                        Services
                    </Link>
                    <Link href="#projects" className="text-sm font-medium hover:text-[#d3a971] transition-colors">
                        Projects
                    </Link>
                    <Link href="#about" className="text-sm font-medium hover:text-[#d3a971] transition-colors">
                        About
                    </Link>
                    <Link href="#testimonials" className="text-sm font-medium hover:text-[#d3a971] transition-colors">
                        Testimonials
                    </Link>
                    <Link href="#contact" className="text-sm font-medium hover:text-[#d3a971] transition-colors">
                        Contact
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Button className="hidden lg:flex bg-[#272424] hover:bg-[#272424]/90">Get a Quote</Button>
                    <Button className="lg:hidden" variant="outline" size="icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6"
                        >
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>
            </div>
        </header>
    )
}

