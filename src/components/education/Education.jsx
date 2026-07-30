import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faMapMarkerAlt, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const Education = () => {
  return (
    <div className="content py-15 md:py-25 px-2 lg:px-4" id="education">
      <p className="section-title text-center mb-12">Education</p>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-6 md:p-12 rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)]">
          <div className="relative border-l-4 border-picto-primary ml-2 md:ml-4 flex flex-col gap-12 py-2">
            
            {/* BUET Entry */}
            <div className="relative pl-8 md:pl-10">
              <div className="absolute -left-[22px] top-0 bg-picto-primary w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md border-4 border-white">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Bachelor of Science (B.Sc.)
              </h3>
              <p className="text-xl font-semibold text-picto-primary mb-3">
                Materials and Metallurgical Engineering
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-gray-500 font-medium mb-6">
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-400" />
                  Bangladesh University of Engineering and Technology (BUET)
                </span>
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCalendarAlt} className="text-gray-400" />
                  Expected Graduation: 2027
                </span>
              </div>
              
              <p className="text-[15px] md:text-lg leading-relaxed text-gray-600 border-t pt-5 border-gray-100">
                Currently in my second year of undergraduate studies at Bangladesh's premier engineering institution. 
                My coursework focuses heavily on physical metallurgy, polymer science, solid-state physics, and computational materials engineering. 
                I am consistently maintaining a strong academic record while actively engaging in advanced undergraduate research projects within the department.
              </p>
            </div>

            {/* Notre Dame College Entry */}
            <div className="relative pl-8 md:pl-10">
              <div className="absolute -left-[22px] top-0 bg-picto-primary w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md border-4 border-white">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Higher Secondary Certificate (HSC)
              </h3>
              <p className="text-xl font-semibold text-picto-primary mb-3">
                Science Group
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-gray-500 font-medium mb-4">
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-400" />
                  Notre Dame College, Dhaka
                </span>
              </div>
              
              <p className="text-[15px] md:text-lg leading-relaxed text-gray-600 border-t pt-5 border-gray-100">
                Graduated with a perfect GPA of <strong className="text-gray-900 font-bold">5.00/5.00</strong>. Built a strong foundational understanding of physics, chemistry, and higher mathematics which paved the way for a rigorous engineering curriculum at BUET.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
