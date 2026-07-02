import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Arrow() {
  return (
    <>
     <div className="hidden md:block">
         <button
        className=" prev-btn absolute -left-9 top-1/2 -translate-y-1/2 -translate-x-6 z-20
        w-12 h-12 rounded-full bg-primary/20 border border-primary
        backdrop-blur-md hover:bg-primary transition flex items-center justify-center"
      >
        <FaArrowLeft />
      </button>
     </div>

      <div className="hidden md:block">
        <button
        className=" next-btn absolute -right-5 top-1/2 -translate-y-1/2 translate-x-6 z-20
        w-12 h-12 rounded-full bg-primary/20 border border-primary
        backdrop-blur-md hover:bg-primary transition flex items-center justify-center"
      >
        <FaArrowRight />
      </button>
      </div>
    </>
  );
}

export default Arrow;