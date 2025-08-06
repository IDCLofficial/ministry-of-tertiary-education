import UnitsTabsSection from "./UnitsTabsSection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";
import CTASection from "@/components/CTASection";

const departmentsData = [
  {
    name: "Higher Education Department",
    image: "/images/imsu.png",
    description:
      "Oversees administration, funding, and accreditation of tertiary institutions including universities, polytechnics, and colleges in Imo State.",
  },
  {
    name: "Research, Innovation & ICT Department",
    image: "/images/ict.png",
    description:
      "Drives innovation by supporting research funding, digital literacy, and ICT infrastructure in tertiary institutions.",
  },
  {
    name: "Technical and Vocational Education Department",
    image: "/images/school2.jpg",
    description:
      "Promotes skill acquisition through technical colleges, vocational training centers, and curriculum reform aligned with global standards.",
  },
  {
    name: "Quality Assurance and Accreditation Unit",
    image: "/images/commisioner3.png",
    description:
      "Monitors and evaluates academic standards, ensuring compliance with regulatory bodies like NUC, NBTE, and TRCN.",
  },
  
  {
    name: "Scholarship, Grants & Student Affairs Department",
    image: "/images/prof.png",
    description:
      "Administers bursaries, oversees student welfare policies, and liaises with local and international scholarship bodies.",
  },
];

export default function UnitsPage() {
  return (
    <div className="bg-white">
      <TopHero
        ministryName="Ministry of Tertiary & Technical Education"
        titleLabel="Departments"
      />
      
      <UnitsTabsSection departments={departmentsData} />

      <CTASection
        heading="Partner with Us to Elevate Higher and Technical Education"
        subtext="Support our mission to empower youths through world-class learning, digital innovation, and technical skills development."
        buttonLabel="Reach Out to the Ministry"
        buttonHref="/contact-us"
      />
      <Footer />
    </div>
  );
}
