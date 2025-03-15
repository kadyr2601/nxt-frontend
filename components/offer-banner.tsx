import { Button } from "@/components/ui/button"

export default function OfferBanner() {
    return (
        <section className="bg-[#272424] text-white py-4">
            <div className="max-w-[1600px] mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-[#d3a971] font-semibold">EXCLUSIVE OFFER:</span>
                        <span>Get 15% off your first renovation project</span>
                    </div>
                    <Button className="mt-2 md:mt-0 bg-[#d3a971] hover:bg-[#d3a971]/90 text-white">Claim Offer</Button>
                </div>
            </div>
        </section>
    )
}

