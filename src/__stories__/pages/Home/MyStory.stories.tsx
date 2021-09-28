import React from "react";
import MyStory from "pages/Home/MyStory";
import CONSTANT from "__stories__/constant";

const MobileViewDefault = () => (
  <div className="iphone-8-view-port h-auto">
    <MyStory />
  </div>
);

export default {
  title: `${CONSTANT.HOME_PAGE}/MyStory`,
  component: MyStory,
};

export { MobileViewDefault };
