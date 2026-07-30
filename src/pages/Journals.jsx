import React, { useEffect } from "react";
import { blogData } from "../components/blog/blogData";
import MonoBlog from "../components/blog/MonoBlog";

const Journals = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const journalPapers = blogData.filter(
    (item) => item.category === "RESEARCH PAPER" || item.category === "REVIEW ARTICLE"
  );

  return (
    <div className="bg-soft-white min-h-screen pt-30 pb-20">
      <div className="content px-4">
        <div className="text-center mb-16">
          <p className="text-[#48CFCB] font-bold tracking-wider uppercase text-sm mb-2">
            Publications
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Journal Articles
          </h1>
          <div className="w-20 h-1 bg-[#48CFCB] mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto">
            A comprehensive list of my peer-reviewed journal articles and review papers published in high-impact scientific journals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {journalPapers.map((data, index) => (
            <div key={index} className="flex h-full">
              <MonoBlog data={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journals;
