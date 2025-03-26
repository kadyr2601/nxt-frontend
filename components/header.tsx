import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import logo from "../public/nxt.webp"
import {Container} from "@/components/ui/container";

export default function Header() {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-white">
            <Container className="flex h-16 items-center justify-between py-4">
                <div className="flex items-center gap-2">
                    <Image
                        src={logo}
                        alt="Restore Elite Logo"
                        width={100}
                        height={40}
                        className="h-10 w-20"
                    />
                    <span className="hidden lg:text-xl font-medium sm:text-xs">Next Experience Transformation</span>
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
                    <Link
                        href="#contact"
                        className="text-sm font-medium bg-[#272424] hover:bg-[#272424]/90 text-white py-2 px-4 rounded-md transition-colors"
                    >
                        Get a Quote
                    </Link>
                </div>
            </Container>
        </header>
    )
}

