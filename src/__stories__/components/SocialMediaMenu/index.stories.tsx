import React from "react";
import SocialMediaMenu from "@/components/SocialMediaMenu";
import { StoryWrapper } from "@/__stories__/decorators";
import CONSTANT from "@/__stories__/constant";

const Default = () => <SocialMediaMenu />;

export default {
  title: `${CONSTANT.COMPONENTS}/SocialMediaMenu`,
  component: SocialMediaMenu,
  decorators: [StoryWrapper],
};

export { Default };
