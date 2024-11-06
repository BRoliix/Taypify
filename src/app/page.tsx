'use client';
import { ArrowRight, Shield, Users, Zap } from 'lucide-react';
import Link from 'next/link';
import { useAuth0 } from '@auth0/auth0-react';

export default function Home() {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

 

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl space-y-8">
            {isAuthenticated ? (
              <>
                <h1 className="text-5xl font-bold leading-tight">
                  Welcome back, {user?.name}!
                </h1>
                <p className="text-xl">
                  Manage your digital presence and networking connections with ease.
                </p>
                <div className="flex space-x-4">
                  <Link 
                    href="/dashboard" 
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 inline-flex items-center"
                  >
                    Go to Dashboard <ArrowRight className="ml-2" />
                  </Link>
                  <Link 
                    href="/manage-cards" 
                    className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600"
                  >
                    Manage Cards
                  </Link>
                  <button 
                    onClick={() => logout({ returnTo: window.location.origin } as any)} 
                    className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600"
                  >
                    Log Out
                  </button>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-5xl font-bold leading-tight">
                  Transform Your Networking Experience
                </h1>
                <p className="text-xl">
                  Share your digital presence instantly with our innovative NFC solutions.
                  Perfect for professionals and businesses.
                </p>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => loginWithRedirect()} 
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 inline-flex items-center"
                  >
                    Get Started <ArrowRight className="ml-2" />
                  </button>
                  <Link 
                    href="/learn-more" 
                    className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600"
                  >
                    Learn More
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {isAuthenticated ? 'Your NFC Solutions' : 'Why Choose Our NFC Solutions?'}
            </h2>
            <p className="text-xl text-gray-600">
              {isAuthenticated 
                ? 'Make the most of your digital networking tools'
                : 'Experience the future of networking with our cutting-edge NFC technology'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8" />,
                title: 'Instant Connection',
                description: 'Share your contact information with a simple tap'
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: 'Secure & Reliable',
                description: 'Advanced encryption for your data protection'
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: 'Easy Management',
                description: 'Update your information anytime, anywhere'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-blue-600">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Only show if not authenticated */}
      {!isAuthenticated && (
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of professionals already using our NFC solutions
            </p>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => loginWithRedirect()}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
              >
                Create Account
              </button>
              <Link 
                href="/pricing" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Quick Actions - Only show if authenticated */}
      {isAuthenticated && (
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Quick Actions</h2>
              <p className="text-xl text-gray-600">
                Manage your digital presence efficiently
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Link
                href="/profile"
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">Update Profile</h3>
                <p className="text-gray-600">
                  Edit your contact information and preferences
                </p>
              </Link>
              <Link
                href="/analytics"
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">View Analytics</h3>
                <p className="text-gray-600">
                  Track your networking performance
                </p>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
