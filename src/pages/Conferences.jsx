import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { blogData } from "../components/blog/blogData";
import MonoBlog from "../components/blog/MonoBlog";

const Conferences = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const conferencePapers = blogData.filter(
    (item) => item.category === "CONFERENCE PAPER" || item.category === "POSTER PRESENTATION"
  );

  return (
    <div className="bg-soft-white min-h-screen pt-28 pb-20">
      <div className="content px-4 max-w-6xl mx-auto">
        {/* Back Link */}
        <Link
          to="/#blog"
          className="inline-flex items-center gap-2 text-picto-primary font-semibold hover:underline mb-8"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to Publications
        </Link>
        <div className="text-center mb-16">
          <p className="text-[#48CFCB] font-bold tracking-wider uppercase text-sm mb-2">
            Publications
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Conference Papers & Posters
          </h1>
          <div className="w-20 h-1 bg-[#48CFCB] mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto">
            A collection of my research presented at national and international scientific conferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {conferencePapers.map((data, index) => (
            <div key={index} className="flex h-full">
              <MonoBlog data={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Conferences;
