import React from "react";
import { Input, Label, TextArea } from "@heroui/react";
import {Button} from "@heroui/react";

function From() {
  return (
    <>
      <div className="w-full md:w-250 bg-bg-card px-4 py-7 rounded-2xl shadow-[0_0_20px_rgba(255,255,250,0.1)] overflow-hidden">
       <form action="">
         <div className="flex w-80 flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Label
              htmlFor="input-type-email"
              className="text-white font-medium text-xl"
            >
              Name
            </Label>
            <Input
              id="input-type-email"
              placeholder="Your name"
              type="name"
              className="md:w-120"
            />
          </div>
          <div className="flex flex-col gap-1 ">
            <Label
              htmlFor="input-type-number"
              className="text-white font-medium text-xl"
            >
              Email
            </Label>
            <Input
              id=""
              placeholder="jane@example.com"
              type="email"
              className="md:w-120"
            />
          </div>
          <div className="flex flex-col gap-1  ">
            <Label
              htmlFor="input-type-password"
              className="text-white font-medium text-xl"
            >
              Password
            </Label>
            <TextArea
              aria-label="Quick project update"
              className="h-32 md:w-120"
              placeholder="Enter your message"
            />
          </div>
        </div>
 <Button>
        
        Search
      </Button>

       </form>
      </div>
    </>
  );
}

export default From;
