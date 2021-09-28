import React from "react";
import { OptionsType } from "./type";

export default function StroyWrapper(
  story: Function,
  { className = "" }: OptionsType
) {
  return <div className={`story-wrapper ${className}`}>{story()}</div>;
}
