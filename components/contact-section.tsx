import { Button } from "@/components/ui/button"
import { PhoneCall, Mail, Clock, MapPin } from "lucide-react"

export default function ContactSection() {
    return (
        <section className="py-12 sm:py-16 bg-white" id={"contact"}>
            <div>
                <div className="bg-[#e8e8e8] rounded-lg p-6 sm:p-8 md:p-12">
                    <div className="grid lg:grid-cols-2 gap-8 items-start max-w-[1600px] mx-auto">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
                            <p className="text-[#272424]/70 mb-6">
                                Contact us today for a free consultation and quote. Our expert team is ready to bring your vision to
                                life.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <PhoneCall className="h-5 w-5 text-[#d3a971]" />
                                    <span>(555) 123-4567</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="h-5 w-5 text-[#d3a971]" />
                                    <span>info@restoreelite.com</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock className="h-5 w-5 text-[#d3a971]" />
                                    <span>Mon-Fri: 8am-6pm, Sat: 9am-2pm</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="h-5 w-5 text-[#d3a971]" />
                                    <span>123 Renovation St, Craftsville, CA 90210</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Request a Free Quote</h3>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-3 py-2 border border-[#e8e8e8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d3a971]"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium mb-1">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            className="w-full px-3 py-2 border border-[#e8e8e8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d3a971]"
                                            placeholder="Your phone"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-3 py-2 border border-[#e8e8e8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d3a971]"
                                        placeholder="Your email"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium mb-1">
                                        Service Needed
                                    </label>
                                    <select
                                        id="service"
                                        className="w-full px-3 py-2 border border-[#e8e8e8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d3a971]"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="painting">Painting & Finishing</option>
                                        <option value="furniture">Furniture & Cabinetry</option>
                                        <option value="plumbing">Plumbing & Electrical</option>
                                        <option value="flooring">Flooring Solutions</option>
                                        <option value="walls">Wall & Ceiling Repairs</option>
                                        <option value="other">Other Services</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                                        Project Details
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full px-3 py-2 border border-[#e8e8e8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d3a971]"
                                        placeholder="Tell us about your project"
                                    ></textarea>
                                </div>
                                <Button className="w-full bg-[#d3a971] hover:bg-[#d3a971]/90 text-white">Submit Request</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

