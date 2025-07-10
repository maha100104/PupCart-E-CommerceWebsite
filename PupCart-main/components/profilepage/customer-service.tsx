"use client";

import { useState } from "react";
import { customerServiceFAQ } from "@/app/data/customer-service-faq";

export default function CustomerService() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Customer Service</h2>
      <div className="space-y-4">
        {customerServiceFAQ.map((item, index) => (
          <div key={index}>
            <button
              onClick={() =>
                setActiveIndex(index === activeIndex ? null : index)
              }
              className="text-left text-blue-600 hover:underline text-sm w-full"
            >
              {item.question}
            </button>
            {activeIndex === index && (
              <div className="mt-1 p-3 bg-gray-100 border rounded-md text-sm text-gray-800">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
