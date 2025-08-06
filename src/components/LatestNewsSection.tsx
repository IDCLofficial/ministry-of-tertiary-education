import Image from "next/image";
import Link from "next/link";

const news = [
  {
    title: "Chief Political Adviser Applauds Commissioner Nwachukwu’s Reforms in Technical & Tertiary Education",
    description: "Chief Perry Opara—Governor Uzodimma’s political adviser—has officially commended Professor Victor Nwachukwu for leading a transformational agenda in Imo’s tertiary and technical education sector. He highlighted achievements including massive infrastructure upgrades, uninterrupted salaries, reforms in school publications, and full accreditation across institutions to restore educational excellence in the state.",
    date: "21 May 2025",
    image: "/images/commissioner2.png",
  },
 
  {
    title: "Commissioner Nwachukwu Begins First Working Visit to Imo State University",
    description: "On his maiden official visit to IMSU, Prof. Victor Nwachukwu engaged with university leadership to cement collaboration on academics, accreditation, infrastructure upgrades, and student welfare. For the first time, IMSU secured full accreditation for all 34 programmes presented to NUC—marking a milestone in the institution’s history.",
    date: "30 August 2024",
    image: "/images/imsu.png",
  },
  {
    
    title: "Imo State Tertiary Sector Taps EU’s Intra‑Africa Mobility Funding",
    description: "Through collaboration with the EU‑funded Intra‑Africa Academic Mobility Scheme (2022–2027), Imo State University and affiliated technical institutions are accessing scholarship and staff exchange opportunities. This initiative strengthens international academic linkages, promotes gender-inclusive capacity building, enhances green‑skills training, and improves institutional competence in tertiary and technical education.",
    date: "30 May 2024",
    image: "/images/erasmus.png"
  
  
},
];


export default function LatestNewsSection() {
  return (
    <section className="w-full py-12 px-4 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">Latest News</h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl justify-center mb-8">
        {news.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col w-full max-w-md p-0 overflow-hidden transition hover:shadow-md"
          >
            <div className="w-full h-64 relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-t-2xl"
                sizes="400px"
                priority={idx === 0}
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-bold text-lg md:text-xl text-gray-900 mb-2 tracking-tight uppercase">{item.title}</h3>
              <p className="text-gray-500 text-base mb-6">{item.description}</p>
              <div className="mt-auto font-bold text-black text-base">{item.date}</div>
            </div>
          </div>
        ))}
      </div>
      <Link href="/news">
        <p className="bg-green-700 animate-bounce hover:bg-green-800 text-white font-semibold px-12 py-3 rounded text-lg transition-colors text-center block">See More</p>
      </Link>
    </section>
  );
} 