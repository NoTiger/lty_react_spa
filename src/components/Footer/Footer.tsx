import React from "react";
import { Link } from "react-router-dom";
import CONSTANT from "constant";
import SocialMediaMenu from "components/SocialMediaMenu";
import { ArrowUp } from "components/icons";
import { motion } from "framer-motion";
import { scrollTop } from "utils/scroll";

const backToTop = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  pressed: { scale: 0.95 },
};

export default function Footer() {
  const {
    INTERNAL_LINKS: { myStory, contact, experience, gallery },
  } = CONSTANT;

  return (
    <footer className="footer flex flex-col items-center text-white">
      <div className="text-orange text-4xl mt-20 mb-9">GRAZ LAU</div>
      <div className="divider mb-15" />
      <div className="flex flex-col items-center mb-10">
        <span className="text-2xl mb-3 font-semibold">Quick Links</span>
        <Link className="mb-1" to={myStory}>
          My Story
        </Link>
        <Link className="mb-1" to={gallery}>
          Gallery
        </Link>
        <Link className="mb-1" to={experience}>
          Experience
        </Link>
        <Link className="mb-1" to={contact}>
          Contact
        </Link>
      </div>
      <div className="flex flex-col items-center w-1/2 mb-12">
        <span className="text-2xl mb-3">Social Media</span>
        <SocialMediaMenu />
      </div>
      <span className="text-3xl mb-3 font-semibold">Contact Details</span>
      <a href="mailto:ltygrazsilver@gmail.com">ltygrazsilver@gmail.com</a>
      <div className="mt-15 mb-15" onClick={scrollTop}>
        <motion.div
          className="flex flex-col items-center"
          variants={backToTop}
          initial="rest"
          whileHover="hover"
          whileTap="pressed"
        >
          <ArrowUp className="text-2xl" />
          <span className="select-none">back to top</span>
        </motion.div>
      </div>
    </footer>
  );
}
