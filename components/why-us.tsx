import Image from "next/image"
import {Container} from "@/components/ui/container";

interface WhyUsSectionProps {
    image: string,
    description: string,
    reasons: {
        title: string;
        description: string;
    }[];
}


export default function WhyUsSection({ image, description, reasons }: WhyUsSectionProps) {

    return (
        <section className="py-16 bg-white">
            <Container>
                <div className="flex flex-col lg:flex-row gap-12">
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
                                {description}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                            {reasons.map((reason, index) => (
                                <div key={index} className="flex gap-4">
                                    {/*<div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#e8e8e8] flex items-center justify-center">*/}
                                    {/*    {reason.icon}*/}
                                    {/*</div>*/}
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">{reason.title}</h3>
                                        <p className="text-sm text-[#272424]/70">{reason.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

