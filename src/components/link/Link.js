import React from "react";

export const Link = (props) => {
  const { text, id, url } = props;
  return (
    <a
      className="w-[343px] h-[68px] rounded-lg py-6 px-8 bg-primary mb-5 md:w-10/12 mx-auto"
      id={id}
      href={url}
      target="_blank" 
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
};
