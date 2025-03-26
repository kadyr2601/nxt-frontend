import Image from "next/image"
import Link from "next/link"
import {Container} from "@/components/ui/container";


interface GalleryProps {
    title: string;
    description: string;
    galleryImages: {
        id: number;
        image: string;
        title: string;
    }[]
}

export default function GallerySection({title, description, galleryImages}: GalleryProps) {
    return (
        <section id="gallery" className="py-12 sm:py-16 bg-[#e8e8e8]/30 max-w-[1600px] mx-auto">
            <Container>
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h2>
                    <p className="text-[#272424]/70 max-w-2xl mx-auto">{description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {galleryImages.map((image) => (
                        <Link
                            key={image.id}
                            href={`#project-${image.id}`}
                            className="relative aspect-square overflow-hidden rounded-md cursor-pointer group"
                        >
                            <Image
                                src={process.env.API_URL + image.image}
                                alt={"title"}
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

