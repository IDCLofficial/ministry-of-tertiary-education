'use client';

import React, { useState } from "react";
import MediaHeroSection from "./MediaHeroSection";
import MediaGalleryGrid from "./MediaGalleryGrid";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import MediaSearchBar from "./MediaSearchBar";

const mediaItems = [
  {
    image: "/images/commisioner4.png",
    title: "Commissioner Visits IMSU for Collaboration Meeting",
    isVideo: false,
  },
  {
    image: "/images/matric.jpeg",
    title: "Commissioner Speaks at KOMU Matriculation Ceremony",
    isVideo: false,
  },
  // more items can be added here...
];

export default function MediaPage() {
  const [search, setSearch] = useState("");

  const filteredItems = mediaItems.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen w-full bg-[#F7F9FA] flex flex-col">
      <MediaHeroSection
        title="Tertiary Education in Action"
        subtitle="Highlights from recent collaborations, visits, and events under the Ministry of Tertiary Education."
        backgroundImage="/images/gradient.png"
        searchBar={<MediaSearchBar placeholder="Search media..." onSearch={setSearch} />}
      />
      
      <section className="w-full max-w-7xl mx-auto py-12 px-4">
        <div className="mt-8">
          {filteredItems.length === 0 ? (
            <div className="text-center text-gray-500 text-lg font-semibold py-12">
              No results found
            </div>
          ) : (
            <MediaGalleryGrid items={filteredItems} />
          )}
        </div>
      </section>

      <CTASection
        heading="Support Our Collaboration"
        subtext="Join us in supporting quality tertiary education, infrastructure development, and academic excellence in Imo State."
        buttonLabel="Partner With Us"
        buttonHref="/contact-us"
      />

      <Footer />
    </main>
  );
}
