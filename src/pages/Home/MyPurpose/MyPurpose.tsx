import React from "react";
import BlurTextBlock from "components/BlurTextBlock";
import LogoHeader from "components/LogoHeader";

export default function MyPurpose() {
  const contents = [
    "What was most devastating to see is that, everywhere she travelled, the aftermath of plastics were present. A few rural villages she visited in Myanmar were surrounded by garbage incineration plantations which were releasing toxic smoke. In the southern part of Sri Lanka, farmers’ plantations are growing on 30 years of garbage and many died of pulmonary.",
    "It seems inevitable to avoid the plastics catastrophe. Humans have loose control, but she also believed this germination of bliss access to knowledge, networks and resources like no other generation had before if used creatively.. or at least mitigate it.",
    <>
      After that, She spent half of a decade researching and developing a
      plastic alternative and finally developed an innovative bio-plastics that
      could resolve plastic problems at scale --{" "}
      <a className="text-orange" href="https://www.blastik.com/">
        BlastiK
      </a>
      .
    </>,
    "This is just the beginning of the plastic revolution, she aims to partner with global leaders across sectors to help drive the policy, market and technological changes required for a plastics to bio-plastics transition.",
  ];

  return (
    <div className="my-purpose relative bg-white h-full">
      <div className="relative flex flex-col z-10">
        <LogoHeader title="MY PURPOSE" />
        <div className="flex justify-center mb-8">
          <BlurTextBlock content={contents[0]} />
        </div>
      </div>
      <div>
        <img
          id="img-against-wall"
          alt="against wall"
          src="@images/againstWall.png"
        />
      </div>
      <div className="flex justify-center">
        <BlurTextBlock content={contents[1]} />
      </div>
      <div className="flex justify-center mb-8">
        <BlurTextBlock content={contents[2]} />
      </div>
      <div className="mb-8">
        <img
          id="img-blastik-promo"
          alt="blastik promotion"
          src="@images/blastikPromo.png"
        />
      </div>
      <div className="relative flex justify-center ml-3 z-10">
        <BlurTextBlock content={contents[3]} />
      </div>
      <div className="pb-8">
        <img
          id="img-yolo"
          className="z-0"
          alt="yolo photographer"
          src="@images/yolo.png"
        />
      </div>
    </div>
  );
}
