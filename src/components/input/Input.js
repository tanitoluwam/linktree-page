import React from "react";

export const Input = ( {name} ) => {
  return (
    <div className="mb-4">
      <label htmlFor="name" className="text-gray-700 block">
        {name}
        <input
          type="text"
          id="name"
          placeholder="enter your first name"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 block rounded-lg w-full"></input>
      </label>
    </div>
  );
};
