import BenefitsSection from "@/components/BenefitsSection";
import BookingForm from "@/components/BookingForm";
import ClientsSection from "@/components/ClientsSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import FooterCTA from "@/components/FooterCTA";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import TrustedSolutions from "@/components/TrustedSolutions";

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustedSolutions />
      <ServicesSection />
      <BenefitsSection />
      <ClientsSection />
      <FeaturedProjects />
      <BookingForm />
      <FooterCTA />
    </div>
  );
}
