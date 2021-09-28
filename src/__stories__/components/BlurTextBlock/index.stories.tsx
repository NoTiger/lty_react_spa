import React from "react";
import { Meta, Story } from "@storybook/react";
import BlurTextBlock, { BlurTextBlockProps } from "components/BlurTextBlock";
import CONSTANT from "__stories__/constant";

const Template: Story<BlurTextBlockProps> = (args) => (
  <>
    <div className="absolute text-orange" style={{ backgroundColor: "#ccc" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      mattis sodales sapien a lacinia. Mauris eu pulvinar ante, ac pretium ex.
      Vestibulum non e
    </div>
    <BlurTextBlock {...args} />
  </>
);

const Default = Template.bind({});
Default.args = {
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium, odio in volutpat consectetur, 
    enim mauris fringilla diam, vel interdum risus erat quis libero. Integer 
    mattis at sem non condimentum. Vivamus dui neque, suscipit nec fringilla 
    molestie, pellentesque id nulla. Orci varius natoque penatibus et magnis dis 
    parturient montes, nascetur ridiculus mus. Nullam convallis dapibus mi, id condimentum 
    odio tristique eget. Integer at est tincidunt, euismod nisl ac, sodales odio. Aenean 
    mollis orci id ullamcorper mollis. Aliquam ut egestas nibh, nec vestibulum risus. Cras 
    porttitor mauris lacus, a dictum mi egestas id.`,
};

export default {
  title: `${CONSTANT.COMPONENTS}/BlurTextBlock`,
  component: BlurTextBlock,
  decorators: [(story) => <div className="bg-white">{story()}</div>],
} as Meta;

export { Default };
