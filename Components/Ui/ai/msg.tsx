import React from "react";

type MsgProps = {
  content?: React.ReactNode;
};

function Msg({
  content = "From the creators of Taskifi.io Where pioneering AI solutions meets superior web performance.",
}: MsgProps) {
  return (
    <div className="bg-white relative  lg:py-12 lg:px-12 px-6 py-8 rounded-4xl lg:rounded-[40px] max-w-[80%]">
      <svg
        viewBox="0 0 53 46"
        className="absolute bottom-0 size-8 lg:size-12  -left-[5px] lg:-left-[9px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.49905 1.31055H52.4962C52.2282 25.6568 32.4088 45.3105 7.99905 45.3105H0.90625C6.51972 36.2648 9.49905 25.8252 9.49905 15.1672V1.31055Z"
          fill="white"
          stroke="#ffffff"
        />
      </svg>
      <p className="font-bold  lg:text-[28px] text-text-secondary flex gap-2">
        {content}
      </p>
    </div>
  );
}

export default Msg;
