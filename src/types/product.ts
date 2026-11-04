export interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
  /** Opcional: o JSON atual não traz preço "de", mas o card exibe quando existir. */
  oldPrice?: number;
}

export interface ProductsResponse {
  success: boolean;
  products: Product[];
}
