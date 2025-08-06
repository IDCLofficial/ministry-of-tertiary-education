import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import { TopHero } from "@/components/TopHero";
import ServicesGrid from "./ServiceCard";

const services = [
  {
    title: "ICT Infrastructure & Campus Upgrades",
    description:
      "Support for the modernization of infrastructure in institutions like IMSU, including labs, lecture theatres, and ICT facilities.",
  },
  {
    title: "Quality Assurance & Accreditation Liaison",
    description:
      "Facilitation with NUC/NBTE accreditation visits, curriculum reviews, and academic audit support for tertiary institutions.",
  },
  {
    title: "Skill Development & Technical Training",
    description:
      "Initiatives to equip students with vocational and technical skills through workshops, certification programs, and industry partnerships.",
  },
  {
    title: "University‑Industry Partnerships",
    description:
      "Promotion of collaborations between institutions and private sector partners for research, internships, and capacity building.",
  },
  {
    title: "Tertiary Career & Employment Support",
    description:
      "Career guidance, job placement services, and alumni networks to bridge academic programs with employment opportunities.",
  },
  {
    title: "Distance Learning & E‑Learning Platforms",
    description:
      "Implementation of remote learning systems, hybrid classroom support, and ICT‑enabled instruction to enhance reach and flexibility.",
  },
  {
    title: "Analytics & Policy Research Unit",
    description:
      "Data‑driven research to inform tertiary education policy, monitor outcomes, and guide decision‑making across institutions.",
  },
];

  
export default function Services() {
    return (
        <div className="h-screen bg-white">
            
            {/* Top Hero */}
            <TopHero
                ministryName="What we do"
                titleLabel="Services"
            />
           <ServicesGrid services={services} />
            
            {/* CTASection */}
            <CTASection
          heading="Partner with Us for a Safer Imo State"
          subtext="Join our mission to ensure the safety, security, and well-being of all residents through effective vigilance, community engagement, and rapid response."
          buttonLabel="Contact Homeland Security"
          buttonHref="/contact-us"
      />
            {/* Footer */}
            <Footer />
        </div>
    )
}