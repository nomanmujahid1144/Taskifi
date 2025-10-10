import React from 'react';
import { FiDollarSign, FiPieChart, FiAlertTriangle } from 'react-icons/fi';
import Button from '@/Components/Common/Button';



  const features = [
    {
      icon: <FiDollarSign className="w-6 h-6 text-primary " />,
      title: "Automatically calculate and allocate cost",
      description: "Define services, people, and expense categories — and Taskifi will instantly estimate cost, revenue, and profit based on logged hours and rates."
    },
    {
      icon: <FiPieChart className="w-6 h-6 text-primary" />,
      title: "Monitor budgets across multiple billing types",
      description: "Whether you're billing per hour, on a fixed-fee model, or managing non-billable projects — Taskifi gives you complete flexibility with accurate visibility."
    },
    {
      icon: <FiAlertTriangle className="w-6 h-6 text-primary" />,
      title: "Get alerts before you overspend",
      description: "Our AI proactively warns you when you're approaching a budget limit, over-allocating a resource, or losing profit margin — helping you make smarter adjustments in real-time."
    }
  ];

const BudgetingSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
      <div className="text-center mb-12">
        <h1 className="component-heading font-bold text-text-primary mb-6">
          Empower your team with smarter budgeting and AI-powered cost control
        </h1>
        <p className="  2xl:text-lg  text-text-secondary max-w-4xl mx-auto">
     Streamline your entire budgeting workflow with Taskifi. From time & materials to fixed-fee contracts, Taskifi helps you create project budgets in minutes — not hours — while leveraging real-time data to forecast cost, track profit, and assign billable rates intelligently.
        </p>
      </div>

    <img src="/ProjectManagement/budgeting.png" className='w-full h-auto object-contain border-4 border-black rounded-2xl mb-16' alt="" />
     

    <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className=" md:p-6 py-6 text-center flex flex-col justify-start items-center ">
            <div className="w-14 h-14 rounded-full flex items-center bg-[#F4EBFF] border-8 border-[#F9F5FF] justify-center mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-3">{feature.title}</h3>
            <p className="text-text-secondary">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className='w-full flex justify-center items-center mt-12'>
       <Button 
       variant='solid'
       href='#'
       >
         Try Taskifi
       </Button>
      </div>
    </section>
  );
};

export default BudgetingSection;