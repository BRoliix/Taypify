interface PricingCardProps {
    plan: {
      id: string;
      name: string;
      description: string;
      price: number;
      billing: string;
      features: string[];
      isPopular?: boolean;
      buttonText: string;
    };
    onSelect: (planId: string) => void;
  }
  
  export default function PricingCard({ plan, onSelect }: PricingCardProps) {
    return (
      <div className={`bg-white rounded-2xl p-8 flex flex-col ${
        plan.isPopular ? 'ring-2 ring-blue-600' : 'shadow-sm'
      }`}>
        {plan.isPopular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="bg-blue-600 text-white text-sm px-4 py-1 rounded-full">
              Most Popular
            </span>
          </div>
        )}
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <p className="text-gray-600 mb-6">{plan.description}</p>
        <div className="text-3xl font-bold mb-8">
                  <span className="text-lg font-normal text-gray-600">AED </span>
                  {plan.price.toFixed(2)}
                  <span className="text-black text-base font-normal">/{plan.billing}</span>
                </div>
        <ul className="space-y-4 mb-8 flex-grow">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <svg
                className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <button
          onClick={() => onSelect(plan.id)}
          className={`w-full py-4 rounded-lg text-base font-medium mt-auto ${
            plan.buttonText === 'Contact Sales' 
              ? 'bg-gray-100 text-gray-900 hover:bg-gray-200' 
              : plan.buttonText === 'Get Started'
              ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          } transition-colors`}
        >
          {plan.buttonText}
        </button>
      </div>
    );
  }