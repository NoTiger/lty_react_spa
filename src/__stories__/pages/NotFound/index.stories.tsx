import React from "react";
import NotFound from "pages/NotFound";
import CONSTANT from "__stories__/constant";

const Default = () => <NotFound />;

const storyConfig = {
  title: `${CONSTANT.HOME_PAGE}/NotFound`,
  component: NotFound,
};

export default storyConfig;

export { Default };
