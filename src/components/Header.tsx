'use client';

import { useUser } from '@auth0/nextjs-auth0/client'; // Use Auth0's useUser hook
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { user, error, isLoading } = useUser(); // Get user info from Auth0

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Who Are We?', href: '/who-are-we' },
  ];

  if (isLoading) return null; // Optionally handle loading state

  return (
    <header className="fixed w-full bg-white border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Tapify
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  pathname === item.href
                    ? 'text-gray-900 font-medium'
                    : 'text-gray-500 hover:text-gray-900'
                } transition-colors`}
              >
                {item.name}
              </Link>
            ))}
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Welcome, {user.name}</span>
                <Link
                  href="/dashboard"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Dashboard
                </Link>
                <a
                  href="/api/auth/logout"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Logout
                </a>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <a
                  href="/api/auth/login"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Sign in
                </a>
                <a
                  href="/api/auth/login"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </a>
              </div>
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="py-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-2 ${
                    pathname === item.href
                      ? 'text-gray-900 bg-gray-50 font-medium'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  } transition-colors`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {user ? (
                <>
                  <div className="px-4 py-2 text-gray-700 bg-gray-50">
                    Welcome, {user.name}
                  </div>
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <a
                    href="/api/auth/logout"
                    className="block w-full text-left px-4 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    Logout
                  </a>
                </>
              ) : (
                <>
                  <a
                    href="/api/auth/login"
                    className="block px-4 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    Sign in
                  </a>
                  <a
                    href="/api/auth/login"
                    className="block px-4 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </a>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;