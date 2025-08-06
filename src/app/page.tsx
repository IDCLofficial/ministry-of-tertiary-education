import AboutMandateSection from "@/components/AboutMandateSection";
import HeroSection from "@/components/HeroSection";
import CommissionerSection from "@/components/CommissionerSection";
import QuickLinksSection from "@/components/QuickLinksSection";
import SkillUpSection from "@/components/SkillUpSection";
import LatestNewsSection from "@/components/LatestNewsSection";
import Stats from "@/components/Stats";
import FeaturedPartners from "@/components/FeaturedPartners";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>

     
      {/* hero section */}
      <HeroSection
        backgroundImage="/images/homehero.jpg"
        overlayText="Imo State Ministry of Tertiary and Technical Education"
        heading="Advancing Higher Education."
        subheading="Empowering Minds."
        description="Championing academic excellence, innovation, and inclusive access to tertiary education across Imo State. Our mission is to nurture future leaders, foster research and technological advancement, and ensure that every student has the opportunity to reach their full potential."/>
      {/* About Mandate Section */}
      <AboutMandateSection
        label="ABOUT US"
        title="Our Mandate —"
        subheading="Ministry of Tertiary and Technical Education"
        description="Welcome to the Imo State Ministry of Tertiary and Technical Education. As the driving force behind higher education in Imo State, our Ministry is dedicated to fostering academic excellence, research, and innovation. We oversee the development and regulation of universities, polytechnics, and colleges, ensuring quality standards and equitable access for all. Our mission is to empower students, support educators, and build a knowledge-driven society that meets the demands of a global economy."
        buttonText="Discover More"
        image1="/images/school1.jpg"
        image2="/images/student1.png"
      />

      {/* Commissioner Section */}
      <CommissionerSection
        imageSrc="/images/commisioner.jpg"
        imageAlt="Commissioner for Tertiary and Technical Education in Imo State"
        title="About The Commissioner"
        bio="Honourable Professor Victor Ndubuisi Nwachukwu is a trailblazer and reformer in Nigeria’s higher education landscape, renowned for his dynamic leadership and unwavering commitment to excellence. As the Commissioner for Tertiary and Technical Education in Imo State, he is redefining what it means to lead in education—merging visionary policy, academic integrity, and bold innovation. With a legacy rooted in top-tier academia and strategic governance, he is igniting a new era of progress, inclusion, and opportunity for the youth."

details="Professor Nwachukwu stands at the forefront of a revolution in tertiary education. He works hand-in-hand with universities, polytechnics, international development agencies, and tech-driven institutions to overhaul outdated systems, build state-of-the-art infrastructure, and create opportunities that empower students to thrive in a competitive global economy. Under his fearless leadership, Imo State is not just catching up—it’s setting the pace for educational transformation in Nigeria and beyond."
/>
      <div className="bg-white">

      {/* Skill Up Section */}
      <SkillUpSection />
      {/* Quick Links Section */}
      <QuickLinksSection />
      {/* Latest News Section */}
      <LatestNewsSection />
      </div>

      {/* Stats Section */}
      <Stats />
      {/* Featured Partners Section */}
      <FeaturedPartners />
      {/* CTASection */}
      <CTASection
        heading="Join Us in Advancing Higher Education"
        subtext="Be part of our mission to create a world-class tertiary education system in Imo State, empowering students and educators for a brighter future."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
      {/* Footer */}
      <Footer />
    </>
  );
}
