import React from "react";
import { Story } from "@storybook/react";
import LandingSection, { LandingSectionProps } from "components/LandingSection";
import MyStory from "pages/Home/MyStory";
import { StoryRouterWrapper } from "__stories__/decorators";
import STORY_CONSTANT from "__stories__/constant";
import CONSTANT from "constant";

const Template: Story<LandingSectionProps> = (args) => (
  <div className="iphone-8-view-port">
    <LandingSection {...args} />
    <MyStory />
  </div>
);

const MobileDefault = Template.bind({});

const {
  title: mobileDefaultTitle,
  description: mobileDefaultDescription,
} = CONSTANT.HOME_PAGE.LANDING_SECTION;

MobileDefault.args = {
  title: mobileDefaultTitle,
  description: mobileDefaultDescription,
};

const MobileExperience = Template.bind({});
MobileExperience.args = {
  className: "experience",
  title: CONSTANT.EXPERIENCE.LANDING_SECTION.title,
};

const MobileGallery = Template.bind({});
MobileGallery.args = {
  className: "gallery",
  title: CONSTANT.GALLERY.LANDING_SECTION.title,
};

const storyConfig = {
  title: `${STORY_CONSTANT.COMPONENTS}/LandingSection`,
  component: LandingSection,
  decorators: [StoryRouterWrapper],
};

export default storyConfig;

export { MobileDefault, MobileExperience, MobileGallery };
