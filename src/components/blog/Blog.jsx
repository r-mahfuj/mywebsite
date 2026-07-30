import { blogData } from "./blogData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./blog.css";
import MonoBlog from "./MonoBlog";

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

const Blog = () => {
  return (
    <div className="content py-25 px-2 relative" id="blog">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title max-xl:text-center">Featured Publications</p>
        <p className="mt-6 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-400">
          A highlight reel of my most impactful research. Use the <span className="font-semibold text-picto-primary">Publications menu</span> above to explore my complete archive of journal articles and conference papers.
        </p>
      </div>
      <Swiper
        grabCursor={true}
        allowTouchMove={true}
        simulateTouch={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {blogData?.map((data, index) => (
          <SwiperSlide
            key={index}
            className="mb-10" /* pagination margin bottom to 40px */
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <MonoBlog data={data} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;
