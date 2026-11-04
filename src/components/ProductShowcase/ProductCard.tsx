import type { SyntheticEvent } from 'react';
import fallbackPhoto from '../../assets/images/phone.jpg';
import type { Product } from '../../types/product';
import { formatCurrency, formatInstallment } from '../../utils/format';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  const { productName, descriptionShort, photo, price, oldPrice } = product;

  // Se a foto remota falhar, usa a imagem local para o card nunca ficar quebrado.
  const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = fallbackPhoto;
  };

  return (
    <article className={styles.card} onClick={() => onSelect(product)}>
      <button
        type="button"
        className={styles.trigger}
        aria-haspopup="dialog"
        aria-label={`Ver detalhes de ${productName}`}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(product);
        }}
      >
        <img
          className={styles.photo}
          src={photo}
          alt={productName}
          loading="lazy"
          onError={handleImageError}
        />
        <h3 className={styles.name}>{descriptionShort}</h3>
      </button>

      <div className={styles.info}>
        {oldPrice !== undefined && <p className={styles.oldPrice}>{formatCurrency(oldPrice)}</p>}
        <p className={styles.price}>{formatCurrency(price)}</p>
        <p className={styles.installment}>{formatInstallment(price)}</p>
        <p className={styles.shipping}>Frete grátis</p>
      </div>

      <button
        type="button"
        className={styles.buy}
        aria-haspopup="dialog"
        onClick={(e) => {
          e.stopPropagation();
          onSelect(product);
        }}
      >
        Comprar
      </button>
    </article>
  );
}
