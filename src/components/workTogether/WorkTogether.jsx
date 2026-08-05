import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WorkTogether = () => {
  return (
    <div className="py-25 max-w-169 mx-auto px-2">
      <div className="text-center">
        <p className="text-white md:font-semibold text-2xl sm:text-3xl md:text-5xl pb-8">
          Seeking Ph.D. Opportunities
        </p>
        <p className="text-[#A5ACB5] text-xs sm:text-lg font-normal text-center pb-8">
          I am actively looking for Ph.D. positions and funding opportunities in Materials Science and Engineering, focusing on energy storage, nanomaterials, and solid-state batteries. I'd love to discuss potential projects and research assistantships.
        </p>
        <a
          href="#contact"
          className="btn btn-primary px-4 md:px-6.5 py-3 md:py-6 text-[12px] md:text-[16px]"
        >
          Contact Me for Opportunities
          <FontAwesomeIcon
            icon={faArrowRight}
            className="ms-3 text-white"
          />
        </a>
      </div>
    </div>
  );
};

export default WorkTogether;
