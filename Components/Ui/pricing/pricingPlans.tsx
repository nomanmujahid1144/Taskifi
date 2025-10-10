import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import BillingToggle from "./BillingToggle";
import clsx from 'clsx';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'For solo users or testing Taskifi',
    button: 'Start Free Trial',
    color: '#6256EA',
    buttonStyle: 'bg-[#6256EA] ',
    featureHeading: 'Features',
    features: [
      '1 user',
      'Project & task management',
      'Kanban & List views',
      'Basic AI Assistant',
      '500MB storage',
      'Email support',
    ],
  },
  {
    name: 'Pro',
    price: '$20',
    color: '#EA26A4',
    billing: 'per month',
    description: 'For growing teams',
    button: 'Upgrade to Pro',
    buttonStyle: 'bg-[#EA26A4] ',
    featureHeading: 'everything in Starter',
    features: [
      'Everything in Starter',
      'Up to 10 users',
      'Resource Management',
      'AI Project Planner',
      'Time Tracking & Approvals',
      'Vendor Recommendations',
      'CRM Lite',
      '5GB storage',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom Pricing',
    description: 'For larger organizations & advanced needs',
    button: 'Contact Sales',
    color: '#20C579',
    buttonStyle: 'bg-[#20C579]',
    featureHeading: 'everything in Pro',
    features: [
      'Everything in Pro',
      'Unlimited users',
      'Role-based Permissions',
      'Full CRM & Sales Management',
      'Advanced Purchase Management',
      'AI Marketing Tools',
      'Custom Workflows',
      'SLA-backed support',
      'Dedicated Customer Success Manager',
    ],
  },
];

export default function PricingPlans() {
  return (
    <section className="bg-white">
      <div className="text-left flex justify-between flex-col md:flex-row gap-16 md:gap-0 items-center mb-8">
        <span className="bg-primary/20 text-primary px-4 py-2.5 flex justify-center items-center gap-2 w-fit rounded-full text-sm font-semibold">
       <FaCheckCircle />   100% Money-Back Guarantee
        </span>
        <BillingToggle />
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
          >
            <h3
              className={clsx('text-lg font-bold mb-4')}
              style={{ color: plan.color }}
            >
              {plan.name}
            </h3>
            <div className="text-4xl font-extrabold mb-4 text-gray-900">
              <span style={{ color: plan.color }}>{plan.price}</span>{' '}
              {plan.billing && (
                <span className="text-sm font-normal text-gray-500">
                  {plan.billing}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500 mt-1 mb-8">{plan.description}</p>
            <button
              className={clsx(
                'text-white font-semibold w-full py-2 hover:scale-105 transition-all duration-300 mb-8 rounded-full',
                plan.buttonStyle
              )}
            >
              {plan.button}
            </button>
            
            <p className=" font-bold text-text-primary">{plan.featureHeading}</p>
            <ul className="mt-6 space-y-4">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start space-x-2 text-sm text-gray-700"
                >
                  <IoIosCheckmarkCircleOutline className="text-primary text-2xl " />
                  <span className="text-text-secondary">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
