import React from "react";
import { Link } from "react-router-dom";
import CONSTANT from "constant";
import { MainMenuProps } from "./type";

export default function MainMenu({ shown = false }: MainMenuProps) {
  const {
    INTERNAL_LINKS: { myStory, myPurpose, experience, gallery, blastik },
  } = CONSTANT;

  return (
    <div
      className={`main-menu w-1/2 h-full text-grey-font ${
        shown ? "slideInLeft" : "slideOutLeft"
      }`}
    >
      <div className="flex flex-col font-semibold pt-7.5 pl-2.5">
        <Link className="mb-5" to={myStory}>
          About LTY
        </Link>
        <Link className="mb-5" to={myPurpose}>
          Mission
        </Link>
        <Link className="mb-5" to={gallery}>
          Creative Work
        </Link>
        <Link className="mb-5" to={blastik}>
          BlastiK
        </Link>
        <Link to={experience}>Adventures</Link>
      </div>
    </div>
  );
}
