// src/components/ProductCard.tsx
'use client';
import { NFCProduct } from '@/types';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: NFCProduct;
  onBuy: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onBuy }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="relative h-48 w-full">
        <Image 
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-2 right-2">
          <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-sm">
            New
          </span>
        </div>
      </div>
      
      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-800 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="space-y-3">
          {product.features && (
            <div className="flex flex-wrap gap-2">
              {product.features.slice(0, 2).map((feature, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-between items-center pt-2">
          <div className="space-y-1">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-gray-500 line-through block">
                ${product.oldPrice}
              </span>
            )}
          </div>
          
          <button 
            onClick={() => onBuy(product.id)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            <ShoppingCart size={18} />
            <span>Buy Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;