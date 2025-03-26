'use client'
import { Button } from "@/components/ui/button"
import {Container} from "@/components/ui/container";

interface OfferBannerProps {
    offerText: string;
}

export default function OfferBanner({offerText}: OfferBannerProps) {

    const handleWhatsAppClick = (cardTitle: string) => {
        const message = encodeURIComponent(`Hello, I'm interested in ${cardTitle}.`);
        window.open(`https://wa.me/${+971547101170}?text=${message}`, "_blank");
    };

    return (
        <section className="bg-[#272424] text-white py-4">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-[#d3a971] font-semibold">EXCLUSIVE OFFER:</span>
                        <span>{offerText}</span>
                    </div>
                    <Button
                        onClick={() => handleWhatsAppClick(offerText)}
                        className="mt-2 md:mt-0 bg-[#d3a971] hover:bg-[#d3a971]/90 text-white"
                    >
                        Claim Offer
                    </Button>
                </div>
            </Container>
        </section>
    )
}

