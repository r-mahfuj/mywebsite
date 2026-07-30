import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const projectData = [
  {
    id: 1,
    image: null,
    category: "COMPUTATIONAL MATERIALS & ML",
    title: "SiGe-ML-Surrogate",
    description: "An ML surrogate model (XGBoost) that mimics Density Functional Theory (Quantum Espresso) to instantly predict SiGe alloy bandgaps, formation enthalpy, and relaxed lattice parameters.",
    link: "/project/sige-ml-surrogate",
  },
  {
    id: 2,
    image: null,
    category: "POLYMERS",
    title: "Project 2",
    description: "",
    link: "#!",
  },
  {
    id: 3,
    image: null,
    category: "THIN FILMS",
    title: "Project 3",
    description: "",
    link: "#!",
  },
  {
    id: 4,
    image: null,
    category: "COMPUTATIONAL",
    title: "Project 4",
    description: "",
    link: "#!",
  },
  {
    id: 5,
    image: null,
    category: "BIOMATERIALS",
    title: "Project 5",
    description: "",
    link: "#!",
  },
  {
    id: 6,
    image: null,
    category: "ENERGY STORAGE",
    title: "Project 6",
    description: "",
    link: "#!",
  },
];

// Responsive breakpoints for Swiper finger sliding
const custom_breakpoints = {
  320: {
    slidesPerView: 1.15,
    spaceBetween: 16,
  },
  640: {
    slidesPerView: 2.15,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 24,
  },
};

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
      <Swiper
        grabCursor={true}
        allowTouchMove={true}
        simulateTouch={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {projectData.map((data, index) => (
          <SwiperSlide
            key={index}
            className="mb-10"
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <div className="flex justify-center h-full">
              <Projects data={data} key={index} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
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
