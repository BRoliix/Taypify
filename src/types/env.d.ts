declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_JWT_SECRET: string;
        JWT_SECRET: string;
        DATABASE_URL: string;
        NODE_ENV: 'development' | 'production' | 'test';
      }
    }
  }
  
  export { };
