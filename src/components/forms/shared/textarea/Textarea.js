import React from "react";

export const Textarea = () => {
  return (
    <textarea
      type="text"
      id="message"
      placeholder="Send me a message and i'll reply you as soon as possible"
      className="mt-1  px-3 py-2 bg-white border shadow-sm border-slate-300 rounded-lg placeholder-slate-400 block  w-full h-[140px]"
    />
  );
};
