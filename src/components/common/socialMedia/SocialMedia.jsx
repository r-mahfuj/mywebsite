import {
  faGithub,
  faLinkedin,
  faTwitter,
  faResearchgate
} from "@fortawesome/free-brands-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  { icon: faLinkedin, link: "https://www.linkedin.com/in/mahfujur-rahman-b8a1421ab" },
  { icon: faGithub, link: "https://github.com/r-mahfuj" },
  { icon: faGraduationCap, link: "https://scholar.google.com/citations?user=OP-DstkAAAAJ&hl=en&authuser=1" },
  { icon: faResearchgate, link: "https://www.researchgate.net/profile/Mahfujur-Rahman-36?ev=hdr_xprf" },
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      className={`text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md`}
      key={index}
    >
      <FontAwesomeIcon
        icon={item.icon}
        className={`text-xl w-4.5 aspect-square`}
      />
    </a>
  ));
};

export default SocialMedia;
