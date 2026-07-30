import person from "../../assets/images/academic_headshot.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "CGPA",
    description: "--",
  },
  {
    id: 2,
    title: "Publications",
    description: "4",
  },
  {
    id: 3,
    title: "Projects",
    description: "8+",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-8 lg:pt-13 lg:me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-4xl sm:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m <br className="lg:hidden" />
            <span className="block lg:inline-block lg:ml-3 mt-2 lg:mt-0">
              Mahfujur Rahman
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            I am a <span className="bg-highlight">2nd-Year Undergraduate</span>{" "}
            studying Materials and Metallurgical Engineering at BUET, based in
            Dhaka, Bangladesh. I strive to discover and synthesize novel materials
            to solve critical challenges in sustainable energy storage.
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn btn-primary text-white max-sm:btn-md sm:btn-lg"
              href="#!"
              download
            >
              Download CV
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;
