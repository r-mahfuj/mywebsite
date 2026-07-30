import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faMessage } from "@fortawesome/free-solid-svg-icons";

const MonoBlog = ({ data }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-100 hover:shadow-2xl bg-white shadow-gray-300 transition-all duration-300 w-full flex flex-col justify-between">
      <a href={data?.link} className="h-full flex flex-col justify-between">
        {data?.image ? (
          <img
            src={data?.image}
            alt="Publication"
            className="w-full h-56.5 object-cover"
          />
        ) : (
          <div className="w-full h-40 bg-purple-50 flex flex-col items-center justify-center border-b border-purple-100 p-4 text-center">
            <span className="text-picto-primary font-bold text-xs uppercase tracking-widest bg-purple-100 px-3 py-1 rounded-full mb-2">
              {data?.category || "PUBLICATIONS"}
            </span>
            <p className="text-gray-400 text-xs font-medium">Graphical Abstract / Cover Image Placeholder</p>
          </div>
        )}
        <div className="m-6">
          <p className="text-[12px] sm:text-[14px] text-soft-dark border-r-2 pe-3 me-3 font-medium inline-block">
            <span className="me-2">
              <FontAwesomeIcon icon={faCalendarDays} />
            </span>
            {data?.date}
          </p>
          <p className="text-[12px] sm:text-[14px] text-soft-dark font-medium inline-block">
            <span className="me-2">
              <FontAwesomeIcon icon={faMessage} />
            </span>
            {data?.comment}
          </p>
          <p className="text-[14px] xs:text-lg font-medium text-[#333333] mt-2">
            {data?.title.length > 55
              ? `${data?.title.slice(0, 55)}...`
              : data?.title}
          </p>
        </div>
      </a>
    </div>
  );
};

export default MonoBlog;
