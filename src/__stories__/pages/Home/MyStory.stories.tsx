import React from "react";
import MyStory from "pages/Home/MyStory";
import CONSTANT from "__stories__/constant";

const MobileViewDefault = () => (
  <div className="iphone-8-view-port h-full">
    <MyStory />
  </div>
);

const storyConfig = {
  title: `${CONSTANT.HOME_PAGE}/MyStory`,
  component: MyStory,
};

export default storyConfig;

export { MobileViewDefault };
