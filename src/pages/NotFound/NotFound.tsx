import React from "react";
import { NotFoundIc } from "components/icons";

export default function NotFound(): React.FunctionComponentElement<any> {
  return (
    <div className="flex flex-col justify-center items-center">
      <NotFoundIc className="text-9xl" />
      <div className="text-2xl text-center">
        <span className="text-4xl">Not Found</span>
        <br />
        The page you were looking for was not found.
      </div>
    </div>
  );
}
