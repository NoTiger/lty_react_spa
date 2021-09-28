import React from "react";
import LandingSection from "pages/Home/LandingSection";
import MyStory from "pages/Home/MyStory";
import { StoryRouterWrapper } from "__stories__/decorators";
import CONSTANT from "__stories__/constant";

const MobileViewDefault = () => (
  <div className="iphone-8-view-port">
    <LandingSection />
    <MyStory />
  </div>
);

const storyConfig = {
  title: `${CONSTANT.HOME_PAGE}/LandingSection`,
  component: LandingSection,
  decorators: [StoryRouterWrapper],
};

export default storyConfig;

export { MobileViewDefault };
