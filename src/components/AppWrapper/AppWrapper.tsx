import React from "react";
import { AppWrapperProps } from "./type";

export default function AppWrapper({
  children,
}: AppWrapperProps): React.FunctionComponentElement<AppWrapperProps> {
  return <div className="app h-full">{children}</div>;
}
