'use client';
import { useState } from 'react';

export const FAQ = () => {
  const [open, setOpen] = useState(null);
  const faqs = [
    { question: "What is Voicebox?", answer: "Voicebox is an AI-driven audio learning platform that adapts to individual learning styles." },
    { question: "Is Voicebox available on mobile?", answer: "Yes, Voicebox is accessible on both mobile and desktop devices." },
    { question: "Can I track my progress?", answer: "Yes, Voicebox offers insights and analytics to monitor learning progress." },
  ];

  const toggleFAQ = (index:any) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="px-6 py-16 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 bg-white text-gray-800 font-semibold rounded-lg shadow-md"
            >
              {faq.question}
            </button>
            {open === index && <p className="p-4 text-gray-600 bg-gray-100 rounded-b-lg">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
