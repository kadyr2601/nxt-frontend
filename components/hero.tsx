'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Coffee, TrendingUp, Wallet } from "lucide-react";
import { Container } from "@/components/ui/container";

interface MainBannerProps {
    main_banner_image: string;
    exclusive_offers: {
        title: string;
        description: string;
        cards: {
            id: number;
            title: string;
            package_slogan: string;
            offer_consept: string;
            starting_price: number;
            attribute_one: string;
            attribute_two: string;
            attribute_three: string;
            attribute_four: string;
        }[];
    };
}

export default function Hero({ main_banner_image, exclusive_offers }: MainBannerProps) {
    const icons = [<Wallet />, <TrendingUp />, <Coffee />];

    const handleWhatsAppClick = (cardTitle: string) => {
        const message = encodeURIComponent(`Hello, I'm interested in ${cardTitle}.`);
        window.open(`https://wa.me/${+971547101170}?text=${message}`, "_blank");
    };

    return (
        <section className="relative">
            <div className="absolute inset-0 bg-black/60 md:block hidden z-10" />
            <div className="relative h-[500px] sm:h-[500px] md:h-[650px]">
                <Image
                    src={main_banner_image}
                    alt="Renovation Project"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60 sm:hidden" />
            </div>

            <Container className="sm:relative md:absolute inset-0 z-20 flex flex-col items-start justify-center gap-4 sm:py-10">
                <div className="text-center mb-10 mt-8 sm:mt-0 w-full">
                    <h2 className="text-black md:text-white text-3xl sm:text-4xl font-bold">
                        {exclusive_offers.title}
                    </h2>
                    <p className="text-black md:text-white/80 mt-4 max-w-2xl mx-auto text-lg">
                        {exclusive_offers.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 offer-cards">
                    {exclusive_offers.cards.map((card, index) => (
                        <div
                            key={card.id}
                            className={`rounded-xl overflow-hidden transition-all duration-300 ${
                                index === 1 ? "ring-2 ring-[#d3a971] transform md:-translate-y-4" : ""
                            }`}
                        >
                            <div
                                className={`p-6 ${
                                    index === 1
                                        ? "bg-gradient-to-br from-[#272424] to-[#3a3a3a] text-white"
                                        : "bg-gradient-to-br from-[#e8e8e8] to-white"
                                }`}
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className={`text-xl font-bold ${index === 1 ? "text-white" : "text-[#272424]"}`}>
                                            {card.title}
                                            <span className="block text-[#d3a971] font-medium text-lg mt-1">
                        {card.package_slogan}
                      </span>
                                        </h3>
                                        <p className={`text-sm mb-4 ${index === 1 ? "text-white/80" : "text-[#272424]/70"}`}>
                                            {card.offer_consept}
                                        </p>
                                    </div>
                                    <div
                                        className={`p-3 rounded-full ${
                                            index === 1 ? "bg-[#3a3a3a]" : "bg-white/80 shadow-sm"
                                        }`}
                                    >
                                        {icons[index]}
                                    </div>
                                </div>

                                <div className={`text-lg font-bold mb-4 ${index === 1 ? "text-[#d3a971]" : "text-[#272424]"}`}>
                                    Starting at ${card.starting_price}
                                </div>

                                <ul className="space-y-2 mb-6">
                                    {[card.attribute_one, card.attribute_two, card.attribute_three, card.attribute_four].map((attr, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <Check className="h-5 w-5 mt-0.5 text-[#d3a971]" />
                                            <span className={`text-sm ${index === 1 ? "text-white/90" : "text-[#272424]/80"}`}>
                        {attr}
                      </span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    onClick={() => handleWhatsAppClick(card.title)}
                                    className={`w-full ${
                                        index === 1
                                            ? "bg-[#d3a971] hover:bg-[#d3a971]/90 text-white"
                                            : "bg-[#272424] hover:bg-[#272424]/90 text-white"
                                    }`}
                                >
                                    Select Package
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>

                                {index === 1 && (
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
    );
}