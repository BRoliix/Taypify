import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { SessionStrategy } from 'next-auth'; 
import bcrypt from 'bcryptjs';
import { connectDB } from '@/lib/mongodb'; 
import { User } from '@/models/user';

// Function to find user by email
async function findUserByEmail(email: string) {
  await connectDB(); 
  const user = await User.findOne({ email });
  return user;
}

// Function to validate password
async function validatePassword(plainPassword: string, hashedPassword: string) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

export const authOptions = {
  session: {
    strategy: 'jwt' as SessionStrategy,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("No credentials provided");
        }

        const { email, password } = credentials;

        // Find user by email
        const user = await findUserByEmail(email);

        if (user && (await validatePassword(password, user.password))) {
          return {
            id: String(user._id), 
            name: user.name,
            email: user.email,
          };
        }

        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);