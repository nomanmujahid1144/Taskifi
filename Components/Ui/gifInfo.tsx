import Image from "next/image";
import Button from "../Common/Button";
import Blob from "../Common/Blob";

export default function gifInfo() {
  return (
    <section className=" ">
      <div className=" grid grid-cols-1 lg:grid-cols-2 items-start gap-12">
        {/* Text Content */}
        <div>
          <h1 className="text-3xl md:text-4xl 2xl:text-[40px] font-bold leading-snug text-text-primary font-caecilia mb-6">
            It’s not about doing more. It’s about doing what matters—smarter.
          </h1>
          <p className="text-text-secondary mb-4">
            Taskifi isn’t just another management tool. It’s your AI-powered
            partner for planning, tracking, and growing without the guesswork.
          </p>
          <p className="text-gray-600 mb-6">Work flows better when it thinks with you.</p>

          <form className="flex flex-col justify-center items-start w-full gap-6">
            <input
              type="email"
              placeholder="abc@gmail.com"
              className="border border-primary px-4 py-3 md:w-[70%] w-full rounded-md  flex-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div className="flex gap-2">
              <Button variant="solid" href="https://app.taskifi.io/signin">
                Sign In
              </Button>
            </div>
          </form>
        </div>

        {/* Testimonial cards image */}
        <div className="flex justify-center relative">
          <Image
            src="/ref-testimonials-cards.png"
            alt="Taskifi testimonials"
            width={600}
            height={400}
            className="rounded-xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
