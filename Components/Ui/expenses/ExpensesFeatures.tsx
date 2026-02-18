import Image from "next/image";
import Blob from "@/Components/Common/Blob";
import Button from "@/Components/Common/Button";

const ExpenseFeatures = ({
  mainTitle = "Lorem Ipsum is the simply dummy Text",
  mainDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,",
  features,
  buttonText = "Learn More",
  showButton = true,
}: {
  mainTitle?: string;
  mainDescription?: string;
  features: {
    subtitle?: string;
    boldText?: string;
    title: string;
    description: string | string[];  // Updated to support either string or an array of strings
    image: string;
    reverse?: boolean;
  }[];
  buttonText?: string;
  showButton?: boolean;
}) => {
  return (
    <section className="w-full ">
      <div>
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="component-heading max-w-5xl mx-auto  mb-6">
            {mainTitle}
          </h2>
          <p className="text-text-secondary 2xl:text-lg max-w-4xl mx-auto">
            {mainDescription}
          </p>
        </div>

        {/* Feature Sections */}
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row ${
              feature.reverse ? "md:flex-row-reverse" : ""
            } items-center mb-6 gap-12`}
          >
            <div className="w-full md:w-1/2 relative p-6">
              <div className="w-full z-30 relative">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={700}
                  height={500}
                  className="rounded-lg w-full shadow-2xl"
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-6 md:w-1/2">
              {feature.subtitle && (
                <h4 className="text-lg text-primary ">
                  {feature.subtitle}
                </h4>
              )}
              <h3 className="text-2xl lg:text-3xl 2xl:text-4xl md:w-[80%] font-bold  text-black">
                {feature.title}
              </h3>
              {/* Render description */}
              {Array.isArray(feature.description) ? (
                feature.description.map((desc, index) => (
                  <p key={index} className="text-text-secondary text-base 2xl:text-lg font-medium leading-relaxed ">
                    {feature.boldText && index === 0 && (
                      <span className="font-bold">{feature.boldText}</span>
                    )}
                    {desc}
                  </p>
                ))
              ) : (
                <p className="text-text-secondary text-base 2xl:text-lg font-medium leading-relaxed">
                  {feature.boldText && <span className="font-bold">{feature.boldText}</span>} 
                  {feature.description}
                </p>
              )}
              {showButton && (
                <Button variant="solid" className="w-fit" href="https://app.taskifi.io/signup">
                  {buttonText}
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpenseFeatures;
