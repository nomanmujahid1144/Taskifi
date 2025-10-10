import React from "react";

type PillProps = {
  content?: React.ReactNode;
};

function Pill({ content = "Enhance your AI interface with Taskifi." }: PillProps) {
  return (
    <div className=" inline-flex w-fit max-w-[80%] items-center gap-2 lg:gap-4 border-white text-white bg-[#03001480] border lg:px-8 lg:py-4 px-5 py-3 lg:text-2xl  rounded-full">
      <div>
        <svg
          width="39"
          height="39"
          className="lg:w-9 lg:h-9 h-6 w-6"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5 0V19.0851H0L1.7066 18.5979C10.0475 16.2169 16.5695 9.83369 19.0022 1.67029L19.5 0Z"
            fill="#4919DD"
          />
          <path
            d="M19.5 39V19.0851H0L1.75948 19.6092C10.0679 22.0841 16.5118 28.5369 18.8497 36.723L19.5 39Z"
            fill="#4919DD"
          />
          <path
            d="M19.5 0V19.0851H39L37.2934 18.5979C28.9525 16.2169 22.4305 9.83369 19.9978 1.67029L19.5 0Z"
            fill="#4919DD"
          />
          <path
            d="M19.5 39V19.0851H39L37.2405 19.6092C28.9321 22.0841 22.4882 28.5369 20.1503 36.723L19.5 39Z"
            fill="#4919DD"
          />
        </svg>
      </div>
      <p>{content}</p>
    </div>
  );
}

export default Pill;
