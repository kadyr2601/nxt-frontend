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


async function getHomePage() {

    const res = await fetch(`${process.env.API_URL}/api/v1/homepage`, {cache: 'no-store'});
    if (!res.ok) return null;
    return await res.json()
}

export const metadata = {
    title: "NXT - Next Experience Transformation",
    description: "We offer full-scale turnkey renovation services for all types of properties — from apartments and houses to offices and commercial spaces. Our team handles every aspect of the project with precision and care, delivering high-quality results on time and within budget.",
};

export default async function LandingPage() {

    const homePage = await getHomePage();

    return (
        <div className="flex min-h-screen flex-col">
            <div className="mx-auto w-full">
                <Header />
                <main className="flex-1">
                    <Hero
                        main_banner_image={process.env.API_URL + homePage.main_banner_image}
                        exclusive_offers={homePage.exclusive_offers}
                    />
                    <OfferBanner offerText={homePage.exclusive_offer_banner_title}/>
                    <WhyUsSection
                        image={process.env.API_URL + homePage.why_choose_us_image}
                        description={homePage.why_choose_us_description}
                        reasons={homePage.advantages}
                    />
                    <ServicesSection
                        title={homePage.services_title}
                        description={homePage.services_description}
                        services={homePage.services}
                    />
                    <ProjectsSection
                        title={homePage.projects_title}
                        description={homePage.projects_description}
                        projects={homePage.projects}
                    />
                    <GallerySection
                        title={homePage.gallery_title}
                        description={homePage.gallery_description}
                        galleryImages={homePage.gallery}
                    />
                    <TestimonialsSection
                        title={homePage.testimonials_title}
                        description={homePage.testimonials_description}
                        testimonials={homePage.testimonials}
                    />
                    <ContactSection
                        title={homePage.contacts_title}
                        description={homePage.contacts_description}
                        phone={homePage.contacts_phone}
                        email={homePage.contacts_email}
                        workingHours={homePage.contacts_working_hours}
                        address={homePage.contacts_address}
                        services={homePage.contact_services}
                    />
                </main>
                <Footer
                    address={homePage.contacts_address}
                    phone={homePage.contacts_phone}
                    email={homePage.contacts_email}
                    services={homePage.contact_services}
                />
            </div>
        </div>
    )
}

