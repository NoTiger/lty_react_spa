import React from "react";
import { Link } from "react-router-dom";
import { MainMenuProps } from "./type";

export default function MainMenu({ shown = false }: MainMenuProps) {
  return (
    <div
      className={`main-menu w-1/2 h-full text-grey-font ${
        shown ? "slideInLeft" : "slideOutLeft"
      }`}
    >
      <div className="flex flex-col open-sans font-semibold pt-7.5 pl-2.5">
        <Link className="mb-5" to="/">
          About LTY
        </Link>
        <Link className="mb-5" to="/#mission">
          Mission
        </Link>
        <Link className="mb-5" to="/gallery">
          Creative Work
        </Link>
        <Link className="mb-5" to="/#blastik">
          BlastiK
        </Link>
        <Link to="/experience">Adventures</Link>
      </div>
    </div>
  );
}
