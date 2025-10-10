'use client';

import React, { useState } from 'react';
import RoundedRadio from '@/Components/Common/RoundedRadio';

const options: string[] = [
  "What would you like to work on?",
  "Sales performance reports",
  "Invoice management",
  "Payment tracking",
  "Credit notes",
  "Recurring invoices",
  "Quote generation",
  "Subscription billing",
  "Product catalog"
];

const WorkSelector: React.FC = () => {
  const [selected, setSelected] = useState<string>("");

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {options.map((option, index) => (
        <RoundedRadio
          key={index}
          label={option}
          value={option}
          selected={selected === option}
          onChange={setSelected}
        />
      ))}
    </div>
  );
};

export default WorkSelector;
