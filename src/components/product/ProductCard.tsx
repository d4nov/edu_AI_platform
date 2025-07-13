import { Eye, Clock } from 'lucide-react';
import type { Product } from '@/data/products.ts';

type Props = {
  product: Product;
  onClick?: () => void;
};

const ProductCard = ({ product, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer flex-col overflow-hidden rounded-xl bg-white shadow transition hover:shadow-md"
    >
      <img src={product.image} alt={product.name} className="h-40 w-full object-cover" />

      <div className="flex flex-1 flex-col justify-between gap-2 p-3">
        <div>
          <h3 className="line-clamp-1 text-base font-semibold text-gray-900">{product.name}</h3>
          <p className="line-clamp-2 hidden text-sm text-gray-500 md:inline-flex">
            {product.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3">
          {product.oldPrice && (
            <p className="text-md text-gray-400 line-through">
              {product.oldPrice.toLocaleString()}đ
            </p>
          )}
          <p className="font-bold text-orange-500 sm:ml-2">{product.price.toLocaleString()}đ</p>
        </div>

        <div className="mt-auto flex items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            {product.views}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {product.duration}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
