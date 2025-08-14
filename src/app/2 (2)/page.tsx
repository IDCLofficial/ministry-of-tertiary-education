import EventsListSection from "./EventsListSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";

export default function EventsPage() {
  const Events = [
    {
      date: "SEPTEMBER 23–25, 2025",
      location: "UAES Campus, Umuagwo‑Ohaji, Imo State",
      title: "1st International Conference on Sustainable Development",
      description:
        "Hosted by UAES Umuagwo under the aegis of the Ministry of Tertiary and Technical Education, this conference focuses on bridging agriculture, environment, and technology for sustainable growth.",
      img: "/images/profu.png",
      details: `The University of Agriculture & Environmental Sciences will bring together policymakers, researchers, and industry leaders to discuss climate-smart farming practices, AI in environmental monitoring, and the socio-economic impacts of innovation.
      Registration opens soon and abstracts are accepted until 31 August 2025. :contentReference[oaicite:5]{index=5}`,
      dateString: "2025-09-23T09:00:00",
    },
  ];

  return (
    <div className="bg-white">
      <TopHero
        ministryName="Ministry of Tertiary & Technical Education"
        titleLabel="Events"
      />

      <EventsListSection events={Events} />

      <CTASection
        heading="Support Advancements in Tertiary Learning"
        subtext="Join us in fostering innovation, environmental resilience, and research-driven growth across tertiary institutions in Imo State."
        buttonLabel="Learn More"
        buttonHref="/events"
      />

      <Footer />
    </div>
  );
}
