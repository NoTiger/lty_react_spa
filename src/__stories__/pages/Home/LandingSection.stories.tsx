import React from "react";
import LandingSection from "pages/Home/LandingSection";
import { StoryRouterWrapper } from "__stories__/decorators";
import CONSTANT from "__stories__/constant";

const MobileViewDefault = () => (
  <div style={{ width: "fit-content", height: "300vh", backgroundColor: "#ccc" }}>
    <div className="iphone-8-view-port">
      <LandingSection />
    </div>
  </div>
);

export default {
  title: `${CONSTANT.HOME_PAGE}/LandingSection`,
  component: LandingSection,
  decorators: [StoryRouterWrapper],
};

export { MobileViewDefault };
