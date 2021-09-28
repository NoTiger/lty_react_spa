import React from "react";
import LogoHeader from "@/components/LogoHeader";
import CONSTANT from "@/__stories__/constant";

const Default = () => <LogoHeader title="The Example" />;

export default {
  title: `${CONSTANT.COMPONENTS}/LogoHeader`,
  component: LogoHeader,
  decorators: [
    (story: Function) => <div className="iphone-8-view-port">{story()}</div>,
  ],
};

export { Default };
