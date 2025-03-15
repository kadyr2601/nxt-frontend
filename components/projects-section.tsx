import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ProjectsSection() {
    const projects = [
        "Modern Kitchen Renovation",
        "Luxury Bathroom Remodel",
        "Complete Home Restoration",
        "Commercial Office Renovation",
        "Historic Building Preservation",
        "Outdoor Living Space",
    ]

    return (
        <section id="projects" className="py-12 sm:py-16 bg-white max-w-[1600px] mx-auto">
            <div className="mx-auto">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Featured Projects</h2>
                    <p className="text-[#272424]/70 max-w-2xl mx-auto">
                        Explore our portfolio of successful renovations and transformations.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-lg">
                            <div className="aspect-square relative">
                                <Image
                                    src={`/placeholder.svg?height=400&width=400&text=Project`}
                                    alt={project}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80" />
                            <div className="absolute bottom-0 left-0 p-4 text-white">
                                <h3 className="text-xl font-semibold mb-2">{project}</h3>
                                <p className="text-sm text-white/80 mb-4">Complete renovation and modernization</p>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="text-black border-white hover:bg-white hover:text-[#272424]"
                                >
                                    View Details
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8 sm:mt-10">
                    <Button className="bg-[#272424] hover:bg-[#272424]/90">
                        View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    )
}

