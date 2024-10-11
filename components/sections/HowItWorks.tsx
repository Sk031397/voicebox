'use client'
import { AcademicCapIcon, MicrophoneIcon, AdjustmentsHorizontalIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    title: "Step 1: Upload Content",
    description: "Easily upload text or educational materials that need to be converted into audio format.",
    icon: AcademicCapIcon,
  },
  {
    title: "Step 2: Customize Audio Settings",
    description: "Adjust narration speed, pitch, and language to suit each student’s learning style and needs.",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    title: "Step 3: Generate Audio",
    description: "Let Voicebox process the content and generate high-quality audio using advanced AI technology.",
    icon: MicrophoneIcon,
  },
  {
    title: "Step 4: Track Learning Progress",
    description: "Analyze engagement metrics and monitor progress to better support personalized learning journeys.",
    icon: ChartBarIcon,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-6">How It Works</h2>
        <p className="text-gray-700 mb-12">
          See how Voicebox simplifies the learning experience with powerful, easy-to-use features.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-teal-50 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <step.icon className="h-12 w-12 text-teal-500 mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
