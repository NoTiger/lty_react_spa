import React from "react";
import SocialMediaMenu from "components/SocialMediaMenu";
import { StoryWrapper } from "__stories__/decorators";
import CONSTANT from "__stories__/constant";

const Default = () => (
  <div className="bg-grey-font p-5">
    <SocialMediaMenu />
  </div>
);

const storyConfig = {
  title: `${CONSTANT.COMPONENTS}/SocialMediaMenu`,
  component: SocialMediaMenu,
  decorators: [StoryWrapper],
};

export default storyConfig;

export { Default };
