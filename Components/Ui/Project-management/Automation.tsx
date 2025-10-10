import Image from "next/image";
import Button from "@/Components/Common/Button";
import { FC } from "react";

interface AutomationBlockProps {
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
  reverse?: boolean;
}

const AutomationBlock: FC<AutomationBlockProps> = ({
  imageSrc,
  alt,
  title,
  description,
  reverse = false,
}) => (
  <div
    className={`flex flex-col md:flex-row ${
      reverse ? "md:flex-row-reverse" : ""
    } items-center gap-8`}
  >
    <div className="flex justify-center md:w-1/2 w-full">
      <Image src={imageSrc} alt={alt} width={350} height={200} />
    </div>
    <div className="flex flex-col items-start gap-4 md:w-1/2 w-full text-center md:text-left">
      <h3 className="text-3xl font-bold text-center md:text-left w-full">
        {title}
      </h3>
      <p className="text-text-secondary text-lg">{description}</p>
    </div>
  </div>
);

const AutomationsComponent: FC = () => {
  return (
    <section className="py-16 px-4 md:px-6 bg-white text-gray-900">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="component-heading mb-2">
          Explore even more automations that{" "}
          <span className="text-indigo-600 font-bold">Taskifi.io</span> has to
          offer
        </h2>
      </div>

      <div className="grid gap-16 mt-12">
        <AutomationBlock
          imageSrc="/ProjectManagement/card1.png"
          alt="Task update chart"
          title="Stay aligned without the noise"
          description="Get real-time alerts when tasks are completed or deadlines shift—so your team’s always on the same page, without the endless email chains."
        />
        <AutomationBlock
          imageSrc="/ProjectManagement/card2.png"
          alt="Automation analytics graph"
          title="Save hours with custom automations"
          description="Skip the meetings, ditch the status updates. Set rules once and let Taskifi handle the rest—from assigning tasks to sending reminders."
          reverse
        />
        <AutomationBlock
          imageSrc="/ProjectManagement/card3.png"
          alt="Workspace automation view"
          title="Let automation handle the heavy lifting."
          description="Reclaim time across your entire workflow. Whether it's approvals, task routing, or follow-ups—Taskifi runs it in the background, 24/7."
        />
      </div>

      <div className="mt-32 text-center">
        <h4 className="text-3xl font-semibold mb-4">
          Try Taskifi.io with your team
        </h4>
        <p className="text-gray-500 mb-4 text-lg">
          No credit card. No setup hassle. Just instant clarity.
        </p>
        <div className="flex justify-center">
          <Button variant="solid" href="#" >
            Get started – it's free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AutomationsComponent;
