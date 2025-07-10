"use client";

import { useState } from "react";
import { customerServiceFAQ } from "@/app/data/customer-service-faq";

export default function CustomerServiceChat() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="bg-gray-50 border rounded-lg p-4 mt-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">📌 Customer Service</h2>
      <p className="text-sm text-gray-600 mb-4">💬 Chat with us</p>

      <div className="space-y-4">
        {customerServiceFAQ.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => setActiveIndex(index === activeIndex ? null : index)}
              className="w-full text-left text-sm text-blue-700 hover:underline"
            >
              {item.question}
            </button>

            {activeIndex === index && (
              <div className="bg-white mt-2 p-3 text-sm text-gray-700 border rounded-md shadow">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
