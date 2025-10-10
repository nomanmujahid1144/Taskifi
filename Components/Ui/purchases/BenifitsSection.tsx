import clsx from "clsx";

interface Benefit {
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  percentage: string;
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  title: string;
  description: string;
  benefits: Benefit[];
  imageUrl?: string;
  primarySpan?: boolean;
}

export default function BenefitsSection({
  title,
  description,
  benefits,
  imageUrl,
  primarySpan = true, // Default is true
}: BenefitsSectionProps) {
  return (
    <section className="w-full">
      <div className="text-center">
        <h2 className="component-heading max-w-xl mx-auto font-bold text-gray-900">
          {title}
        </h2>
        <p className="text-gray-500 mt-6 max-w-lg 2xl:max-w-2xl 2xl:text-lg mx-auto">
          {description}
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-stretch justify-between md:gap-24 mt-16">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={index}
                className={clsx(
                  "flex relative items-start p-4 rounded-xl shadow-[0px_4px_40px_0px_#2B59FF14] overflow-hidden border border-[#EEEEEE] bg-white",
                  primarySpan && "pl-8" // Add left padding only if primarySpan is true
                )}
              >
                {primarySpan && <span className="h-full w-4 bg-primary absolute top-0 left-0"></span>}
                <div
                  className={clsx(
                    "flex items-center justify-center rounded-md mr-4 shrink-0 aspect-square w-12 md:w-16", // ✅ Square fix
                    benefit.iconBg
                  )}
                >
                  <Icon className={clsx("text-2xl md:text-3xl", benefit.iconColor)} />
                </div>
                <div>
                  <span className={clsx("text-4xl font-bold", benefit.iconColor)}>
                    {benefit.percentage}
                  </span>
                  <h3 className="text-lg font-semibold mt-3 text-text-primary">
                    {benefit.title}
                  </h3>
                  <p className="text-text-secondary md:w-2/3 mt-2">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {imageUrl && (
          <div className="hidden md:flex justify-end w-full md:w-1/2   mt-6 md:mt-0 md:ml-6">
            <img
              src={imageUrl}
              alt="image"
              className="w-[80%] h-full object-contain"
            />
          </div>
        )}
      </div>
    </section>
  );
}
