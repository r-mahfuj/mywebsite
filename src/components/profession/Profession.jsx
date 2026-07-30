import React from "react";

// Official logos from Devicons
const cppLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg";
const pythonLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg";
const matlabLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg";
const numpyLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg";
const pandasLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg";
const matplotlibLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg";

import vaspLogo from "../../assets/images/skills/vasp_real.png";
import swLogo from "../../assets/images/skills/solidworks.png";
import mlLogo from "../../assets/images/skills/ml.jpg";
import matminerLogo from "../../assets/images/skills/matminer_logo_small.png";
import qeLogo from "../../assets/images/skills/qespresso-logo.png";

// Uploaded images that we need to correctly assign
import originproLogo from "../../assets/images/skills/img1.jfif"; // The user uploaded OriginPro as img1
import vestaLogo from "../../assets/images/skills/img3.jfif"; // The user uploaded Vesta as img3
import lammpsLogo from "../../assets/images/skills/lammps_real.jfif";
import pymatgenLogo from "../../assets/images/skills/pymatgen_real.png";
import imagejLogo from "../../assets/images/skills/img2.jfif"; // The user uploaded ImageJ as img2

const skillCategories = [
  {
    title: "Programming & Data Science",
    skills: [
      { name: "Machine Learning", iconUrl: mlLogo, progress: 65 },
      { name: "Python", iconUrl: pythonLogo, progress: 90 },
      { name: "C/C++", iconUrl: cppLogo, progress: 85 },
      { name: "Matlab", iconUrl: matlabLogo, progress: 75 },
      { name: "NumPy", iconUrl: numpyLogo, progress: 85 },
      { name: "Pandas", iconUrl: pandasLogo, progress: 80 },
      { name: "Matplotlib", iconUrl: matplotlibLogo, progress: 80 },
    ]
  },
  {
    title: "Materials Simulation & Modeling",
    skills: [
      { name: "VASP", iconUrl: vaspLogo, progress: 80 },
      { name: "LAMMPS", iconUrl: lammpsLogo, progress: 65 },
      { name: "Quantum Espresso", iconUrl: qeLogo, progress: 75 },
      { name: "pymatgen", iconUrl: pymatgenLogo, progress: 80 },
      { name: "matminer", iconUrl: matminerLogo, progress: 65 },
    ]
  },
  {
    title: "Design, Visualization & Analysis",
    skills: [
      { name: "SolidWorks", iconUrl: swLogo, progress: 75 },
      { name: "OriginPro", iconUrl: originproLogo, progress: 85 },
      { name: "VESTA", iconUrl: vestaLogo, progress: 80 },
      { name: "XCrySDen", iconText: "XC", color: "#4f46e5", progress: 70 },
      { name: "ImageJ", iconUrl: imagejLogo, progress: 75 },
      { name: "PerkinElmer", iconText: "PE", color: "#2563eb", progress: 85 },
    ]
  }
];

const Profession = () => {
  return (
    <div className="bg-[#f3f4f6] py-16" id="skills">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-[#48CFCB] font-bold tracking-wider uppercase text-sm mb-2">
            My Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-[#48CFCB] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Skills Categories */}
        <div className="flex flex-col gap-16 max-w-5xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="w-full">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-gray-800 inline-block border-b-4 border-[#48CFCB] pb-2">
                  {category.title}
                </h3>
              </div>
              <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10 justify-center">
                {category.skills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center gap-4 group cursor-pointer">
                    <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-[3px] border-transparent group-hover:border-[#48CFCB] transition-all duration-300 w-full aspect-[4/5] flex flex-col items-center justify-center p-4 md:p-5 relative overflow-hidden">
                      
                      {/* Icon / Image */}
                      <div className="flex-grow flex items-center justify-center w-full">
                        {skill.iconUrl ? (
                          <img src={skill.iconUrl} alt={skill.name} className="w-12 h-12 md:w-16 md:h-16 object-contain group-hover:scale-110 transition-transform duration-300" />
                        ) : (
                          <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-xl font-bold text-xl md:text-2xl text-white group-hover:scale-110 transition-transform duration-300 shadow-md" style={{ backgroundColor: skill.color }}>
                            {skill.iconText}
                          </div>
                        )}
                      </div>

                      {/* Progress Bar (Appears on Hover on Desktop, Always Visible on Mobile) */}
                      <div className="w-full mt-4 h-1.5 bg-gray-100 rounded-full overflow-hidden opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-0 lg:translate-y-2 group-hover:translate-y-0">
                        <div 
                          className="h-full bg-[#48CFCB] rounded-full transition-all duration-700 ease-out"
                          style={{ width: `${skill.progress}%`, transformOrigin: "left" }}
                        ></div>
                      </div>

                    </div>
                    {/* Skill Name below card */}
                    <p className="font-bold text-sm md:text-base text-gray-900 group-hover:text-[#48CFCB] transition-colors duration-300 text-center">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profession;
