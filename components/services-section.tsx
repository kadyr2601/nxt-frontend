import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import {Container} from "@/components/ui/container";

interface ServicesPageProps {
    title: string,
    description: string,
    services: {
        title: string;
        description: string;
        attribute_one: string;
        attribute_two: string;
        attribute_three: string;
    }[];
}

export default function ServicesSection({ title, description, services }: ServicesPageProps) {

    const serviceCards = [
        {
            title: "Painting & Finishing",
            description: "Professional painting services for all surfaces",
            features: [
                "Interior and exterior wall painting",
                "Ceiling and facade painting",
                "Decorative finishes and textures",
            ],
        },
        {
            title: "Furniture & Cabinetry",
            description: "Custom installation and assembly services",
            features: [
                "Cabinet and furniture assembly",
                "Kitchen sets and built-in storage",
                "Custom shelving and organization",
            ],
        },
        {
            title: "Plumbing & Electrical",
            description: "Complete installation and repair services",
            features: [
                "Bathroom and kitchen plumbing",
                "Electrical wiring and lighting",
                "Fixture installation and upgrades",
            ],
        },
        {
            title: "Plumbing & Electrical",
            description: "Complete installation and repair services",
            features: [
                "Bathroom and kitchen plumbing",
                "Electrical wiring and lighting",
                "Fixture installation and upgrades",
            ],
        },
        {
            title: "Plumbing & Electrical",
            description: "Complete installation and repair services",
            features: [
                "Bathroom and kitchen plumbing",
                "Electrical wiring and lighting",
                "Fixture installation and upgrades",
            ],
        },
        {
            title: "Plumbing & Electrical",
            description: "Complete installation and repair services",
            features: [
                "Bathroom and kitchen plumbing",
                "Electrical wiring and lighting",
                "Fixture installation and upgrades",
            ],
        },
        {
            title: "Plumbing & Electrical",
            description: "Complete installation and repair services",
            features: [
                "Bathroom and kitchen plumbing",
                "Electrical wiring and lighting",
                "Fixture installation and upgrades",
            ],
        },
        {
            title: "Plumbing & Electrical",
            description: "Complete installation and repair services",
            features: [
                "Bathroom and kitchen plumbing",
                "Electrical wiring and lighting",
                "Fixture installation and upgrades",
            ],
        },
    ]

    return (
        <section id="services" className="py-12 sm:py-16 bg-white max-w-[1600px] mx-auto">
            <Container>
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h2>
                    <p className="text-[#272424]/70 max-w-2xl mx-auto">{description}</p>
                </div>

                <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <Card key={index} className="border border-[#e8e8e8] shadow-sm hover:shadow-md transition-shadow">
                            <CardHeader>
                                <CardTitle>{service.title}</CardTitle>
                                <CardDescription>{service.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-[#d3a971] shrink-0 mt-0.5" />
                                        <span>{service.attribute_one}</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-[#d3a971] shrink-0 mt-0.5" />
                                        <span>{service.attribute_two}</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="h-5 w-5 text-[#d3a971] shrink-0 mt-0.5" />
                                        <span>{service.attribute_three}</span>
                                    </li>
                                    {/*{service.features.map((feature, i) => (*/}
                                    {/*    <li key={i} className="flex items-start gap-2">*/}
                                    {/*        <CheckCircle className="h-5 w-5 text-[#d3a971] shrink-0 mt-0.5" />*/}
                                    {/*        <span>{feature}</span>*/}
                                    {/*    </li>*/}
                                    {/*))}*/}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" className="w-full">
                                    Learn More
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    )
}

