import React from "react";
import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from "components/Button";
import CONSTANT from "__stories__/constant";

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

const Default = Template.bind({});
Default.args = {
  text: "Say Hi",
  onClick: () => {
    console.log("hello");
  },
};

export default {
  title: `${CONSTANT.COMPONENTS}/Button`,
  component: Button,
  decorators: [(story) => <div className="bg-white">{story()}</div>],
} as Meta;

export { Default };
