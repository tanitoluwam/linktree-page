import React from "react";
import { Input } from "../input/Input";

export const Contact = () => {
  return (
    <form className="flex flex-col py-16 w-[375px] h-[884px] text-start px-2">
      <h1 className="text-4xl text-tertiary font-semibold pb-4">Contact Me</h1>
      <p className="font-normal text-lg text-secondary pb-12">
        Hi there, contact me to ask me about anything you have in mind.{" "}
      </p>
      <div>
        <Input name="First name" />
       <Input name="Last Name" />
      </div>
      <Input name="Email"/>
      <div>
        <label htmlFor="message" className="text-gray-700">
          Message
          <textarea
            type="text"
            id="message"
            placeholder="Send me a message and i'll reply you as soon as possible"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 block  w-full h-[200px]"
          />
        </label>
      </div>
      <div>
        <label for="vehicle1">You agree to giving </label>
      </div>
    </form>
  );
};
