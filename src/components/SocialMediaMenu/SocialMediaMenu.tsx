import React from "react";
import {
  FacebookIc,
  InstagramIc,
  LinkedInIc,
  YoutubeIc,
} from "components/icons";
import CONSTANT from "constant";
import { SocialMediaMenuProps } from "./type";

export default function SocialMediaMenu({
  className = "",
}: SocialMediaMenuProps) {
  return (
    <div
      className={["social-media-menu inline-block z-10 mb-5 mr-2.5", className].join(
        " "
      )}
    >
      <a href={CONSTANT.SOCIAL_MEDIA_LINKS.facebook}>
        <FacebookIc className="mb-7" />
      </a>
      <a href={CONSTANT.SOCIAL_MEDIA_LINKS.instagram}>
        <InstagramIc className="mb-7" />
      </a>
      <a href={CONSTANT.SOCIAL_MEDIA_LINKS.linkedIn}>
        <LinkedInIc className="mb-7" />
      </a>
      <a href={CONSTANT.SOCIAL_MEDIA_LINKS.youtube}>
        <YoutubeIc />
      </a>
    </div>
  );
}
