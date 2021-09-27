import React from "react";
import { LogoHeaderProps } from "./type";
import logo from "images/logo.png";

export default function LogoHeader({ title }: LogoHeaderProps) {
  return (
    <div className="flex items-center">
      <div className="logo-header-line mr-2" />
      <LogoIcon />
      <div className="poppins text-orange text-3xl mr-2.5 ml-auto">{title}</div>
    </div>
  );
}

function LogoIcon() {
  return <img alt="logo icon" src={logo} />;
}
