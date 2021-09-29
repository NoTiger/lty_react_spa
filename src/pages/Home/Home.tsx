import React from "react";
import LandingSection from "./LandingSection";
import MyPurpose from "./MyPurpose";
import MyStory from "./MyStory";

export default function Home(): React.FunctionComponentElement<any> {
  return (
    <>
      <LandingSection />
      <MyStory />
      <MyPurpose />
    </>
  );
}
