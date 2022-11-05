import React from "react";
import { Label } from "../label/Label";

export const Input = ({ placeholder, id, type, hasLabel, label }) => {
  return (
    <div className="mt-1 mb-6">
      {hasLabel && <Label name={label} id={id} />}
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 block rounded-lg w-full"
      />
    </div>
  );
};

Input.defaultProps = {
  hasLabel: true,
  type: "text"
}



