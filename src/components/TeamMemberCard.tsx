// components/TeamMemberCard.tsx
'use client';
import { Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface SocialLinks {
  linkedin: string;
  email: string;
  github?: string;
}

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: SocialLinks;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
      <div className="flex items-start space-x-6">
        <div className="relative w-24 h-24">
          <Image 
            src={member.image}
            alt={`${member.name}'s profile picture`}
            width={96}
            height={96}
            className="rounded-full"
            priority={member.name === 'Dawood Bin Shabir'}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0cHBwcHx0cHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBz/2wBDAR"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
          <p className="text-blue-600 font-medium mb-2">{member.role}</p>
          <p className="text-gray-600 mb-4">{member.bio}</p>
          <div className="flex space-x-4">
            <Link
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href={`mailto:${member.social.email}`}
              className="text-gray-400 hover:text-red-500 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}