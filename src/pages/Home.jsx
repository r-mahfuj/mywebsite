import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import WorkTogether from "../components/workTogether/WorkTogether";
import Blog from "../components/blog/Blog";
import Profession from "../components/profession/Profession";
import HappyClients from "../components/happyClients/HappyClients";
import Testimonial from "../components/testimonial/Testimonial";
import Experience from "../components/experience/Experience";
import Education from "../components/education/Education";
import Achievements from "../components/achievements/Achievements";
import Contact from "../components/contact/Contact";
import "../../index.css";

import { motion } from "framer-motion";

const Section = ({ children, className }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: "-20px" }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "instant" });
        }, 50);
      }
    }
  }, [location]);
  return (
    <div className="relative overflow-hidden">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>
      <div className="pt-30">
        <HappyClients />
      </div>
      <Section className="bg-soft-white dark:bg-base-200 transition-colors">
        <Profession />
      </Section>
      <Section className="bg-white dark:bg-base-100 transition-colors">
        <div className="blog-background">
          <Blog />
        </div>
      </Section>
      <Section className="bg-soft-white dark:bg-base-200 transition-colors">
        <Portfolio />
      </Section>
      <Section className="bg-white dark:bg-base-100 transition-colors">
        <WorkProcess />
      </Section>
      <Section className="bg-soft-white dark:bg-base-200 transition-colors">
        <Experience />
      </Section>
      <Section className="bg-white dark:bg-base-100 transition-colors">
        <Education />
      </Section>
      <Section className="bg-soft-white dark:bg-base-200 transition-colors">
        <Achievements />
      </Section>
      <Section>
        <Testimonial />
      </Section>
      <div className="bg-gray-900">
        <WorkTogether />
      </div>
      <Contact />
    </div>
  );
};

export default Home;
