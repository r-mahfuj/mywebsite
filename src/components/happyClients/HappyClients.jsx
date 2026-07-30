import Marquee from "react-fast-marquee";

const brandLogos = [
  <span className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-500">University X</span>,
  <span className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-500">University Y</span>,
  <span className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-500">Lab X</span>,
  <span className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-500">Lab Y</span>,
  <span className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-500">University Z</span>,
];

const HappyClients = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2">
      <div className="max-w-144.25 text-center ">
        <p className="section-title mb-6">Academic Affiliations & Collaborations</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          I've had the privilege of collaborating with researchers from leading institutions and national laboratories.
        </p>
      </div>
      <Marquee pauseOnHover={true} speed={100} className="">
        <p className="flex items-center pt-4 md:pt-10">
          {brandLogos?.map((logo, index) => (
            <span className="ps-5 sm:ps-10 md:ps-20" key={index}>
              {logo}
            </span>
          ))}
        </p>
      </Marquee>
    </div>
  );
};

export default HappyClients;
