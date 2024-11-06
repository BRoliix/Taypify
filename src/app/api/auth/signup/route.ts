import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { connectDB } from '@/lib/mongodb';
import { User } from '@/models/user';
import { z } from 'zod';

// Validation schema
const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50),
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters')
});

export async function POST(request: NextRequest) {
  try {
    // Parse and validate request body
    const body = await request.json();
    const result = signupSchema.safeParse(body);

    if (!result.success) {
      // Log the validation errors
      console.error('Validation failed:', result.error.errors);
      return new NextResponse(
        JSON.stringify({
          error: result.error.errors[0].message,
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const { name, email, password } = result.data;

    // Connect to the database
    await connectDB();

    // Check if the email is already taken
    const existingUser = await User.findOne({ email: email.toLowerCase() });

    if (existingUser) {
      console.log('Email already registered:', email);
      return new NextResponse(
        JSON.stringify({ error: 'Email already registered' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Hash the password and create the user
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
    });

    // Create a sanitized user object (without password)
    const userWithoutPassword = {
      _id: user._id,
      name: user.name,
      email: user.email,
    };

    console.log('User created successfully:', userWithoutPassword);

    // Return success response with user info (without password)
    return new NextResponse(
      JSON.stringify({
        message: 'User created successfully',
        user: userWithoutPassword,
      }),
      {
        status: 201,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    // Log the error for debugging
    console.error('Signup error:', error);

    return new NextResponse(
      JSON.stringify({
        error: 'Internal server error',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
