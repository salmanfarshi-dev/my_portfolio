import React from "react";
import { IoSend } from "react-icons/io5";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { Input, Label, TextArea, Button, Spinner } from "@heroui/react";

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
      <div className="w-full md:w-250 bg-bg-card px-4 py-7 rounded-2xl shadow-[0_0_20px_rgba(255,255,250,0.1)] overflow-hidden" >
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex  flex-col gap-4">
            <div className="flex flex-col gap-1">
              <Label
                htmlFor="input-type-name"
                className="text-white font-medium text-xl"
              >
                Name
              </Label>
              <Input
                id="input-type-name"
                placeholder="Your name"
                type="text"
                name="name"
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <Label
                htmlFor="input-type-email"
                className="text-white font-medium text-xl"
              >
                Email
              </Label>
              <Input
                id="input-type-email"
                placeholder="jane@example.com"
                type="email"
                name="email"
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-1  ">
              <Label
                htmlFor="input-type-password"
                className="text-white font-medium text-xl"
              >
                Message
              </Label>
              <TextArea
                name="message"
                aria-label="Quick project update"
                className="h-32 w-full"
                placeholder="Enter your message"
              />
            </div>
          </div>
          <div className="text-center">
            <Button
              type="submit"
              isDisabled={loading}
              className="text-[16px] md:py-5 md:px-7 mt-5 bg-primary hover:bg-primary-hover duration-300"
            >
              {loading ? (
                <Spinner size="sm" color="current" />
              ) : (
                <>
                  Send Message <IoSend />
                </>
              )}
            </Button>
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
