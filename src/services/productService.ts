import fallback from '../data/products.json';
import type { Product, ProductsResponse } from '../types/product';

export const PRODUCTS_URL =
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

export async function fetchProducts(signal?: AbortSignal): Promise<Product[]> {
  const response = await fetch(PRODUCTS_URL, { signal });
  if (!response.ok) {
    throw new Error(`Falha ao carregar produtos (HTTP ${response.status})`);
  }
  const data: ProductsResponse = await response.json();
  if (!data.success || !Array.isArray(data.products)) {
    throw new Error('Resposta inesperada da API de produtos');
  }
  return data.products;
}

/** Cópia local do JSON, usada somente se a API estiver indisponível (CORS, offline...). */
export const getFallbackProducts = (): Product[] =>
  (fallback as ProductsResponse).products;
