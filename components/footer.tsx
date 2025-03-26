import {Container} from "@/components/ui/container";

interface FooterProps {
    address: string;
    phone: string;
    email: string;
    services: {
        id: number;
        service: string;
    }[]
}

export default function Footer({ address, phone, email, services }: FooterProps) {
    return (
        <footer className="bg-[#272424] text-white py-12">
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xl font-bold">NXT</span>
                        </div>
                        <p className="text-white/70 mb-4">
                            A company's operations and decision-making are likely to be guided by a mission statement or values. In addition, its unique culture or work environment may set it apart from other companies in the same industry.
                        </p>
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
                            {
                                services.map((service) => (
                                    <li key={service.id}>
                                        <a href="#" className="hover:text-[#d3a971] transition-colors">
                                            {service.service}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <p className="text-white/70 mb-2">{address}</p>
                        <p className="text-white/70 mb-2">{email}</p>
                        <p className="text-white/70">{phone}</p>
                    </div>
                </div>
                <div className="text-center mt-8">&copy; {new Date().getFullYear()} NXT. All rights reserved.</div>
            </Container>
        </footer>
    )
}

