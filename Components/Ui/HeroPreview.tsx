import Image from "next/image";
import Blob from "../Common/Blob";
import Button from "../Common/Button";


export default function HeroPreview() {
  return (
    <section className="relative w-full container mx-auto max-w-[2000px] flex-col gap-16 md:gap md:flex-row overflow-hidden min-h-[600px]  2xl:min-h-[800px] flex items-center justify-center bg-black text-white px-6 md:px-16 py-20">
      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-12 w-full relative z-10">
        {/* Left Text Section */}
        <div className="flex-1 text-center md:text-left z-10">
          <div className="flex items-center gap-2 mb-5">
            <Image
              src="/logo/primaryWhiteLogo.svg"
              alt="Taskifi"
              width={120}
              height={28}
            />
          </div>

          <h1 className="text-3xl font-bold xl:text-[38px] text-left  font-caecilia mb-6">
            A glimpse into the future
          </h1>
        

          <p className="text-white mb-12 text-base xl:text-lg  text-left  md:max-w-sm xl:max-w-lg">
           Taskifi removes the friction from everyday work by unifying teams, tools, and tasks in one intelligent platform. Experience effortless collaboration, smart automation, and full visibility built for the future of business.
          </p>
          <Button variant="solid" href="#">
            Get Started. It's Free!
          </Button>
        </div>
      </div>

      {/* Right-side "Computer Screen" with partial view */}
      <div>
        <div
          className="md:absolute md:top-1/2 right-[-10%] md:translate-y-[-50%] h-auto w-full md:w-[55vw]  2xl:max-w-[900px] 
        2xl:max-h-[600px]  rounded-xl border-8 border-[#FFFFFF7A] backdrop-blur-sm overflow-hidden z-0 custom-shadow-blue pointer-events-none  md:block"
        >
          <img
            src="/heropreview.gif"
            alt="Taskifi Preview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
