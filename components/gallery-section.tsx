"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import {Dialog, DialogContent, DialogClose, DialogTitle} from "@/components/ui/dialog"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"


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
    const sliderRef = useRef<HTMLDivElement>(null)
    const [isPaused, setIsPaused] = useState(false)
    const [selectedImage, setSelectedImage] = useState<number | null>(null)

    const duplicatedImages = [...galleryImages, ...galleryImages]


    // Reset the scroll position when it reaches the end
    useEffect(() => {
        const slider = sliderRef.current
        if (!slider) return

        const handleScroll = () => {
            const { scrollLeft, scrollWidth, clientWidth } = slider

            // When we've scrolled to the duplicate set, reset to the original set without animation
            if (scrollLeft >= scrollWidth / 2 - clientWidth) {
                slider.style.scrollBehavior = "auto"
                slider.scrollLeft = 0
                setTimeout(() => {
                    slider.style.scrollBehavior = "smooth"
                }, 50)
            }
        }

        slider.addEventListener("scroll", handleScroll)
        return () => {
            slider.removeEventListener("scroll", handleScroll)
        }
    }, [])

    // Auto-scroll animation
    useEffect(() => {
        const slider = sliderRef.current
        if (!slider) return

        let animationId: number

        const scroll = () => {
            if (isPaused) return

            slider.scrollLeft += 1
            animationId = requestAnimationFrame(scroll)
        }

        animationId = requestAnimationFrame(scroll)

        return () => {
            cancelAnimationFrame(animationId)
        }
    }, [isPaused])

    // Modal navigation
    const handlePrevious = () => {
        if (selectedImage === null) return
        const newIndex = selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
        setSelectedImage(newIndex)
    }

    const handleNext = () => {
        if (selectedImage === null) return
        const newIndex = (selectedImage + 1) % galleryImages.length
        setSelectedImage(newIndex)
    }

    // Handle keyboard navigation in modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedImage === null) return

            if (e.key === "ArrowLeft") {
                handlePrevious()
            } else if (e.key === "ArrowRight") {
                handleNext()
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [selectedImage])

    return (
        <section id="gallery" className="py-12 sm:py-16 bg-[#e8e8e8]/30">
            <Container>
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h2>
                    <p className="text-[#272424]/70 max-w-2xl mx-auto">{description}</p>
                </div>

                {/* Gallery Slider */}
                <div className="relative">
                    <div
                        ref={sliderRef}
                        className="flex overflow-x-auto pb-6 scrollbar-hide"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                            scrollBehavior: "smooth",
                        }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onTouchStart={() => setIsPaused(true)}
                        onTouchEnd={() => setIsPaused(false)}
                    >
                        <style jsx global>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>

                        {duplicatedImages.map((image, index) => (
                            <div
                                key={`${image.id}-${index}`}
                                className="flex-none w-[280px] sm:w-[calc(33.333%-16px)] md:w-[calc(25%-16px)] mx-2 first:ml-0 last:mr-0"
                            >
                                <button
                                    onClick={() => setSelectedImage(image.id - 1)} // Adjust for 0-based index
                                    className="relative block w-full aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group"
                                >
                                    <Image
                                        src={process.env.API_URL + image.image}
                                        alt={"alt"}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80">
                                        <div className="absolute bottom-0 left-0 p-4 text-white">
                                            <h3 className="text-lg font-semibold">{image.title}</h3>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>

            <Dialog open={selectedImage !== null} onOpenChange={(open) => !open && setSelectedImage(null)}>
                <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
                    <DialogTitle className="sr-only">
                        {selectedImage !== null ? galleryImages[selectedImage].title : "Project Image"}
                    </DialogTitle>
                    <div className="relative bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
                        {selectedImage !== null && (
                            <div className="relative aspect-video w-full">
                                <Image
                                    src={process.env.API_URL + galleryImages[selectedImage].image}
                                    alt={"alt"}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        )}

                        <div className="absolute top-2 right-2 z-10">
                            <DialogClose asChild>
                                <Button variant="outline" size="icon" className="rounded-full bg-white/80 hover:bg-white">
                                    <X className="h-4 w-4" />
                                    <span className="sr-only">Close</span>
                                </Button>
                            </DialogClose>
                        </div>

                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white z-10"
                            onClick={handlePrevious}
                        >
                            <ChevronLeft className="h-4 w-4" />
                            <span className="sr-only">Previous</span>
                        </Button>

                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white z-10"
                            onClick={handleNext}
                        >
                            <ChevronRight className="h-4 w-4" />
                            <span className="sr-only">Next</span>
                        </Button>

                        {selectedImage !== null && (
                            <div className="p-4 bg-white">
                                <h3 className="text-lg font-semibold">{galleryImages[selectedImage].title}</h3>
                            </div>
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </section>
    )
}


