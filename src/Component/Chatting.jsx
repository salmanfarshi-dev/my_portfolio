import { Button } from "@heroui/react";
import { FaWhatsapp } from "react-icons/fa";


function Chatting() {
  return (
     <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      <a
        href="https://wa.me/8801712345678?text=Hi%20Salman!"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="hidden md:block px-5 rounded-full bg-bg-card text-white  shadow-[0_0_10px_rgba(255,255,255,0.4)] hover:bg-primary/20 transition">
          Chat with Me 👋
        </Button>
      </a>

      <a
        href="https://wa.me/8801610809741?text=Hi%20Salman!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20with%20you."
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          isIconOnly
          className="w-10 md:w-14 h-10 md:h-14 rounded-full bg-primary text-white shadow-lg hover:bg-primary-hover transition"
        >
          <FaWhatsapp className="size-4 md:size-7.5" />
        </Button>
      </a>
    </div>
  );
}

export default Chatting;
