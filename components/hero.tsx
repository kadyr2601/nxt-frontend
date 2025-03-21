import Image from "next/image"
import { Button } from "@/components/ui/button"
import {ArrowRight, Check, Coffee, TrendingUp, Wallet} from "lucide-react";
import mainBanner from "../public/mainBan.jpg"
import {Container} from "@/components/ui/container";



export default function Hero() {

    const packageOffers = [
        {
            icon: <Wallet className="h-8 w-8 text-[#d3a971]" />,
            title: "Package 1",
            subtitle: "Save Money",
            description: "Budget-friendly renovation solutions without compromising on quality",
            price: "Starting at $5,000",
            features: [
                "Cost-effective material options",
                "Energy-efficient upgrades",
                "Phased renovation planning",
                "Flexible payment options",
            ],
            color: "bg-gradient-to-br from-[#e8e8e8] to-white",
        },
        {
            icon: <TrendingUp className="h-8 w-8 text-[#d3a971]" />,
            title: "Package 2",
            subtitle: "Earn Money",
            description: "Strategic renovations designed to increase your property's market value",
            price: "Starting at $10,000",
            features: [
                "High-ROI improvement focus",
                "Property value assessment",
                "Market trend analysis",
                "Buyer-attractive features",
            ],
            color: "bg-gradient-to-br from-[#272424] to-[#3a3a3a]",
            featured: true,
        },
        {
            icon: <Coffee className="h-8 w-8 text-[#d3a971]" />,
            title: "Package 3",
            subtitle: "Stay Free",
            description: "Hassle-free renovation experience with premium concierge service",
            price: "Starting at $15,000",
            features: [
                "Full project management",
                "Premium material selection",
                "Temporary housing arrangements",
                "Post-renovation cleaning",
            ],
            color: "bg-gradient-to-br from-[#e8e8e8] to-white",
        },
    ]

    return (
        <section className="relative">
            <div className="absolute inset-0 bg-black/60 md:block hidden z-10" />
                <div className="relative h-[500px] sm:h-[500px] md:h-[650px]">
                  <Image
                        src={mainBanner}
                     alt="Renovation Project"
                      fill
                     className="object-cover "
                      priority
                 />
                    <div className="absolute inset-0 bg-black/60 sm:hidden" />
                </div>
                <Container className="sm:relative md:absolute inset-0 z-20 flex flex-col items-start justify-center gap-4 sm:py-10">

                    <div className=" text-center mb-10 mt-8 sm:mt-0 w-full">
                        <h2 className="text-black md:text-[#fff] text-3xl sm:text-4xl font-bold">Choose Your Renovation Package</h2>
                        <p className="text-black md:text-[#fff]/80 mt-4 max-w-2xl mx-auto text-lg">
                            Select the perfect renovation solution that fits your needs and budget
                        </p>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 offer-cards">
                        {packageOffers.map((offer, index) => (
                            <div key={index} className={`rounded-xl overflow-hidden transition-all duration-300 ${
                                    offer.featured ? "ring-2 ring-[#d3a971] transform md:-translate-y-4" : ""
                                }`} >
                                <div className={`${offer.color} p-6 ${offer.featured ? "text-white" : ""}`}>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className={`text-xl font-bold ${offer.featured ? "text-white" : "text-[#272424]"}`}>
                                                {offer.title}
                                                <span className="block text-[#d3a971] font-medium text-lg mt-1">{offer.subtitle}</span>
                                            </h3>
                                            <p className={`text-sm mb-4 ${offer.featured ? "text-white/80" : "text-[#272424]/70"}`}>
                                                {offer.description}
                                            </p>
                                        </div>
                                        <div className={`p-3 rounded-full ${offer.featured ? "bg-[#3a3a3a]" : "bg-white/80 shadow-sm"}`}>
                                            {offer.icon}
                                        </div>
                                    </div>

                                    <div className={`text-lg font-bold mb-4 ${offer.featured ? "text-[#d3a971]" : "text-[#272424]"}`}>
                                        {offer.price}
                                    </div>

                                    <ul className="space-y-2 mb-6">
                                        {offer.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <Check className={`h-5 w-5 mt-0.5 ${offer.featured ? "text-[#d3a971]" : "text-[#d3a971]"}`} />
                                                <span className={`text-sm ${offer.featured ? "text-white/90" : "text-[#272424]/80"}`}>
                        {feature}
                      </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button
                                        className={`w-full ${
                                            offer.featured
                                                ? "bg-[#d3a971] hover:bg-[#d3a971]/90 text-white"
                                                : "bg-[#272424] hover:bg-[#272424]/90 text-white"
                                        }`}
                                    >
                                        Select Package
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>

                                    {offer.featured && (
                                        <div className="text-center mt-3">
                                            <span className="text-xs text-white/80">Most Popular Choice</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
            </Container>
        </section>
    )
}