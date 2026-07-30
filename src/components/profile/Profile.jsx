import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtom, faFlask, faGraduationCap, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  return (
    <div
      className="relative mx-4 xxl:mx-auto max-w-5xl -bottom-16 lg:-bottom-24 z-10 rounded-2xl bg-white shadow-2xl p-6 md:p-12 border border-gray-100"
      id="profile"
    >
      <div className="text-center mb-8">
        <p className="text-picto-primary font-bold uppercase tracking-wider text-xs md:text-sm mb-2">
          Research Focus & Academic Goals
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Bridging Computational Physics & Materials Discovery
        </h2>
        <div className="w-16 h-1 bg-picto-primary mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        {/* Pillar 1 */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-purple-100 text-picto-primary flex items-center justify-center mb-4 text-xl">
            <FontAwesomeIcon icon={faAtom} />
          </div>
          <h3 className="font-bold text-gray-900 text-lg mb-2">Computational Materials & ML</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Developing high-throughput Density Functional Theory (Quantum Espresso) workflows and XGBoost machine learning surrogate models for SiGe semiconductor alloy screening.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-purple-100 text-picto-primary flex items-center justify-center mb-4 text-xl">
            <FontAwesomeIcon icon={faFlask} />
          </div>
          <h3 className="font-bold text-gray-900 text-lg mb-2">Synthesis & Energy Storage</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Investigating solid-state battery electrolytes, polymer composites, and nanomaterials synthesis to solve fundamental energy storage bottlenecks.
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-purple-100 text-picto-primary flex items-center justify-center mb-4 text-xl">
            <FontAwesomeIcon icon={faGraduationCap} />
          </div>
          <h3 className="font-bold text-gray-900 text-lg mb-2">Academic & Career Aspirations</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Actively seeking international research internships and PhD opportunities to pursue advanced doctoral studies in computational materials engineering.
          </p>
        </div>
      </div>

      <div className="text-center pt-4">
        <a
          className="btn btn-primary text-white font-semibold px-8 py-3 rounded-xl shadow-md inline-flex items-center gap-2 hover:scale-105 transition-transform"
          href="#portfolio"
        >
          Explore Research Projects
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </div>
  );
};

export default Profile;
