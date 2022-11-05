import React from "react";
import { Button } from "../button/Button";
import { Checkbox } from "../shared/checkbox/Checkbox";
import { Input } from "../shared/input/Input";
import { Label } from "../shared/label/Label";
import { Textarea } from "../shared/textarea/Textarea";

export const Contact = () => {
  return (
    <form className="flex flex-col py-16 w-full text-start md:w-[70%] lg:w-[55%] md:mx-auto md:flex md:flex-col px-8">
      <h1 className="text-4xl text-tertiary font-semibold pb-4">Contact Me</h1>
      <p className="font-normal text-lg text-secondary pb-12">
        Hi there, contact me to ask me about anything you have in mind.
      </p>
      <div className="md:flex md:justify-between space-x-0 md:space-x-5 md:mb:6">
        <div className="w-full md:w-1/2">
          <Input
            placeholder="Enter your first name"
            id="first_name"
            label="First name"
          />
        </div>
        <div className="w-full md:w-1/2">
          <Input
            placeholder="Enter your last name"
            id="last_name"
            label="Last name"
          />
        </div>
      </div>

      <Input
        placeholder="yourname@email.com"
        id="email"
        type="email"
        label="Email"
      />

      <div>
        <Label name="Message" />
        <Textarea />
      </div>

      <div className="mt-6 mb-8">
        <Checkbox />
      </div>

      <Button text="send message" />
    </form>
  );
};
