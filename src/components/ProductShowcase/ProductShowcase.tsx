import { useState } from 'react';
import type { Product } from '../../types/product';
import { CategoryTabs } from './CategoryTabs';
import { ProductCarousel } from './ProductCarousel';
import { SectionTitle } from './SectionTitle';
import styles from './ProductShowcase.module.scss';

interface ProductShowcaseProps {
  id: string;
  title?: string;
  products: Product[];
  onSelectProduct: (product: Product) => void;
  /** Se informado, exibe as abas de categoria; senão exibe o link "Ver todos". */
  tabs?: string[];
}

export function ProductShowcase({
  id,
  title = 'Produtos relacionados',
  products,
  onSelectProduct,
  tabs,
}: ProductShowcaseProps) {
  const [activeTab, setActiveTab] = useState(tabs?.[0] ?? '');
  const titleId = `${id}-title`;

  return (
    <section id={id} className={styles.showcase} aria-labelledby={titleId}>
      <SectionTitle id={titleId}>{title}</SectionTitle>

      {tabs ? (
        <CategoryTabs tabs={tabs} active={activeTab} onChange={setActiveTab} />
      ) : (
        <a href="#" className={styles.viewAll}>
          Ver todos
        </a>
      )}

      <ProductCarousel products={products} onSelect={onSelectProduct} label={title} />
    </section>
  );
}
