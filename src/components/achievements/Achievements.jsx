import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faMedal, faAward, faCertificate } from "@fortawesome/free-solid-svg-icons";

const achievementsData = [
  {
    title: "Dean's List Honoree",
    organization: "Bangladesh University of Engineering and Technology",
    year: "2024",
    description: "Awarded for maintaining a CGPA above 3.75 in the Department of Materials and Metallurgical Engineering.",
    icon: faTrophy,
  },
  {
    title: "Best Poster Presentation",
    organization: "International Conference on Nanomaterials",
    year: "2023",
    description: "Received first place for the poster on 'Biodegradable Polymer Blends' out of 50+ participants.",
    icon: faAward,
  },
  {
    title: "Undergraduate Research Grant",
    organization: "Ministry of Science and Technology",
    year: "2023",
    description: "Secured funding for the development of novel solid-state battery electrolytes.",
    icon: faMedal,
  },
  {
    title: "Industrial Training Excellence",
    organization: "Abul Khair Steel (AKS)",
    year: "2023",
    description: "Recognized as the top trainee for outstanding performance during the 3-week comprehensive training program.",
    icon: faCertificate,
  },
];

const Achievements = () => {
  return (
    <div className="content py-15 md:py-25 px-2 lg:px-4" id="achievements">
      <div className="text-center mb-16">
        <p className="text-[#48CFCB] font-bold tracking-wider uppercase text-sm mb-2">
          Recognition
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Honors & Achievements
        </h2>
        <div className="w-20 h-1 bg-[#48CFCB] mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {achievementsData.map((item, index) => (
          <div key={index} className="flex gap-6 bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(72,207,203,0.2)] transition-shadow duration-300 border-t-4 border-transparent hover:border-[#48CFCB]">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center text-[#9929fb] text-2xl">
                <FontAwesomeIcon icon={item.icon} />
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-[#48CFCB] font-semibold text-sm mb-3">
                {item.organization} • {item.year}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
