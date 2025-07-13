import ProductList from '@/components/product/ProductList.tsx';
import { communicateList, ieltsList, toeicList } from '@/data/products.ts';

const Home = () => {
  return (
    <div className="space-y-6">
      <ProductList title="Khoá học tiếng Anh giao tiếp" products={communicateList} />
      <ProductList title="Khoá học TOEIC" products={toeicList} />
      <ProductList title="Khoá học IELTS" products={ieltsList} />
    </div>
  );
};

export default Home;
