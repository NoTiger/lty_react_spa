import React from "react";
import Button from "components/Button";
import BlurTextBlock from "components/BlurTextBlock";
import LogoHeader from "components/LogoHeader";
import myStory from "images/myStory.jpg";

export default function MyStory() {
  const content = `In 2014, Graz took an unconventional path to travel around the world with only 2,000 HKD in her pocket.
   She was desperate to see the real world from the ground up--- the only vantage point from which it can be truly understood, socially, economically and politically. 
  This nomadic adventure has forever tuned the tone of her future.`;

  function onClick() {
    return console.log("click");
  }

  return (
    <div className="my-story relative bg-white h-full">
      <div className="relative flex flex-col z-10">
        <LogoHeader title="MY STORY" />
        <div className="flex justify-end">
          <BlurTextBlock content={content} />
        </div>
        <div className="flex justify-end mt-12">
          <Button text="Say Hi" onClick={onClick} />
        </div>
      </div>
      <div className="img-block absolute">
        <img className="relative z-0" alt="look up" src={myStory} />
      </div>
    </div>
  );
}
