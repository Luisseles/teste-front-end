import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { Product } from '../../types/product';
import { ProductModal } from './ProductModal';

const product: Product = {
  productName: 'Iphone 11 PRO MAX BRANCO 1',
  descriptionShort: 'Descrição do produto',
  photo: 'https://exemplo.com/foto.png',
  price: 15000,
};

describe('ProductModal', () => {
  it('mostra as informações do produto em um dialog acessível', () => {
    render(<ProductModal product={product} onClose={() => {}} />);

    const dialog = screen.getByRole('dialog', { name: product.productName });
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(screen.getByText(/15\.000,00/)).toBeInTheDocument();
    expect(screen.getByText('Descrição do produto')).toBeInTheDocument();
  });

  it('fecha com o botão, com ESC e ao clicar fora', async () => {
    const onClose = vi.fn();
    const { container } = render(<ProductModal product={product} onClose={onClose} />);

    await userEvent.click(screen.getByRole('button', { name: 'Fechar' }));
    expect(onClose).toHaveBeenCalledTimes(1);

    await userEvent.keyboard('{Escape}');
    expect(onClose).toHaveBeenCalledTimes(2);

    await userEvent.click(container.firstElementChild as Element);
    expect(onClose).toHaveBeenCalledTimes(3);
  });

  it('trava o scroll do body enquanto está aberto', () => {
    const { unmount } = render(<ProductModal product={product} onClose={() => {}} />);
    expect(document.body.style.overflow).toBe('hidden');
    unmount();
    expect(document.body.style.overflow).toBe('');
  });
});
