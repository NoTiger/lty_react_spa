import React from "react";
import Contact from "pages/Contact";
import AppWrapper from "components/AppWrapper";
import { StoryRouterWrapper } from "__stories__/decorators";
import CONSTANT from "__stories__/constant";

const MobileViewDefault = () => (
  <div className="iphone-8-view-port">
    <AppWrapper>
      <Contact />
    </AppWrapper>
  </div>
);

const storyConfig = {
  title: `${CONSTANT.CONTACT_PAGE}/Contact`,
  component: Contact,
  decorators: [StoryRouterWrapper],
};

export default storyConfig;

export { MobileViewDefault };
