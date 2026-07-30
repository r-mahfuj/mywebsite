import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = ({ data }) => {
  const isInternal = data?.link?.startsWith("/");

  return (
    <div className="max-w-106 w-full h-[380px] rounded-lg outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200 bg-white overflow-hidden flex flex-col justify-between">
      {data?.image ? (
        <img src={data?.image} alt={`${data?.title} image`} className="w-full h-44 object-cover" />
      ) : (
        <div className="w-full h-36 bg-purple-50 flex flex-col items-center justify-center border-b border-purple-100 p-4 text-center">
          <p className="text-gray-400 text-xs font-medium">Project Diagram / Preview Placeholder</p>
        </div>
      )}
      <div className="p-4 xs:p-8 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-gray-400 text-xs font-medium">{data?.category}</p>
          <p className="text-gray-900 text-md xxs:text-lg font-semibold pt-1 mb-3">
            {data?.title}
          </p>
          {data?.description && (
            <p
              style={{ lineHeight: "20px", letterSpacing: "0%" }}
              className="text-gray-600 text-xs xxs:text-[14px] text-wrap mb-3"
            >
              {data?.description}
            </p>
          )}
        </div>
        {isInternal ? (
          <Link
            to={data?.link}
            className="btn hover:border-picto-primary hover:text-picto-primary bg-white text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 mt-5 xs:py-5.75 px-6 max-sm:w-full inline-flex items-center justify-center"
          >
            View Details
            <span className="ms-1 xs:ms-3">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </Link>
        ) : (
          <a
            href={data?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn hover:border-picto-primary hover:text-picto-primary bg-white text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 mt-5 xs:py-5.75 px-6 max-sm:w-full inline-flex items-center justify-center"
          >
            View Details
            <span className="ms-1 xs:ms-3">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </a>
        )}
      </div>
    </div>
  );
};

export default Projects;
