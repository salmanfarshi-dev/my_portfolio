import React from "react";
import { IoSend } from "react-icons/io5";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { Input, Label, TextArea, Button, Spinner } from "@heroui/react";
import { GrSend } from "react-icons/gr";
import { MdOutlinePersonOutline } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { LuShieldAlert } from "react-icons/lu";


function From() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      !form.current.name.value.trim() ||
      !form.current.email.value.trim() ||
      !form.current.message.value.trim()
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_uugtnbe",
        "template_hiwi0yo",
        form.current,
        "0ux_le9MAZ5Ogu2Sp",
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        toast.error("Failed to send message.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="w-full md:w-290 lg:w-250 bg-transparent px-6 py-7 rounded-2xl overflow-hidden border border-primary shadow-[inset_0_0_55px_rgba(59,130,246,0.3)]">
        <div className="flex gap-x-4">
          <GrSend className="text-4xl text-primary drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />

          <div className="flex flex-col">
            <h3 className="text-text-primary text-2xl font-medium font-Jakarta">
              Send Me a Message
            </h3>
            <p className="text-sm text-text-secondary mt-1">
              I'll get back to you as soon as posible.
            </p>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex  flex-col mt-6 gap-4">
            <div className="flex flex-col gap-1">
              <Label
                htmlFor="input-type-name"
                className="text-white font-medium text-[16px]"
              >
                Name
              </Label>
              <div className="relative group">
                <Input
                  id="input-type-name"
                  placeholder="Your name"
                  type="text"
                  name="name"
                  className="w-full bg-transparent border border-primary/30 text-white py-3 pl-8 focus:pl-2 transition-all duration-300"
                />
                <MdOutlinePersonOutline className=" absolute top-1/2 -translate-y-1/2 left-2 text-text-secondary/80 transition-all group-focus-within:opacity-0 group-focus-within:translate-x-2" />
              </div>
            </div>
            <div className="flex flex-col gap-1 ">
              <Label
                htmlFor="input-type-email"
                className="text-white font-medium text-[16px]"
              >
                Email Address
              </Label>
              <div className="relative group">
                <Input
                  id="input-type-email"
                  placeholder="jane@example.com"
                  type="email"
                  name="email"
                  className="w-full bg-transparent border border-primary/30 text-white py-3 pl-8 focus:pl-2 transition-all duration-300"
                />
                <TfiEmail  className=" absolute top-1/2 -translate-y-1/2 left-2 text-text-secondary/80 transition-all group-focus-within:opacity-0 group-focus-within:translate-x-2 " />
              </div>
            </div>
            <div className="flex flex-col gap-1  ">
              <Label
                htmlFor="input-type-password"
                className="text-white font-medium text-[16px]"
              >
                Message
              </Label>
              <div className="relative group">
                <TextArea
                  name="message"
                  aria-label="Quick project update"
                  className="h-32 w-full bg-transparent border border-primary/30 text-white py-3 pl-8 focus:pl-2 transition-all duration-300"
                  placeholder="Enter your message"
                />
                <FaPencil  className=" absolute top-3.5 left-2 text-text-secondary/80 transition-all group-focus-within:opacity-0 group-focus-within:translate-x-2" />
              </div>
            </div>
          </div>

          <Button
            type="submit"
            isDisabled={loading}
            className="text-[16px] md:py-6.5 md:px-7 mt-5 bg-primary hover:bg-primary-hover duration-300 w-full drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
          >
            {loading ? (
              <Spinner size="sm" color="current" />
            ) : (
              <>
                <GrSend className="size-5 mr-2" />
                Send Message
              </>
            )}
          </Button>

         <div className="flex items-center mt-4 justify-center  gap-x-2">
          <LuShieldAlert className="text-primary"/>

           <p className="text-xs text-text-secondary text-center"> 
            Your information is 100% secure and will never be shared.
          </p>
         </div>
        </form>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default From;
