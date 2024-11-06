// src/app/learn-more/page.tsx
'use client';
import { Rocket, Sparkles, Timer, Users, Zap, Star } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: 'Revolutionary Networking',
    description: 'Transform your professional networking with just a tap - no apps required.'
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: 'Premium Design',
    description: 'Sleek metal cards that make a lasting first impression.'
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Instant Updates',
    description: 'Update your contact information instantly across all platforms.'
  }
];

const launchBenefits = [
  {
    title: 'Early Adopter Benefits',
    perks: [
      'Exclusive founding member status',
      'Lifetime discount on future upgrades',
      'Priority customer support',
      'Early access to new features'
    ]
  },
  {
    title: 'Launch Pricing',
    perks: [
      'Special pre-launch pricing',
      'Bulk order discounts',
      'Free premium customization',
      'Extended warranty'
    ]
  },
  {
    title: 'Premium Features',
    perks: [
      'Custom card designs',
      'Advanced analytics dashboard',
      'Team management tools',
      'Integration capabilities'
    ]
  }
];

export default function LearnMorePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <span className="bg-blue-400/20 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center">
                <Rocket className="h-4 w-4 mr-2" />
                Launching Soon
              </span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-6">
              The Future of Professional Networking
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join the waitlist for TechConnect's revolutionary NFC business cards
            </p>
          </div>
        </div>
      </div>

      {/* Innovation Overview */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose TechConnect?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Be among the first to revolutionize your networking experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Launch Benefits */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <span className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium flex items-center">
                <Timer className="h-4 w-4 mr-2" />
                Limited Time Offer
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Early Adopter Advantages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Special benefits for our founding members
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {launchBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold mb-6">{benefit.title}</h3>
                <ul className="space-y-4">
                  {benefit.perks.map((perk, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg
                        className="h-5 w-5 text-blue-600 mr-3"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Waitlist Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-blue-600 rounded-2xl p-8 md:p-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Be First in Line
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our waitlist to get exclusive early access and special launch pricing
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/login"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                Get Started
              </Link>
              <Link
                href="/contact"
                className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-400 transition-colors font-medium"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>

     </div>
           
  );
}