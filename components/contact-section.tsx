"use client";
import { Button } from "@/components/ui/button";
import { PhoneCall, Mail, Clock, MapPin } from "lucide-react";
import { useState } from "react";

interface ContactSectionProps {
    title: string;
    description: string;
    phone: number;
    email: string;
    workingHours: string;
    address: string;
    services: {
        id: number;
        service: string;
    }[];
}

export default function ContactSection({
                                           title,
                                           description,
                                           phone,
                                           email,
                                           workingHours,
                                           address,
                                           services,
                                       }: ContactSectionProps) {
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formElement = e.currentTarget;
        const formData = new FormData(formElement);

        const response = await fetch(`${process.env.API_URL}/api/v1/feedback`, {
            method: "POST",
            body: JSON.stringify({
                name: formData.get("name"),
                phone: formData.get("phone"),
                email: formData.get("email"),
                service: formData.get("service"),
                message: formData.get("message"),
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.status === 201) {
            setSuccess(true);
            formElement.reset();
        }
    };


    return (
        <section className="py-12 sm:py-16 bg-white" id={"contact"}>
            <div>
                <div className="bg-[#e8e8e8] rounded-lg p-6 sm:p-8 md:p-12">
                    <div className="grid lg:grid-cols-2 gap-8 items-start max-w-[1600px] mx-auto">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h2>
                            <p className="text-[#272424]/70 mb-6">{description}</p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <PhoneCall className="h-5 w-5 text-[#d3a971]" />
                                    <span>{phone}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="h-5 w-5 text-[#d3a971]" />
                                    <span>{email}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock className="h-5 w-5 text-[#d3a971]" />
                                    <span>{workingHours}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="h-5 w-5 text-[#d3a971]" />
                                    <span>{address}</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Request a Free Quote</h3>

                            {success && (
                                <div className="mb-4 p-3 rounded bg-green-100 text-green-700">
                                    Your request has been submitted successfully!
                                </div>
                            )}

                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            required
                                            className="w-full px-3 py-2 border border-[#e8e8e8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d3a971]"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium mb-1">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            required
                                            className="w-full px-3 py-2 border border-[#e8e8e8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d3a971]"
                                            placeholder="Your phone"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        className="w-full px-3 py-2 border border-[#e8e8e8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d3a971]"
                                        placeholder="Your email"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium mb-1">
                                        Service Needed
                                    </label>
                                    <select
                                        name="service"
                                        id="service"
                                        required
                                        className="w-full px-3 py-2 border border-[#e8e8e8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d3a971]"
                                    >
                                        <option value="">Select a service</option>
                                        {services.map((service) => (
                                            <option key={service.id} value={service.service}>
                                                {service.service}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                                        Project Details
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        required
                                        rows={4}
                                        className="w-full px-3 py-2 border border-[#e8e8e8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d3a971]"
                                        placeholder="Tell us about your project"
                                    ></textarea>
                                </div>
                                <Button type="submit" className="w-full bg-[#d3a971] hover:bg-[#d3a971]/90 text-white">
                                    Submit Request
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
