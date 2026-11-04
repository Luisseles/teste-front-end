import { useEffect, useRef, type KeyboardEvent, type SyntheticEvent } from 'react';
import fallbackPhoto from '../../assets/images/phone.jpg';
import type { Product } from '../../types/product';
import { formatCurrency, formatInstallment } from '../../utils/format';
import { CloseIcon } from '../Icons/Icons';
import styles from './ProductModal.module.scss';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const FOCUSABLE = 'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function ProductModal({ product, onClose }: ProductModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Trava o scroll da página, foca o modal e devolve o foco ao fechar.
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      onClose();
      return;
    }
    if (event.key !== 'Tab' || !dialogRef.current) return;

    // Mantém o foco dentro do modal (focus trap).
    const items = dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = fallbackPhoto;
  };

  return (
    <div className={styles.overlay} onMouseDown={onClose} onKeyDown={handleKeyDown}>
      <div
        ref={dialogRef}
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        aria-describedby="product-modal-description"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Fechar"
        >
          <CloseIcon size={20} />
        </button>

        <img
          className={styles.photo}
          src={product.photo}
          alt={product.productName}
          onError={handleImageError}
        />

        <div className={styles.details}>
          <h2 id="product-modal-title" className={styles.name}>
            {product.productName}
          </h2>
          <p className={styles.price}>{formatCurrency(product.price)}</p>
          <p className={styles.installment}>{formatInstallment(product.price)}</p>
          <p id="product-modal-description" className={styles.description}>
            {product.descriptionShort}
          </p>
          <p className={styles.shipping}>Frete grátis</p>
          <button type="button" className={styles.buy} onClick={onClose}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
