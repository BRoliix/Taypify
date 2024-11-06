'use client';
import { useState } from 'react';
import PricingCard from '@/components/PricingCard';
import PricingToggle from '@/components/PricingToggle';
import { PricingPlan } from '@/types';

const monthlyPlans: PricingPlan[] = [
  {
    id: 'basic-monthly',
    name: 'Starter',
    price: 20.96,
    billing: 'monthly',
    description: 'Perfect for individuals and small businesses',
    buttonText: 'Get Started',
    features: [
      '5 NFC Cards',
      'Basic Analytics',
      'Standard Design Templates',
      'Email Support',
      'Basic Card Management',
      '1GB Storage'
    ]
  },
  {
    id: 'pro-monthly',
    name: 'Professional',
    price: 40.92,
    billing: 'monthly',
    description: 'Ideal for growing businesses',
    isPopular: true,
    buttonText: 'Start Free Trial',
    features: [
      '15 NFC Cards',
      'Advanced Analytics',
      'Premium Design Templates',
      'Priority Support',
      'Team Management',
      '5GB Storage',
      'Custom Branding',
      'API Access'
    ]
  },
  {
    id: 'enterprise-monthly',
    name: 'Enterprise',
    price: 99.82,
    billing: 'monthly',
    description: 'For large organizations',
    buttonText: 'Contact Sales',
    features: [
      'Unlimited NFC Cards',
      'Enterprise Analytics',
      'Custom Design Services',
      '24/7 Priority Support',
      'Advanced Team Management',
      'Unlimited Storage',
      'White-label Solution',
      'Custom Integration',
      'Dedicated Account Manager'
    ]
  }
];

const yearlyPlans: PricingPlan[] = monthlyPlans.map(plan => ({
  ...plan,
  id: plan.id.replace('monthly', 'yearly'),
  price: Number((plan.price * 0.8 * 12).toFixed(2)),
  billing: 'yearly'
}));

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);
  const plans = isYearly ? yearlyPlans : monthlyPlans;

  const handlePlanSelect = (planId: string) => {
    console.log(`Selected plan: ${planId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600">
            Choose the perfect plan for your business needs
          </p>
          
          {/* Pricing Toggle */}
          <div className="mt-8">
            <PricingToggle 
              isYearly={isYearly} 
              onToggle={() => setIsYearly(!isYearly)} 
            />
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              onSelect={handlePlanSelect}
            />
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-black text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "What's included in the Starter plan?",
    answer: "The Starter plan includes 5 NFC cards, basic analytics, standard design templates, and email support. Perfect for individuals and small businesses getting started with NFC technology."
  },
  {
    question: "Can I upgrade or downgrade my plan later?",
    answer: "Yes, you can change your plan at any time. When upgrading, you'll be prorated for the remaining time. When downgrading, the new rate will apply at the start of your next billing cycle."
  },
  {
    question: "Do you offer custom solutions?",
    answer: "Yes! Our Enterprise plan includes custom design services and integrations. Contact our sales team for more information about custom solutions for your organization."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans. Enterprise customers can also arrange for invoice-based payments."
  }
];