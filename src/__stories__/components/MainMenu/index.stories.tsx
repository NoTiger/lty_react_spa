import React from "react";
import { Meta, Story } from "@storybook/react";
import MainMenu, { MainMenuProps } from "components/MainMenu";
import { StoryRouterWrapper } from "__stories__/decorators";
import CONSTANT from "__stories__/constant";

const Template: Story<MainMenuProps> = (args) => <MainMenu {...args} />;

const Default = Template.bind({});
Default.args = {
  shown: false,
};

const Shown = Template.bind({});
Shown.args = {
  shown: true,
};

export default {
  title: `${CONSTANT.COMPONENTS}/MainMenu`,
  component: MainMenu,
  decorators: [StoryRouterWrapper],
  argTypes: {
    shown: { options: [true, false] },
  },
} as Meta;

export { Default, Shown };
