import React from "react";
import { Label } from "../label/Label";

export const Checkbox = () => {
  return (
    <>
        <label>
            <input type="checkbox" className="mr-2 rounded-3xl border-2 border-red-600" />
            You agree to providing your data to (name) who may contact you
        </label>
    </>
  );
};
