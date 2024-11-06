// src/app/products/page.tsx
'use client';
import { CreditCard, Shield, Zap } from 'lucide-react';

const products = [
  {
    id: '1',
    name: 'Business NFC Card',
    description: 'Premium metal NFC business card with customizable design',
    price: 29.98, // Converted to AED
    features: [
      'Metal Construction',
      'Custom Design',
      'Digital Profile',
      'Analytics Dashboard'
    ],
    isPopular: true
  },
  {
    id: '2',
    name: 'Smart Tag Pro',
    description: 'Versatile NFC tag for multiple use cases',
    price: 19.96, // Converted to AED
    features: [
      'Durable Design',
      'Multiple Profiles',
      'Basic Analytics',
      'Easy Setup'
    ]
  },
  {
    id: '3',
    name: 'Enterprise Bundle',
    description: 'Complete NFC solution for teams and businesses',
    price: 99.93, // Converted to AED
    features: [
      '10 NFC Cards',
      'Team Management',
      'Advanced Analytics',
      'Priority Support'
    ]
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">
              Our NFC Products
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Discover our range of innovative NFC solutions designed to enhance your networking experience
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-x-20 gap-y-12">
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Premium Quality</h3>
              <p className="text-gray-600">High-quality materials built to last</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Secure Technology</h3>
              <p className="text-gray-600">Advanced encryption for your data</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Instant Sharing</h3>
              <p className="text-gray-600">Share your details with a tap</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-sm p-8 relative" // Added relative for proper popular badge positioning
              >
                {product.isPopular && (
                  <span className="absolute top-4 right-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                    Popular
                  </span>
                )}
                <h3 className="text-xl font-semibold mb-3">{product.name}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <div className="text-3xl font-bold mb-8">
                  <span className="text-lg font-normal text-gray-600">AED </span>
                  {product.price.toFixed(2)}
                </div>
                <ul className="space-y-4 mb-8">
                  {product.features.map((feature, index) => (
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
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals already using our NFC solutions to enhance their networking experience.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}