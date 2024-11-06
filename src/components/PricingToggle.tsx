interface PricingToggleProps {
    isYearly: boolean;
    onToggle: () => void;
  }
  
  export default function PricingToggle({ isYearly, onToggle }: PricingToggleProps) {
    return (
      <div className="flex items-center justify-center gap-4">
        <span className={`text-lg ${!isYearly ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
          Monthly
        </span>
        <button
          onClick={onToggle}
          className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
            isYearly ? 'bg-blue-600' : 'bg-gray-200'
          }`}
        >
          <span
            className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
              isYearly ? 'translate-x-7' : 'translate-x-1'
            }`}
          />
        </button>
        <span className={`text-lg ${isYearly ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
          Yearly
        </span>
      </div>
    );
  }