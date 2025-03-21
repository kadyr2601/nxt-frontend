import Header from "@/components/header"
import Hero from "@/components/hero"
import OfferBanner from "@/components/offer-banner"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import GallerySection from "@/components/gallery-section";
import WhyUsSection from "@/components/why-us";


export default function LandingPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <div className="mx-auto w-full">
                <Header />
                <main className="flex-1">
                    <Hero />
                    <OfferBanner />
                    <WhyUsSection />
                    <ServicesSection />
                    <ProjectsSection />
                    <GallerySection />
                    <TestimonialsSection />
                    <ContactSection />
                </main>
                <Footer />
            </div>
        </div>
    )
}

