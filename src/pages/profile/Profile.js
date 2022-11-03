import React from "react";
import { UserAvatar } from "../../components/userAvatar/UserAvatar";
import { LinkRow } from "../../components/linkRow/LinkRow";
import { Socials } from "../../components/socials/Socials";

export const Profile = () => {
  return (
    <div className="bg-white mx-auto mt-20 w-[375px] h-[812px] flex flex-col justify-center md:w-full">
      <UserAvatar />
      <LinkRow />
      <Socials />
    </div>
  );
};
