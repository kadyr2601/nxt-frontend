import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-[#272424] text-white py-12">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Image
                                src="/placeholder.svg?height=40&width=40"
                                alt="Restore Elite Logo"
                                width={40}
                                height={40}
                                className="h-10 w-10 bg-white rounded-md"
                            />
                            <span className="text-xl font-bold">NXT</span>
                        </div>
                        <p className="text-white/70 mb-4">
                            Professional restoration and renovation services with a commitment to quality and customer satisfaction.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d3a971] transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d3a971] transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d3a971] transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.298c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442v1.734h3.094V1.442H7.282z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-[#d3a971] transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-[#d3a971] transition-colors">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="hover:text-[#d3a971] transition-colors">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#testimonials" className="hover:text-[#d3a971] transition-colors">
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-[#d3a971] transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:text-[#d3a971] transition-colors">
                                    Painting & Finishing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#d3a971] transition-colors">
                                    Furniture & Cabinetry
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#d3a971] transition-colors">
                                    Plumbing & Electrical
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#d3a971] transition-colors">
                                    Flooring Solutions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#d3a971] transition-colors">
                                    Wall & Ceiling Repairs
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <p className="text-white/70 mb-2">123 Renovation St, Craftsville, CA 90210</p>
                        <p className="text-white/70 mb-2">info@restoreelite.com</p>
                        <p className="text-white/70">(555) 123-4567</p>
                    </div>
                </div>
                <div className="text-center mt-8">&copy; {new Date().getFullYear()} NXT. All rights reserved.</div>
            </div>
        </footer>
    )
}

