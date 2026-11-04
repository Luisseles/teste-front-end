import { useCarousel, useVisibleSlides } from '../../hooks/useCarousel';
import type { Product } from '../../types/product';
import { ChevronLeftIcon, ChevronRightIcon } from '../Icons/Icons';
import { ProductCard } from './ProductCard';
import styles from './ProductShowcase.module.scss';

interface ProductCarouselProps {
  products: Product[];
  onSelect: (product: Product) => void;
  label: string;
}

export function ProductCarousel({ products, onSelect, label }: ProductCarouselProps) {
  const visible = useVisibleSlides();
  const { index, next, prev, canPrev, canNext } = useCarousel(products.length, visible);

  return (
    <div className={styles.carousel} role="region" aria-roledescription="carrossel" aria-label={label}>
      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowPrev}`}
        onClick={prev}
        disabled={!canPrev}
        aria-label="Produtos anteriores"
      >
        <ChevronLeftIcon size={18} />
      </button>

      <div className={styles.viewport}>
        <ul
          className={styles.track}
          style={{ transform: `translateX(-${(index * 100) / visible}%)` }}
        >
          {products.map((product, i) => (
            <li
              key={`${product.productName}-${i}`}
              className={styles.slide}
              style={{ flexBasis: `${100 / visible}%` }}
            >
              <ProductCard product={product} onSelect={onSelect} />
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowNext}`}
        onClick={next}
        disabled={!canNext}
        aria-label="Próximos produtos"
      >
        <ChevronRightIcon size={18} />
      </button>
    </div>
  );
}
