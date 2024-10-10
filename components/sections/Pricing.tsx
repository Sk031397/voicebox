'use client';
export const Pricing = () => {
    const plans = [
      { title: "Basic", price: "$9.99/mo", features: ["Personalized Narration", "Standard Insights", "Basic Support"] },
      { title: "Pro", price: "$19.99/mo", features: ["All Basic Features", "Advanced Analytics", "Priority Support"] },
      { title: "Enterprise", price: "Contact Us", features: ["Full Features", "Dedicated Account Manager", "Custom Integrations"] },
    ];
  
    return (
      <section className="px-6 py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">{plan.title}</h3>
              <p className="text-4xl font-bold text-gray-800 mb-4">{plan.price}</p>
              <ul className="text-gray-600 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg">Choose Plan</button>
            </div>
          ))}
        </div>
      </section>
    );
  }
  