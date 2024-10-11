'use client';
import { SpeakerWaveIcon, BookOpenIcon, PlayIcon, AdjustmentsVerticalIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: "Personalized Narration",
    description: "Customize narration for students based on their pace and preferences, making learning more engaging and accessible.",
    icon: SpeakerWaveIcon,
  },
  {
    name: "Text-to-Speech",
    description: "Convert text into natural-sounding audio, supporting students with reading difficulties and enhancing language learning.",
    icon: BookOpenIcon,
  },
  {
    name: "Adaptable Audio Lessons",
    description: "Voicebox offers flexible audio lessons that adapt to individual learning styles, enhancing retention and understanding.",
    icon: PlayIcon,
  },
  {
    name: "Dynamic Content Control",
    description: "Easily control pitch, speed, and tone, allowing educators and students to create their ideal listening experience.",
    icon: AdjustmentsVerticalIcon,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Voicebox Features</h2>
        <p className="text-gray-700 mb-12">
          Explore the powerful features that make Voicebox a versatile tool for interactive and accessible learning.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <feature.icon className="h-12 w-12 text-teal-500 mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
