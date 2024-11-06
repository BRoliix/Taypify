// app/api/auth/signup/route.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import { connectDB } from '@/lib/mongodb';
import { User } from '@/models/user';
import { z } from 'zod';

// Define a schema for validation
const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50),
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters')
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse and validate request body
    const result = signupSchema.safeParse(req.body);
    
    if (!result.success) {
      return res.status(400).json({ error: result.error.errors[0].message });
    }

    const { name, email, password } = result.data;

    await connectDB();

    // Check for existing user
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Hash password and create user
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
    });

    // Return user data without password
    const userWithoutPassword = {
      _id: user._id,
      name: user.name,
      email: user.email
    };

    return res.status(201).json({ message: 'User created successfully', user: userWithoutPassword });
  } catch (error) {
    console.error('Signup error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}