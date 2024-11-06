'use client';

import { useRouter } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client'; // Import Auth0's useUser hook
import { CreditCard, ChevronRight, Settings, Users } from 'lucide-react';

export default function Dashboard() {
  const { user, error, isLoading } = useUser(); // Get user info from Auth0
  const router = useRouter();

  // Handle loading and error states
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // If no user is logged in, redirect to login page
  if (!user) {
    router.push('/api/auth/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Manage your NFC cards and view analytics</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Active Cards</h3>
              <CreditCard className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-3xl font-bold mt-2">5</p>
            <p className="text-sm text-gray-600 mt-1">of 10 cards used</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Total Taps</h3>
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-3xl font-bold mt-2">127</p>
            <p className="text-sm text-gray-600 mt-1">Last 30 days</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Subscription</h3>
              <Settings className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-3xl font-bold mt-2">Pro</p>
            <p className="text-sm text-gray-600 mt-1">Valid until Dec 2024</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Add New Card', description: 'Configure a new NFC card' },
              { title: 'View Analytics', description: 'See detailed usage statistics' },
              { title: 'Update Profile', description: 'Manage your account settings' },
              { title: 'Get Support', description: 'Contact our support team' }
            ].map((action, index) => (
              <button
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-between w-full text-left"
              >
                <div>
                  <h3 className="font-medium text-gray-900">{action.title}</h3>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}