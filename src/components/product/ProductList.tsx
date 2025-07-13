import { type Product } from '@/data/products.ts';
import ProductCard from '@/components/product/ProductCard.tsx';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

type ProductListProps = {
  title: string;
  products: Product[];
};

const INITIAL_COUNT = 6;

const ProductList = ({ title, products }: ProductListProps) => {
  const [expanded, setExpanded] = useState(false);

  const visibleProducts = expanded ? products : products.slice(0, INITIAL_COUNT);
  const hasMore = products.length > INITIAL_COUNT;

  const toggleExpanded = () => setExpanded((prev) => !prev);
  return (
    <div className="py-4 sm:px-2 md:px-6 lg:px-8">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xl font-bold lg:text-2xl">{title}</h2>

        {hasMore && (
          <button
            onClick={toggleExpanded}
            className="lg:text-md text-md flex items-center font-semibold text-orange-600 hover:underline"
          >
            <span className="hidden sm:inline">{expanded ? 'Thu gọn' : 'Xem thêm'}</span>

            <span className="rounded-full border bg-gray-100 px-2 py-1 sm:hidden">
              {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </span>

            <span className="hidden sm:inline">{expanded ? '‹' : '›'}</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => console.log('Xem chi tiết', product.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
