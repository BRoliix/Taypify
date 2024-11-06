export interface NFCProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    oldPrice?: number;
    image: string;
    features?: string[];
    stock?: number;
    category?: string;
    isNew?: boolean;
  }
  
  export interface PricingPlan {
    id: string;
    name: string;
    price: number;
    billing: 'monthly' | 'yearly';
    description: string;
    features: string[];
    isPopular?: boolean;
    buttonText: string;
  }
  export interface User {
    id: string;
    name: string;
    email: string;
  }
  
  export interface ApiError {
    message: string;
    status?: number;
  }
  
  export interface ApiResponse<T> {
    data?: T;
    error?: ApiError;
  }
  
  export interface UserResponse {
    user: User;
    token: string;
  }
  
  export interface Order {
    id: string;
    userId: string;
    products: Array<{
      productId: string;
      quantity: number;
    }>;
    totalAmount: number;
    status: 'pending' | 'completed' | 'cancelled';
    createdAt: Date;
  }