import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {Container} from "@/components/ui/container";

interface TestimonialProps {
    title: string;
    description: string;
    testimonials: {
        "id": number,
        "fullname": string,
        "position": string,
        "stars": number,
        "review": string,
        "image": string
    }[]
}

export default function TestimonialsSection({title, description, testimonials}: TestimonialProps) {
    // const testimonials = [
    //     {
    //         name: "Sarah Johnson",
    //         role: "Homeowner",
    //         quote:
    //             "The team at RestoreElite transformed our outdated kitchen into a modern, functional space. Their attention to detail and craftsmanship exceeded our expectations.",
    //     },
    //     {
    //         name: "Michael Chen",
    //         role: "Business Owner",
    //         quote:
    //             "We hired RestoreElite for our office renovation, and they delivered exceptional results on time and within budget. Their professionalism made the process stress-free.",
    //     },
    //     {
    //         name: "Emily Rodriguez",
    //         role: "Interior Designer",
    //         quote:
    //             "As a designer, I have high standards for the contractors I work with. RestoreElite consistently delivers quality work that brings my designs to life perfectly.",
    //     },
    // ]

    return (
        <section id="testimonials" className="py-16 bg-[#272424] text-white">
            <Container>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">{title}</h2>
                    <p className="text-white/70 max-w-2xl mx-auto">{description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, i) => (
                        <Card key={i} className="bg-[#272424] border border-white/20 text-white">
                            <CardHeader>
                                <div className="flex items-center gap-2 text-[#d3a971]">
                                    {[...Array(testimonial.stars)].map((_, i) => (
                                        <svg
                                            key={i}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-4 w-4"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    ))}
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="italic mb-4">"{testimonial.review}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-[#e8e8e8] flex items-center justify-center text-[#272424] font-bold">
                                        {testimonial.fullname.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-semibold">{testimonial.fullname}</p>
                                        <p className="text-sm text-white/70">{testimonial.position}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    )
}

