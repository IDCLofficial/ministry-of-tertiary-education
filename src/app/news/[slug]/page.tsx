import Image from "next/image";
import NewsHeroSection from "./NewsHeroSection";
import NewsBodySection from "./NewsBodySection";

const latestNews = [
  {
    title: "Imo Government Encourages Technical Colleges Upgrade to Revive Skills Training",
    date: "14 March 2025",
    img: "/images/technical.png", 
  },
];

export default function NewsDetailPage() {
  return (
    <div className="min-h-screen bg-[#F7F9FA]">
      {/* Section 1: Hero + Body */}
      <section className="relative w-full pb-[180px]">
        <NewsHeroSection />
        <NewsBodySection>
          {/* Title & Meta */}
          <div className="relative z-10 w-full flex justify-center pb-2">
            <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/technical.png"
                alt="Technical College Upgrade"
                width={900}
                height={400}
                className="object-cover w-full h-[260px] md:h-[320px]"
              />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Imo Government Encourages Technical Colleges Upgrade to Revive Skills Training
            </h1>
            <p className="text-gray-500 text-sm">14 March 2025 • Latest Updates</p>
          </div>

          {/* Main Content */}
          <div>
            <p className="text-gray-700 mb-6">
              The Imo State House of Assembly has backed a motion calling for the rehabilitation of dilapidated technical colleges across the state. The initiative includes the provision of modern equipment and the establishment of partnerships with private sector stakeholders to help combat rising youth unemployment.
            </p>
            <p className="text-gray-700 mb-6">
              Lawmakers emphasized the urgent need to reposition technical education as a core driver of economic and industrial growth. They noted that reviving these institutions will not only empower youths with practical skills but also attract investment in technical innovation.
            </p>

            <div className="w-full flex justify-center my-8">
              <div className="w-full max-w-md rounded-xl overflow-hidden">
                <Image
                  src="/images/school1.jpg"
                  alt="Technical Equipment"
                  width={600}
                  height={300}
                  className="object-cover w-full h-64"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h2 className="font-semibold mb-2">Key Highlights:</h2>
                <ul className="list-disc ml-6 text-gray-700 mb-6">
                  <li>Motion passed by the Imo State House of Assembly supporting upgrades.</li>
                  <li>Plans to rehabilitate and equip technical colleges with modern tools.</li>
                  <li>Encouragement of private sector partnerships for technical education.</li>
                  <li>Initiative aimed at addressing youth unemployment and skills mismatch.</li>
                  <li>Commitment to making technical education more attractive and viable.</li>
                </ul>
              </div>
              <div className="flex-1 flex items-center">
                <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-800">
                  <span className="font-bold">
                    &ldquo;Rehabilitating our technical colleges is not just about buildings and tools—it's about building futures and empowering generations.&rdquo;
                  </span>
                </blockquote>
              </div>
            </div>

            <p className="text-gray-700 mt-6">
              The Assembly reaffirmed its support for the Ministry of Education in championing this cause and assured full legislative backing. Citizens have welcomed the development, describing it as a bold step towards reviving practical education and enhancing self-reliance among the youth.
            </p>
          </div>
        </NewsBodySection>
      </section>

      {/* Section 2: Latest News */}
      <div className="w-full bg-[#181c23] py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-white text-xl font-semibold mb-6">LATEST NEWS</h2>
          <div className="flex flex-col md:flex-row gap-6">
            {latestNews.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#232323] rounded-xl overflow-hidden flex-1 min-w-[220px] max-w-xs"
              >
                <div className="relative w-full h-28">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="text-white text-xs font-semibold mb-2 line-clamp-2">
                    {item.title}
                  </div>
                  <div className="text-gray-400 text-[10px]">{item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Footer (if needed) */}
    </div>
  );
}
