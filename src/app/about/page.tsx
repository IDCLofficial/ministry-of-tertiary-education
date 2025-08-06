import { SectionHero } from "@/components/SectionHero";
import { ObjectivesSection } from "@/app/about/ObjectivesSection";
import { StructuresSection } from "@/app/about/StructuresSection";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import { TopHero } from "@/components/TopHero";
import MissionVisionCard from "@/app/about/MissionVisionCard";
import TeamPage from "./Team";

// departments
const departments = {
    row1: [
      {
        title: "Department of Technical & Vocational Training",
        description:
          "Oversees the curriculum and infrastructure upgrades across state technical colleges to equip students with employable skills.",
      },
      {
        title: "Department of Tertiary Institutions Support",
        description:
          "Coordinates support and infrastructure development in state-run tertiary institutions including colleges and universities.",
      },
      {
        title: "Department of Industry Linkages & Skills Development",
        description:
          "Forges partnerships between technical colleges, polytechnics and private industries for internships, apprenticeships, and graduate placement.",
      },
    ],
    row2: [
      {
        title: "Department of Monitoring & Quality Assurance",
        description:
          "Monitors project implementation in institutions, ensures standards are met and reports on capital interventions.",
      },
      {
        title: "Department of ICT‑Driven Education & Innovation",
        description:
          "Promotes ICT-based learning, e‑exams, digital classrooms and capacity building for technical and tertiary educators.",
      },
    ],
  };
  
  // team
  const teamMembers = [
    {
      name: "Prof. Victor Nwachukwu",
      role: "Commissioner, Tertiary & Technical Education",
      image: "/images/commisioner.jpg",
      bio: "Leading the ministry to revamp tertiary and technical education infrastructure, curriculum, and capacity to world-class standards." 
    },
    {
      name: "Mrs Egbuka Blessing A.",
      role: "Permanent Secretary",
      image: "/images/permsec.png",
      bio: "Oversees administrative coordination of technical colleges and tertiary institutions within Imo State."
    },
  ];
  
  // objectives
  const objectives = [
    {
      title: "Institutional Rehabilitation",
      description:
        "Revitalize dilapidated technical colleges with modern facilities, workshops, hostels, and learning resources." ,
    },
    {
      title: "World‑Class Technical Education",
      description:
        "Elevate curricula and vocational training programs to meet global standards and drive self-reliance." ,
    },
    {
      title: "Capacity Building for Educators",
      description:
        "Implement training programs for principals, instructors and technical staff to improve teaching and administration." ,
    },
    {
      title: "Industry Partnership & Employability",
      description:
        "Establish strong linkages with private sector and industries for internships, apprenticeships, and graduate placement." ,
    },
    {
      title: "Digital Learning & E‑Assessment",
      description:
        "Expand ICT-based learning platforms, e‑exams, and virtual classrooms across institutions." ,
    },
    {
      title: "Monitoring & Accountability",
      description:
        "Track the progress of rehabilitation and development efforts through rigorous oversight and reporting." ,
    },
  ];
  
  const coreValues = [
    "Excellence",
    "Innovation",
    "Practicality",
    "Inclusivity",
    "Transparency",
    "Empowerment",
  ];
  
  export default function AboutUs() {
    return (
      <div className="h-screen bg-white">
        <TopHero
          ministryName="Ministry of Tertiary & Technical Education"
          titleLabel="About Us"
        />
  
        <SectionHero
          aboutText={`The Ministry of Tertiary & Technical Education in Imo State is spearheading comprehensive reforms to uplift technical colleges and tertiary institutions through infrastructure revitalization, curriculum updates, and ICT‑driven pedagogical systems.\n
  Led by Prof. Victor Nwachukwu, funded interventions are underway to rehabilitate workshops, classrooms, hostels, and equip institutions for digital learning.\n
  The ministry’s focus on capacity building, industry linkages, and e‑assessment systems aims to make tertiary and technical education in Imo State globally competitive and employment‑oriented.`}
          imgSrc="/images/school2.jpg"
          altText="Technical education in Imo State"
        />
  
        <MissionVisionCard
          ministryName="Ministry of Tertiary & Technical Education"
          state="Imo State"
          mission="To revitalize tertiary and technical education in Imo State by restoring infrastructure, promoting ICT‑based learning, enhancing educator capacity, and bridging academia with industry."
          vision="An Imo State where tertiary and technical institutions produce skilled, self‑reliant graduates equipped for entrepreneurship and modern industry demands."
        />
  
        <TeamPage teamMembers={teamMembers} />
  
        <ObjectivesSection
          objectives={objectives}
          coreValues={coreValues}
          ministryName="Ministry of Tertiary & Technical Education"
        />
  
        <StructuresSection
          imgSrc="/images/building.png"
          departments={departments}
          description="The Ministry of Tertiary and Technical Education oversees universities, polytechnics, and technical colleges in Imo State. It is committed to promoting quality education, innovation, and skills development for global competitiveness."

        />
  
        <CTASection
          heading="Support our initiative to transform technical and tertiary education in Imo State"
          buttonLabel="See Our Current Projects"
          buttonHref="/projects"
        />
  
        <Footer />
      </div>
    );
  }
  