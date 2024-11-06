import mongoose from 'mongoose';

function getMongoURI(): string {
  const uri = process.env.DATABASE_URL;
  if (!uri) {
    throw new Error('Please define the DATABASE_URL environment variable');
  }
  return uri;
}

const DATABASE_URL = getMongoURI();

export async function connectDB() {
  try {
    if (mongoose.connection.readyState >= 1) {
      return;
    }

    await mongoose.connect(DATABASE_URL);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
}