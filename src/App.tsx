import { useCallback, useState } from 'react';
import { BrandList } from './components/BrandList/BrandList';
import { CategoryList } from './components/CategoryList/CategoryList';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Newsletter } from './components/Newsletter/Newsletter';
import { PartnerBanners } from './components/PartnerBanners/PartnerBanners';
import { ProductModal } from './components/ProductModal/ProductModal';
import { ProductShowcase } from './components/ProductShowcase/ProductShowcase';
import { useProducts } from './hooks/useProducts';
import type { Product } from './types/product';

const TABS = ['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos'];

export default function App() {
  const { products, isLoading } = useProducts();
  const [selected, setSelected] = useState<Product | null>(null);
  const closeModal = useCallback(() => setSelected(null), []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategoryList />

        {isLoading ? (
          <p className="sr-only" role="status">
            Carregando produtos...
          </p>
        ) : (
          <>
            <ProductShowcase id="produtos" products={products} tabs={TABS} onSelectProduct={setSelected} />
            <PartnerBanners />
            <ProductShowcase id="produtos-2" products={products} onSelectProduct={setSelected} />
            <PartnerBanners />
            <BrandList />
            <ProductShowcase id="produtos-3" products={products} onSelectProduct={setSelected} />
          </>
        )}
      </main>
      <Newsletter />
      <Footer />

      {selected && <ProductModal product={selected} onClose={closeModal} />}
    </>
  );
}
