declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_JWT_SECRET: string;
        JWT_SECRET: string;
        MONGODB_URI: string;
        NODE_ENV: 'development' | 'production' | 'test';
      }
    }
  }
  
  export {};