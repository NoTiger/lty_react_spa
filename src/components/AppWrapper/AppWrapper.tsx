import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AppWrapperProps } from "./type";
import Footer from "components/Footer";
import { scrollTop } from "utils";

export default function AppWrapper({
  children,
}: AppWrapperProps): React.FunctionComponentElement<AppWrapperProps> {
  const location = useLocation();
  const { pathname, hash } = location;
  const id = hash.substr(1);

  useEffect(() => {
    scrollTop();

    if (id) {
      const targetElement = document.querySelector(`#${id}` || `.${id}`);

      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [id, pathname]);

  return (
    <div className="app h-full">
      {children}
      <Footer />
    </div>
  );
}
