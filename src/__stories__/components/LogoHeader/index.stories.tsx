import React from "react";
import LogoHeader from "components/LogoHeader";
import CONSTANT from "__stories__/constant";

const Default = () => <LogoHeader title="The Example" />;

const storyConfig = {
  title: `${CONSTANT.COMPONENTS}/LogoHeader`,
  component: LogoHeader,
  decorators: [
    (story: Function) => <div className="iphone-8-view-port">{story()}</div>,
  ],
};

export default storyConfig;

export { Default };
