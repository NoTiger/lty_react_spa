import React from "react";
import LandingSection from "../../components/LandingSection";
import MyPurpose from "./MyPurpose";
import MyStory from "./MyStory";
import CONSTANT from "constant";

export default function Home(): React.FunctionComponentElement<any> {
  const { title, description } = CONSTANT.HOME_PAGE.LANDING_SECTION;

  return (
    <>
      <LandingSection title={title} description={description} />
      <MyStory />
      <MyPurpose />
    </>
  );
}
