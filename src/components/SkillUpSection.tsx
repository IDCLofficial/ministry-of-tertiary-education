import Image from "next/image";
import Link from 'next/link';

export default function SkillUpSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-stretch justify-center gap-8 py-8 px-4">
      {/* Left: Image */}
      <div className="w-[90%] md:w-[40%] flex items-stretch">
        <div className="relative w-full h-[300px] md:h-full min-h-[300px]">
          <Image src="/images/imsulogo.png" alt="Imo State University Campus" fill className="object-cover rounded" />
        </div>
      </div>

      {/* Right: Text and Buttons */}
      <div className="w-[90%] md:w-[55%] flex-1 flex flex-col justify-center items-start max-w-2xl px-2 min-h-0">
        <h2 className="text-xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Accelerating Academic Excellence at Imo State University
        </h2>
        <p className="text-gray-500 text-sm md:text-md lg:text-lg mb-8 max-w-[700px]">
          Under the leadership of Honourable Professor Victor Ndubuisi Nwachukwu, the Ministry of Tertiary and Technical Education has embarked on a transformative journey to uplift Imo State University (IMSU). The ongoing project includes the complete renovation of lecture halls, laboratories, and student facilities across 18 faculties—ensuring a modern, comfortable, and stimulating learning environment.
        </p>
        <p className="text-gray-500 text-sm md:text-md lg:text-lg mb-8 max-w-[700px]">
          For the first time in the university’s history, all 34 academic programs received full accreditation—a landmark achievement that reflects the Ministry’s commitment to academic excellence. To complement these upgrades, the Ministry has launched specialized training programs to equip lecturers and administrators with the tools they need for effective teaching and institutional leadership.
        </p>
       
        <div className="flex flex-row gap-4 mt-4 overflow-x-auto whitespace-nowrap pb-2">
          <Link href="/about" style={{paddingTop: '.5rem', paddingBottom: '.5rem'}} className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-2 rounded text-lg transition-colors min-w-[140px] text-center">
            Learn More
          </Link>
          <Link href="/contact-us" style={{paddingTop: '.5rem', paddingBottom: '.5rem'}} className="border border-green-700 text-green-700 font-semibold px-8 py-2 rounded text-lg hover:bg-green-50 transition-colors min-w-[160px] text-center">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
