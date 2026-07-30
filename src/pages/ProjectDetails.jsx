import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faCodeBranch, faAtom, faLaptopCode, faCheck, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import card4 from "../assets/images/portfolio-images/card-4.png";

const projectDetailsData = {
  "sige-ml-surrogate": {
    title: "SiGe-ML-Surrogate",
    subtitle: "Accelerated Materials Screening of SiGe Semiconductor Alloys via XGBoost ML Surrogate",
    author: "Mahfujur Rahman",
    affiliation: "Undergraduate Researcher, Materials & Metallurgical Engineering, BUET",
    githubUrl: "https://github.com/r-mahfuj/SiGe-ML-Surrogate",
    image: null,
    tags: ["Computational Materials", "Machine Learning", "Density Functional Theory", "Semiconductors"],
    overview: "Silicon (Si) and Germanium (Ge) form the backbone of modern microelectronics, optoelectronics, and solar cells. By tuning the composition of Si₁₋ₓGeₓ alloys, researchers can tailor physical properties like the electronic bandgap. However, traditional Density Functional Theory (DFT) calculations using Quantum Espresso are computationally expensive and slow.",
    goal: "This project develops an XGBoost machine learning surrogate model trained on relaxed DFT outputs to predict electronic and structural properties in milliseconds instead of hours, enabling rapid screening of thousands of alloy configurations.",
    methodology: [
      {
        step: "1. Supercell Generation",
        desc: "Utilized pymatgen to programmatically construct random solid-solution supercells of Si₁₋ₓGeₓ across varying compositions (x ∈ [0.0, 1.0])."
      },
      {
        step: "2. Structural Relaxation (vc-relax)",
        desc: "Executed variable-cell relaxations in Quantum Espresso (pw.x) to minimize atomic forces and stress, finding true ground-state lattice positions."
      },
      {
        step: "3. Electronic Calculations (scf & bands)",
        desc: "Ran self-consistent field (scf) calculations for converged electron density, followed by non-self-consistent (bands) calculations for electronic band structure."
      },
      {
        step: "4. Feature Extraction & Training",
        desc: "Extracted structural and chemical descriptors using matminer to train and evaluate XGBoost models for high-throughput property prediction."
      }
    ],
    targetProperties: [
      { name: "Total Energy & Formation Enthalpy", desc: "Evaluates thermodynamic stability of specific alloy compositions." },
      { name: "Electronic Bandgap", desc: "Predicts gap magnitude and determines direct vs. indirect transitions." },
      { name: "Relaxed Lattice Constants", desc: "Predicts structural expansion/contraction as Ge concentration varies." }
    ],
    bounds: [
      "Thermodynamic Bounds: Model trained at 0 K and 0 atm (standard DFT conditions).",
      "Compositional Range: Valid for binary Si₁₋ₓGeₓ alloys (x = 0.0 to 1.0).",
      "DFT Functional Error: Inherits standard LDA/GGA bandgap underestimation, acting as an efficient relative screening tool prior to expensive GW or experimental validation."
    ],
    techStack: [
      { category: "Core Physics & DFT", items: ["Quantum Espresso (pw.x)", "pymatgen", "VESTA"] },
      { category: "Machine Learning", items: ["matminer", "XGBoost", "Scikit-learn", "NumPy", "Pandas"] },
      { category: "Data Visualization", items: ["Matplotlib", "Seaborn", "pymatgen BSPlotter"] }
    ],
    references: [
      {
        title: "Properties of 2D Electron or Hole Gases at Tailored s-Si/SiGe Interfaces (Ahuja et al., 2026)",
        url: "https://arxiv.org/abs/2606.28776"
      },
      {
        title: "Direct-bandgap emission from hexagonal Ge and SiGe alloys (Nature 580, 205–209, 2020)",
        url: "https://doi.org/10.1038/s41586-020-2150-y"
      },
      {
        title: "Band structure calculation of Si-Ge-Sn binary and ternary alloys, nanostructures and devices (Moontragoon, White Rose eTheses)",
        url: "https://etheses.whiterose.ac.uk/425/"
      }
    ]
  }
};

const ProjectDetails = () => {
  const { projectId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projectDetailsData[projectId] || projectDetailsData["sige-ml-surrogate"];

  return (
    <div className="bg-soft-white min-h-screen pt-28 pb-20">
      <div className="content px-4 max-w-5xl mx-auto">
        {/* Back Link */}
        <Link
          to="/#portfolio"
          className="inline-flex items-center gap-2 text-picto-primary font-semibold hover:underline mb-8"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back to Projects
        </Link>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-6 md:p-12">
          
          {/* Header & Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="bg-purple-100 text-picto-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {project.title}
          </h1>

          <p className="text-lg md:text-xl text-gray-600 font-medium mb-6 leading-relaxed">
            {project.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-gray-100">
            <div>
              <p className="font-bold text-gray-900 text-lg">{project.author}</p>
              <p className="text-sm text-gray-500">{project.affiliation}</p>
            </div>

            {/* GitHub Repository Action Button */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-5 py-3.5 bg-picto-primary hover:bg-picto-primary-dark text-white font-bold rounded-xl shadow-lg hover:scale-[102%] transition-all text-sm sm:text-base text-center whitespace-normal leading-snug"
            >
              <FontAwesomeIcon icon={faGithub} className="text-lg sm:text-xl shrink-0" />
              <span>View GitHub Repository</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-xs shrink-0" />
            </a>
          </div>

          {/* Project Featured Image */}
          {project.image && (
            <div className="rounded-xl overflow-hidden mb-12 shadow-md max-h-[400px]">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
          )}

          {/* Overview & Motivation */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FontAwesomeIcon icon={faAtom} className="text-picto-primary" />
              Overview & Motivation
            </h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
              {project.overview}
            </p>
            <div className="bg-purple-50 border-l-4 border-picto-primary p-5 rounded-r-xl">
              <p className="text-gray-800 font-medium leading-relaxed">
                <strong>Goal:</strong> {project.goal}
              </p>
            </div>
          </div>

          {/* Calculation Methodology */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FontAwesomeIcon icon={faCodeBranch} className="text-picto-primary" />
              Computational Workflow & Methodology
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.methodology.map((m, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{m.step}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Target Physical Properties */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FontAwesomeIcon icon={faCheck} className="text-picto-primary" />
              Target Physical Properties
            </h2>
            <div className="space-y-4">
              {project.targetProperties.map((prop, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50">
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-picto-primary font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{prop.name}</h4>
                    <p className="text-gray-600 text-sm">{prop.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Model Bounds & Constraints */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Model Operating Bounds & Limitations
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed bg-amber-50 border border-amber-200 p-6 rounded-xl">
              {project.bounds.map((bound, idx) => (
                <li key={idx} className="text-sm md:text-base">{bound}</li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FontAwesomeIcon icon={faLaptopCode} className="text-picto-primary" />
              Tech Stack & Scientific Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.techStack.map((tech, idx) => (
                <div key={idx} className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
                  <h3 className="font-bold text-picto-primary mb-3 text-sm uppercase tracking-wider">
                    {tech.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item, itemIdx) => (
                      <span key={itemIdx} className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-1 rounded-md">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* References */}
          <div className="mb-8 pt-8 border-t border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FontAwesomeIcon icon={faBookOpen} className="text-picto-primary" />
              Scientific References
            </h2>
            <ul className="space-y-3">
              {project.references.map((ref, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-picto-primary font-bold mt-0.5">•</span>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-picto-primary hover:underline font-medium text-sm md:text-base inline-flex items-center gap-2"
                  >
                    {ref.title}
                    <FontAwesomeIcon icon={faArrowRight} className="text-xs shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom GitHub Button */}
          <div className="text-center pt-8 border-t border-gray-100 flex justify-center">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-5 sm:px-8 py-3.5 sm:py-4 bg-picto-primary hover:bg-picto-primary-dark text-white font-bold text-sm sm:text-base md:text-lg rounded-xl shadow-lg hover:scale-[102%] transition-all text-center whitespace-normal leading-snug max-w-full"
            >
              <FontAwesomeIcon icon={faGithub} className="text-xl sm:text-2xl shrink-0" />
              <span className="text-center">Explore Code & Datasets on GitHub</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
