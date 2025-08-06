import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";
import ProjectCard from "@/app/projects/ProjectCard";
import type { Project } from "@/app/projects/ProjectCard";

export default function Projects() {

  const projectsData: Project[] = [
    {
      title: "Rehabilitation of State-Owned Polytechnic Facilities",
      description:
        "Ongoing upgrades to lecture halls, laboratories, and hostels at Imo State Polytechnic to improve learning environments and student welfare.",
      status: "active",
    },
    {
      title: "ICT Capacity Building Initiative",
      description:
        "Establishing modern computer labs and training centers in tertiary institutions to boost digital literacy and employability.",
      status: "active",
    },
    {
      title: "Lecturer Training & Curriculum Modernization",
      description:
        "Reviewing and updating technical and vocational curricula while providing staff training to meet global academic standards.",
      status: "active",
    },
    {
      title: "Bursary & Scholarship Scheme for Technical Students",
      description:
        "Disbursing financial aid to deserving students pursuing technical education, with a focus on empowering underrepresented communities.",
      status: "closed",
    },
  ];

  const imagePaths = [
    "/images/commisioner3.png",
    "/images/ict.png",
    "/images/school1.jpg",
  ];

  return (
    <div>
      {/* Top Hero */}
      <TopHero
        ministryName="Advancing Technical and Tertiary Education in Imo State"
        titleLabel="Projects"
      />

      {/* Project Card */}
      <ProjectCard projectlist={projectsData} images={imagePaths} />

      {/* CTA Section */}
      <CTASection
        heading="Support the Growth of Innovation and Knowledge"
        subtext="Partner with the Ministry of Tertiary and Technical Education to build a skilled, future-ready Imo workforce."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
