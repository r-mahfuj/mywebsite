import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "NANOMATERIALS",
    title: "Project 1",
    description: "Investigated novel CVD methods for high-yield carbon nanotube production with enhanced tensile strength.",
    link: "#!",
  },
  {
    id: 2,
    image: card2,
    category: "POLYMERS",
    title: "Project 2",
    description: "Formulated and characterized eco-friendly polymer composites for packaging applications.",
    link: "#!",
  },
  {
    id: 3,
    image: card3,
    category: "THIN FILMS",
    title: "Project 3",
    description: "Optimized Atomic Layer Deposition processes to improve the efficiency of perovskite solar cells.",
    link: "#!",
  },
  {
    id: 4,
    image: card4,
    category: "COMPUTATIONAL",
    title: "Project 4",
    description: "Utilized Density Functional Theory to predict the catalytic activity of transition metal dichalcogenides.",
    link: "#!",
  },
  {
    id: 5,
    image: card5,
    category: "BIOMATERIALS",
    title: "Project 5",
    description: "Engineered biocompatible hydroxyapatite scaffolds to support osteoblast proliferation.",
    link: "#!",
  },
  {
    id: 6,
    image: card6,
    category: "ENERGY STORAGE",
    title: "Project 6",
    description: "Synthesized highly conductive sulfide-based solid electrolytes to enhance battery safety.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Projects</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent research work, showcasing my skills in experimental synthesis, characterization, and computational modeling.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="https://github.com/r-mahfuj"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
