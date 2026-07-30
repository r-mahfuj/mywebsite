import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message:
      "Awarded the NSF Graduate Research Fellowship for proposal on advanced solid-state battery electrolytes.",
    quote: `The National Science Foundation Graduate Research Fellowship Program recognizes and supports outstanding graduate students in NSF-supported science, technology, engineering, and mathematics disciplines.`,
    name: "NSF GRFP",
    designation: "National Science Foundation, 2025",
  },
  {
    message:
      "Graduated with Highest Honors (Summa Cum Laude) in Materials Science and Engineering.",
    quote: `Achieved a final cumulative GPA of 3.95/4.0, ranking in the top 1% of the graduating class. Consistently named to the Dean's List for all 8 semesters.`,
    name: "Summa Cum Laude",
    designation: "Stanford University, 2025",
  },
  {
    message:
      "Best Poster Presentation Award at the Materials Research Society (MRS) Fall Meeting.",
    quote: `Recognized for outstanding research presentation and scientific merit for the project on "In-situ Characterization of Dendrite Growth in Li-Metal Batteries" out of over 500 presenters.`,
    name: "Best Poster Award",
    designation: "MRS Fall Meeting, 2024",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Achievements & Recognition</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
