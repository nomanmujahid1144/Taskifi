import Image from "next/image";
import Blob from "@/Components/Common/Blob";

const templateTypes = [
  "Documents",
  "Tasks",
  "Projects",
  "Lists",
  "Checklists",
  "Whiteboards",
];

const TemplateCenter = () => {
  return (
    <section className="bg-white relative text-gray-800 pb-16">
      <div className="flex flex-col items-center gap-20 max-w-7xl mx-auto px-4">

        <div className="w-[3px] md:flex hidden h-full top-1/2 -translate-y-1/2 bg-primary absolute left-1/2 transform -translate-x-1/2  flex-col items-center  justify-evenly ">
        <div className="bg-primary p-4 flex justify-center absolute top-42 items-center h-10 w-10  text-lg font-bold  rounded-full text-white">1</div>
        <div className="bg-primary rounded-full absolute bottom-56 flex justify-center items-center h-10 w-10 text-lg font-bold p-4 text-white">2</div>
        </div>
        {/* First Section */}
        <div className="flex flex-col md:flex-row w-full justify-between items-start gap-12">
          {/* List */}
          <div className="flex-1 max-w-md space-y-8">
            <h3 className="text-2xl font-semibold mb-4">Template Types:</h3>
            <ul className="space-y-4">
              {templateTypes.map((type, index) => (
                <li key={type} className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-semibold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-lg">{type}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="flex-1 relative max-w-md flex justify-center lg:justify-start">
            <Blob
              size={500}
              colors={["from-primary", "to-secondary"]}
              position=" bottom-0 right-0"
              className="absolute hidden md:block opacity-10"
            />

            <Image
              src="/ProjectManagement/cardElement.png"
              alt="Analytics graph showing contributing members"
              width={400}
              height={300}
              className="rounded-xl z-30"
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row-reverse w-full justify-between items-start gap-12">
          {/* List */}
          <div className="flex-1 max-w-md space-y-8">
            <h3 className="text-2xl font-semibold mb-4">Template Types:</h3>
            <ul className="space-y-4">
              {templateTypes.map((type, index) => (
                <li key={type} className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-semibold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-lg">{type}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="flex-1 relative max-w-md flex justify-center lg:justify-start">
            <Blob
              size={400}
              colors={["from-primary", "to-secondary"]}
              position=" bottom-0 left-1/2 transform -translate-x-1/2"
              className="absolute hidden md:block opacity-20"
            />

            <Image
              src="/ProjectManagement/cardElement.png"
              alt="Analytics graph showing contributing members"
              width={400}
              height={300}
              className="rounded-xl z-30"
            />
          </div>
        </div>
      </div>
    </section>
  );
};


export default TemplateCenter;
