import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function ServicesSection() {
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
    ]

    const additionalServices = [
        {
            title: "Flooring Solutions",
            description: "Expert installation of all floor types",
            features: [
                "Parquet, laminate, and tile installation",
                "Surface preparation and leveling",
                "Vinyl and specialty flooring",
            ],
        },
        {
            title: "Wall & Ceiling Repairs",
            description: "Complete surface restoration services",
            features: [
                "Surface leveling and plastering",
                "Drywall and decorative panels",
                "Custom plasterboard constructions",
            ],
        },
    ]

    return (
        <section id="services" className="py-12 sm:py-16 bg-white max-w-[1600px] mx-auto">
            <div className="">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Comprehensive Services</h2>
                    <p className="text-[#272424]/70 max-w-2xl mx-auto">
                        From minor repairs to complete renovations, our expert team delivers exceptional results for every project.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {serviceCards.map((service, index) => (
                        <Card key={index} className="border border-[#e8e8e8] shadow-sm hover:shadow-md transition-shadow">
                            <CardHeader>
                                <CardTitle>{service.title}</CardTitle>
                                <CardDescription>{service.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-[#d3a971] shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    {additionalServices.map((service, index) => (
                        <Card key={index} className="border border-[#e8e8e8] shadow-sm hover:shadow-md transition-shadow">
                            <CardHeader>
                                <CardTitle>{service.title}</CardTitle>
                                <CardDescription>{service.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCircle className="h-5 w-5 text-[#d3a971] shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
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
            </div>
        </section>
    )
}

