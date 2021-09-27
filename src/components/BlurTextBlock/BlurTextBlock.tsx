import React from "react";
import { BlurTextBlockProps } from "./type";

export default function BlurTextBlock({ content }: BlurTextBlockProps) {
  return <div className="blur-text-block text-grey-font p-6">{content}</div>;
}
