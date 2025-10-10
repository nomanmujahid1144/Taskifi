// types (optional) — match your StepsGrid prop
export type Step = {
  title: string;
  desc: string;
};

/* -------------------- Marketing (top dotted box) -------------------- */
export const marketingSteps: Step[] = [
  {
    title: "Campaign Optimization",
    desc: "Analyze performance data in real-time to automatically adjust ad placements, copy, and budgets—maximizing ROI across every channel.",
  },
  {
    title: "Audience Segmentation",
    desc: "Leverage AI to cluster customers based on behavior, preferences, and demographics—enabling precise targeting and personalized outreach.",
  },
  {
    title: "Content Generation",
    desc: "Automatically generate high-converting copy, social media posts, and email sequences using generative AI tailored to your brand voice.",
  },
  {
    title: "Lead Scoring",
    desc: "Predict which leads are most likely to convert using historical interaction data—helping sales teams prioritize and close faster.",
  },
  {
    title: "Marketing Forecasting",
    desc: "We clean, process, and structure your data with advanced engineering techniques, creating a solid foundation for AI solutions that deliver accurate predictions and meaningful insights.",
  },
  {
    title: "Brand Sentiment Analysis",
    desc: "Our seamless integration minimizes disruptions while detailed training equips your team to maximize AI’s value, ensuring smooth adoption and consistent use across your organization.",
  },
];

/* -------------------- Construction -------------------- */
export const constructionSteps: Step[] = [
  {
    title: "Project Planning Optimization",
    desc: "Use AI to estimate timelines, allocate resources, and identify potential delays before they happen—keeping construction projects on schedule and within budget.",
  },
  {
    title: "Material Demand Forecasting",
    desc: "Predict material needs based on project progress, historical data, and supplier lead times—preventing overstocking or site shortages.",
  },
  {
    title: "Cost Estimation",
    desc: "Leverage AI models to analyze material prices, labor rates, and past project data for fast, accurate, and dynamic cost forecasting.",
  },
  {
    title: "Risk Assessment",
    desc: "Predict safety risks and compliance issues by analyzing site data, worker behavior, and environmental conditions—helping prevent accidents and delays.",
  },
  {
    title: "Equipment Management",
    desc: "Monitor equipment usage and performance in real time. Predict maintenance needs and optimize utilization across job sites to reduce downtime.",
  },
  {
    title: "Site Monitoring & Analytics",
    desc: "Use computer vision and sensors to track progress, detect anomalies, and generate insights—improving quality control and decision-making.",
  },
];

/* -------------------- Software Development -------------------- */
export const softwareDevSteps: Step[] = [
  {
    title: "Bug Detection & Prediction",
    desc: "Use AI to identify bugs early in the development cycle by analyzing code patterns and historical defects—reducing testing time and post-release issues.",
  },
  {
    title: "Product Roadmap Optimization",
    desc: "Analyze market trends, customer feedback, and usage data to help prioritize features, manage backlogs, and align roadmaps with user demand.",
  },
  {
    title: "Developer Productivity Insights",
    desc: "Gain visibility into team velocity, bottlenecks, and flow efficiency using AI analytics—helping tech leads make smarter resourcing and process decisions.",
  },
  {
    title: "Code Generation & Review",
    desc: "Leverage AI to assist in writing boilerplate code, suggesting improvements, and performing intelligent code reviews—boosting development speed and quality.",
  },
  {
    title: "Resource Allocation",
    desc: "Predict developer workload and assign tasks efficiently based on skillsets, availability, and project priorities—ensuring balanced teams and faster delivery.",
  },
  {
    title: "Automated Testing",
    desc: "Implement AI-driven test case generation and regression testing to accelerate QA cycles and maintain product stability with minimal manual effort.",
  },
];

/* -------------------- Supply Chain Management -------------------- */
export const supplyChainSteps: Step[] = [
  {
    title: "Demand Forecasting",
    desc: "Predict future product demand by analyzing historical sales, market trends, and seasonality—reducing stockouts and excess inventory.",
  },
  {
    title: "Route & Delivery Optimization",
    desc: "Analyze real-time traffic, weather, and delivery data to determine the most efficient routes—cutting fuel costs and improving delivery times.",
  },
  {
    title: "Automated Procurement",
    desc: "Streamline purchasing by using AI to suggest optimal reorder times, negotiate pricing, and manage vendor relationships more effectively.",
  },
  {
    title: "Inventory Optimization",
    desc: "Use AI to balance stock levels across warehouses and channels, minimizing carrying costs while ensuring product availability.",
  },
  {
    title: "Supplier Risk Analysis",
    desc: "Assess supplier performance and identify potential risks by analyzing lead times, reliability, and external factors like geopolitical or market shifts.",
  },
  {
    title: "Warehouse Efficiency",
    desc: "Apply AI to improve warehouse layout, automate picking processes, and predict maintenance needs—boosting throughput and reducing downtime.",
  },
];
