import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { Product } from '../../types/product';
import { ProductCard } from './ProductCard';

const product: Product = {
  productName: 'IPHONE 13 MINI 1',
  descriptionShort: 'Descrição curta do iPhone',
  photo: 'https://exemplo.com/foto.png',
  price: 9000,
};

describe('ProductCard', () => {
  it('exibe descrição, preço e parcelamento', () => {
    render(<ProductCard product={product} onSelect={() => {}} />);

    expect(screen.getByText('Descrição curta do iPhone')).toBeInTheDocument();
    expect(screen.getByText(/9\.000,00/)).toBeInTheDocument();
    expect(screen.getByText(/ou 2x de .*4\.500,00 sem juros/)).toBeInTheDocument();
    expect(screen.getByAltText('IPHONE 13 MINI 1')).toBeInTheDocument();
  });

  it('chama onSelect com o produto ao clicar no card ou em Comprar', async () => {
    const onSelect = vi.fn();
    render(<ProductCard product={product} onSelect={onSelect} />);

    await userEvent.click(screen.getByRole('button', { name: 'Comprar' }));
    await userEvent.click(screen.getByRole('button', { name: /ver detalhes/i }));

    expect(onSelect).toHaveBeenCalledTimes(2);
    expect(onSelect).toHaveBeenCalledWith(product);
  });
});
