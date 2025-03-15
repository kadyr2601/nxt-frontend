import Image from "next/image"

export default function PartnersSection() {
    return (
        <section className="py-16 bg-[#e8e8e8]/50 max-w-[1600px] mx-auto">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Companies We've Worked With</h2>
                    <p className="text-[#272424]/70 max-w-2xl mx-auto">
                        Trusted by leading businesses and organizations for quality renovation services.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="grayscale hover:grayscale-0 transition-all duration-300">
                            <Image
                                src={`/placeholder-logo.svg?text=Partner${i + 1}`}
                                alt={`Partner ${i + 1}`}
                                width={120}
                                height={60}
                                className="h-12 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

