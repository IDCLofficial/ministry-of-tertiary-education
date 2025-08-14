import EventsListSection from "./EventsListSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";

export default function EventsPage() {
  return (
    <div className="bg-white">
      {/* top hero */}
      <TopHero ministryName="TRANSFORMING TERTIARY EDUCATION" titleLabel="Events" />
      <EventsListSection />
      <CTASection
          heading="Join Us in Transforming Tertiary Education"
          subtext="Be part of our mission."
          buttonLabel="Contact Us"
          buttonHref="/contact-us"
      />
      <Footer />
    </div>
  );
}
