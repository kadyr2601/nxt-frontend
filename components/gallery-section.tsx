import Image from "next/image"
import Link from "next/link"
import image from "../public/Selected.jpg"
import {Container} from "@/components/ui/container";


// Sample gallery data - in a real application, this would come from a CMS or API
const galleryImages = [
    {
        id: 1,
        src: image,
        alt: "Modern Kitchen Renovation",
        title: "Modern Kitchen Renovation",
    },
    {
        id: 2,
        src: image,
        alt: "Luxury Bathroom Remodel",
        title: "Luxury Bathroom Remodel",
    },
    {
        id: 3,
        src: image,
        alt: "Contemporary Living Room",
        title: "Contemporary Living Room",
    },
    {
        id: 4,
        src: image,
        alt: "Master Bedroom Renovation",
        title: "Master Bedroom Renovation",
    },
    {
        id: 5,
        src: image,
        alt: "Commercial Office Space",
        title: "Commercial Office Space",
    },
    {
        id: 6,
        src: image,
        alt: "Home Exterior Restoration",
        title: "Home Exterior Restoration",
    },
    {
        id: 7,
        src: image,
        alt: "Elegant Dining Room",
        title: "Elegant Dining Room",
    },
    {
        id: 8,
        src: image,
        alt: "Custom Hardwood Flooring",
        title: "Custom Hardwood Flooring",
    },
]

export default function GallerySection() {
    return (
        <section id="gallery" className="py-12 sm:py-16 bg-[#e8e8e8]/30 max-w-[1600px] mx-auto">
            <Container>
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">Project Gallery</h2>
                    <p className="text-[#272424]/70 max-w-2xl mx-auto">
                        Browse through our collection of completed renovation and restoration projects.
                    </p>
                </div>

                {/* Gallery grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {galleryImages.map((image) => (
                        <Link
                            key={image.id}
                            href={`#project-${image.id}`}
                            className="relative aspect-square overflow-hidden rounded-md cursor-pointer group"
                        >
                            <Image
                                src={image.src || "/placeholder.svg"}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80">
                                <div className="absolute bottom-0 left-0 p-4 text-white">
                                    <h3 className="text-lg font-semibold">{image.title}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    )
}

