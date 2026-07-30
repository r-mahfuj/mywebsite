import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faMessage } from "@fortawesome/free-solid-svg-icons";

const MonoBlog = ({ data }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-100 hover:shadow-2xl bg-white shadow-gray-300 transition-all duration-300">
      <a href={data?.link}>
        <img
          src={data?.image}
          alt="Blog"
          className="w-full h-56.5 object-cover "
        />
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
