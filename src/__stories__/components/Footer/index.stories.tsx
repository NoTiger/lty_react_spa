import React from "react";
import Footer from "components/Footer";
import { StoryRouterWrapper } from "__stories__/decorators";
import CONSTANT from "__stories__/constant";

const MobileViewDefault = () => (
  <div className="iphone-8-view-port h-auto">
    <Footer />
  </div>
);

const storyConfig = {
  title: `${CONSTANT.COMPONENTS}/Footer`,
  component: Footer,
  decorators: [StoryRouterWrapper],
};

export default storyConfig;

export { MobileViewDefault };
