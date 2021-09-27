import React, { useEffect, useState, useRef } from "react";
import MainMenu from "@/components/MainMenu";
import SocialMediaMenu from "@/components/SocialMediaMenu";

export default function LandingSection(): React.FunctionComponentElement<any> {
  const ref = useRef<HTMLDivElement>(null);
  const [shownMenu, setMenuShown] = useState(false);
  let observer: IntersectionObserver;

  const options = {
    threshold: 0.25,
  };

  const handleIntersection = (entries: any[]) => {
    entries.forEach(({ intersectionRatio }) => {
      if (intersectionRatio >= 0.25) {
        return setMenuShown(true);
      }
      return setMenuShown(false);
    });
  };

  useEffect(() => {
    observer = new IntersectionObserver(handleIntersection, options);
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="landing-section relative h-full" ref={ref}>
      <div className="text-block absolute poppins flex flex-col select-none">
        <span className="title text-orange">GRAZ</span>
        <span className="subtitle ml-3 text-white">
          sustainability / wellness / creativity
        </span>
      </div>
      <SocialMediaMenu className="absolute bottom-0 right-0" />
      <MainMenu shown={shownMenu} />
    </div>
  );
}
