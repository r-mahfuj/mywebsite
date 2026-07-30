import aksImage from "../../assets/images/aks_steel_plant.png";
import nanoLabImage from "../../assets/images/nano_materials_lab.png";

const experiences = [
  {
    title: "Undergraduate Research Assistant",
    company: "Billah Multifunctional Nanomaterials Group",
    duration: "Ongoing Research Experience",
    description: [
      "Conducting cutting-edge research in the synthesis and characterization of advanced nanomaterials for energy applications.",
      "Operating high-precision laboratory equipment and assisting in the development of novel polymer composites and solid-state electrolytes.",
      "Collaborating with a team of researchers to analyze structural properties and optimize material performance at the nanoscale."
    ],
    image: nanoLabImage,
  },
  {
    title: "Industrial Trainee",
    company: "Abul Khair Steel (AKS)",
    duration: "3-Week Comprehensive Training Program",
    description: [
      "I completed an intensive 3-week industrial training at Abul Khair Steel (AKS), one of Bangladesh's largest and most advanced steel manufacturing plants.",
      "During this time, I gained hands-on experience observing the continuous casting process, rigorous quality control measures, and metallurgical testing protocols for various steel products.",
      "This experience allowed me to bridge the gap between academic theory and real-world industrial practice, giving me a practical understanding of large-scale metallurgical operations and the importance of precise material properties in industrial manufacturing."
    ],
    image: aksImage,
  }
];

const Experience = () => {
  return (
    <div className="content py-15 md:py-25 px-2 lg:px-4" id="experience">
      <p className="section-title text-center mb-12">Experience</p>
      
      <div className="flex flex-col gap-12">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 bg-white p-6 md:p-10 rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)]">
            <div className={`w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-lg ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <img 
                src={exp.image} 
                alt={exp.company} 
                className="w-full h-[300px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div className={`w-full lg:w-1/2 flex flex-col gap-5 text-gray-600 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                <p className="text-xl font-semibold text-picto-primary mb-1">{exp.company}</p>
                <p className="text-sm font-medium text-gray-400">{exp.duration}</p>
              </div>
              
              <div className="flex flex-col gap-3">
                {exp.description.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-[15px] md:text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
