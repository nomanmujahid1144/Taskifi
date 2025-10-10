import Button from "../Common/Button";
import Image from "next/image";
export default function ContactForm() {
  return (
    <section className=" px-4  relative">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className=" text-primary font-semibold uppercase tracking-wide">
          Contact Us
        </p>
        <h2 className="component-heading  mt-2">
          We'd like to hear from you
        </h2>
      </div>

      <div className="max-w-5xl mx-auto bg-white px-4 md:px-8 py-8 rounded-xl shadow-2xl ring-1 ring-gray-100">
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block font-medium text-gray-800 mb-1">Name</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full border border-gray-300  rounded-md px-4 py-2"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium text-gray-800 mb-1">Email address</label>
            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block font-medium text-gray-800 mb-1">Company name</label>
            <input
              type="text"
              placeholder="Company name"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block font-medium text-gray-800 mb-1">Message</label>
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          {/* Button */}
          <div>
           <Button
           type="submit"
           variant="solid"
           className="w-full md:w-fit"
           >
            Send Message
           </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
