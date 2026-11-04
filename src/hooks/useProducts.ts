import { useEffect, useState } from 'react';
import { fetchProducts, getFallbackProducts } from '../services/productService';
import type { Product } from '../types/product';

type Status = 'loading' | 'success' | 'fallback';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<Status>('loading');

  useEffect(() => {
    const controller = new AbortController();

    fetchProducts(controller.signal)
      .then((list) => {
        setProducts(list);
        setStatus('success');
      })
      .catch((error: unknown) => {
        if (controller.signal.aborted) return;
        console.warn('Usando JSON local como fallback:', error);
        setProducts(getFallbackProducts());
        setStatus('fallback');
      });

    return () => controller.abort();
  }, []);

  return { products, status, isLoading: status === 'loading' };
}
