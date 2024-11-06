// app/who-are-we/page.tsx
'use client';
import TeamMemberCard from '@/components/TeamMemberCard';
import { team } from '@/lib/team';
import Link from 'next/link';

export default function WhoAreWePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">
              Who Are We?
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Meet the team behind TechConnect Innovators, dedicated to revolutionizing networking through NFC technology
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          {team.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            At TechConnect Innovators, we're committed to revolutionizing professional networking through innovative NFC solutions. Our team combines expertise in technology, design, and business to create products that make connecting easier and more efficient.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}