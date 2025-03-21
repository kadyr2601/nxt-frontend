import Image from "next/image"
import { Shield, PenToolIcon as Tool, Clock, HeartHandshake, Sparkles, Hammer } from "lucide-react"
import image from "../public/whyUs.jpg"
import {Container} from "@/components/ui/container";


export default function WhyUsSection() {
    // Core reasons
    const reasons = [
        {
            icon: <Shield className="h-6 w-6 text-[#d3a971]" />,
            title: "Licensed & Insured",
            description: "Fully licensed professionals with comprehensive insurance coverage for your protection.",
        },
        {
            icon: <Tool className="h-6 w-6 text-[#d3a971]" />,
            title: "Master Craftsmen",
            description: "Skilled artisans with decades of experience in specialized restoration techniques.",
        },
        {
            icon: <Clock className="h-6 w-6 text-[#d3a971]" />,
            title: "Timely Completion",
            description: "Strict adherence to project timelines with detailed scheduling and planning.",
        },
        {
            icon: <HeartHandshake className="h-6 w-6 text-[#d3a971]" />,
            title: "Client-Focused Approach",
            description: "Your vision and satisfaction are our top priorities throughout the entire process.",
        },
        {
            icon: <Sparkles className="h-6 w-6 text-[#d3a971]" />,
            title: "Attention to Detail",
            description: "Meticulous focus on the finest details that make your space truly exceptional.",
        },
        {
            icon: <Hammer className="h-6 w-6 text-[#d3a971]" />,
            title: "Quality Materials",
            description: "We never compromise on materials, ensuring lasting beauty and durability.",
        },
    ]

    return (
        <section className="py-16 bg-white">
            <Container>
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left column - Image and headline */}
                    <div className="lg:w-5/12">
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#d3a971]/10 rounded-lg z-0"></div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#d3a971]/10 rounded-lg z-0"></div>

                            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl h-[500px]">
                                <Image
                                    src={image}
                                    alt="Expert Craftsmanship"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right column - Content */}
                    <div className="lg:w-7/12">
                        <div className="mb-8">
                            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Us</h2>
                            <div className="w-20 h-1 bg-[#d3a971] mb-6"></div>
                            <p className="text-lg text-[#272424]/70">
                                At RestoreElite, we combine traditional craftsmanship with modern techniques to deliver exceptional
                                renovation and restoration results. Our commitment to quality, transparency, and customer satisfaction
                                sets us apart in the industry.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                            {reasons.map((reason, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e8e8e8] flex items-center justify-center">
                                        {reason.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">{reason.title}</h3>
                                        <p className="text-sm text-[#272424]/70">{reason.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 p-4 bg-[#e8e8e8]/50 rounded-lg border-l-4 border-[#d3a971]">
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3].map((i) => (
                                        <div
                                            key={i}
                                            className="w-10 h-10 rounded-full bg-[#272424] flex items-center justify-center text-white text-xs font-bold ring-2 ring-white"
                                        >
                                            {String.fromCharCode(64 + i)}
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <p className="font-semibold">Trusted by homeowners and businesses since 2008</p>
                                    <p className="text-sm text-[#272424]/70">Over 500 successful projects and counting</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

