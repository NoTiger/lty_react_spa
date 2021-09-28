import React from "react";
import MyPurpose from "@/pages/Home/MyPurpose";
import CONSTANT from "@/__stories__/constant";

const MobileViewDefault = () => (
  <div className="iphone-8-view-port">
    <MyPurpose />
  </div>
);

export default {
  title: `${CONSTANT.HOME_PAGE}/MyPurpose`,
  component: MyPurpose,
};

export { MobileViewDefault };
