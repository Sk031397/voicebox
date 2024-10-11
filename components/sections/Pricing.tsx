'use client';
const pricingPlans = [
  {
    name: "Basic",
    price: "$9.99/month",
    features: [
      "Access to basic features",
      "Up to 10 audio lessons per month",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "$19.99/month",
    features: [
      "All Basic features",
      "Unlimited audio lessons",
      "Advanced customization options",
      "Priority email support",
    ],
  },
  {
    name: "Enterprise",
    price: "$49.99/month",
    features: [
      "All Pro features",
      "Dedicated account manager",
      "Custom solutions",
      "24/7 support",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-6">Pricing Plans</h2>
        <p className="text-gray-700 mb-12">
          Choose a plan that fits your needs. Enjoy seamless audio learning experiences with Voicebox!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div key={plan.name} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">{plan.name}</h3>
              <p className="text-xl font-bold text-teal-500 mb-4">{plan.price}</p>
              <ul className="text-left text-gray-600 mb-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start mb-2">
                    <svg className="w-5 h-5 text-teal-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 10a1 1 0 01.707.293l3 3a1 1 0 001.414-1.414l-3-3A1 1 0 016 10z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M10 3a1 1 0 00-1 1v8a1 1 0 002 0V4a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition duration-300">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
