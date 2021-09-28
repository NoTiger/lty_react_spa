import React from "react";
import Home from "pages/Home";
import AppWrapper from "components/AppWrapper";
import { StoryRouterWrapper } from "__stories__/decorators";
import CONSTANT from "__stories__/constant";

const MobileViewDefault = () => (
  <div className="iphone-8-view-port">
    <AppWrapper>
      <Home />
    </AppWrapper>
  </div>
);

const storyConfig = {
  title: `${CONSTANT.HOME_PAGE}/Home`,
  component: Home,
  decorators: [StoryRouterWrapper],
};

export default storyConfig;

export { MobileViewDefault };
