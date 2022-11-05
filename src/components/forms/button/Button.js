import React from "react";

export const Button = ({ text }) => {
  return (
    <button
      id="btn__submit"
      className="text-white bg-complimentary py-3 px-5 rounded-lg  hover:bg-blue-800 disabled:bg-sky-300"
    >
      {text}
    </button>
  );
};
