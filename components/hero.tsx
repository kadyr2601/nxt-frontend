import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
    return (
        <section className="relative">
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative h-[400px] sm:h-[500px] md:h-[600px]">
                <Image
                    src="/placeholder.svg?height=600&width=1600"
                    alt="Renovation Project"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="container absolute inset-0 z-20 flex flex-col items-start justify-center gap-4 text-white mx-auto">
                <div className="max-w-xl space-y-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        Designing Space Defining Excellence
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-white/90">
                        Professional repair and decoration of premises.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button className="bg-[#d3a971] hover:bg-[#d3a971]/90 text-white w-full sm:w-auto">
                            Explore Our Services
                        </Button>
                        <Button
                            variant="outline"
                            className="border-white text-black hover:bg-[#d3a971] hover:text-white w-full sm:w-auto"
                        >
                            View Recent Projects
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

