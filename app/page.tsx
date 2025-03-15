import Header from "@/components/header"
import Hero from "@/components/hero"
import OfferBanner from "@/components/offer-banner"
import ServicesSection from "@/components/services-section"
import PartnersSection from "@/components/partners-section"
import ProjectsSection from "@/components/projects-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function LandingPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <div className="mx-auto w-full">
                <Header />
                <main className="flex-1">
                    <Hero />
                    <OfferBanner />
                    <ServicesSection />
                    <PartnersSection />
                    <ProjectsSection />
                    <TestimonialsSection />
                    <ContactSection />
                </main>
                <Footer />
            </div>
        </div>
    )
}

