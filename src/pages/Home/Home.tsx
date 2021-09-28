import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LandingSection from "./LandingSection";
import MyPurpose from "./MyPurpose";
import MyStory from "./MyStory";

export default function Home(): React.FunctionComponentElement<any> {
  const location = useLocation();
  const hash = location.hash.substr(1);

  useEffect(() => {
    if (hash) {
      const targetElement = document.querySelector(`#${hash}` || `.${hash}`);

      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash, location]);

  return (
    <>
      <LandingSection />
      <MyStory />
      <MyPurpose />
    </>
  );
}
