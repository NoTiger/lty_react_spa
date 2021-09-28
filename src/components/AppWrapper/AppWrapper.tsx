import React from "react";
import { AppWrapperProps } from "./type";
import Footer from "components/Footer";

export default function AppWrapper({
  children,
}: AppWrapperProps): React.FunctionComponentElement<AppWrapperProps> {
  return (
    <div className="app h-full">
      {children}
      <Footer />
    </div>
  );
}
