import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    // Simula API indisponível para exercitar o fallback local.
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('offline')));
    vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('monta a vitrine e abre o modal com o produto clicado', async () => {
    render(<App />);

    await waitFor(() => expect(screen.getAllByRole('article').length).toBeGreaterThan(0));

    const first = screen.getAllByRole('article')[0];
    await userEvent.click(within(first).getByRole('button', { name: 'Comprar' }));

    const dialog = screen.getByRole('dialog');
    expect(within(dialog).getByRole('heading', { level: 2 })).toHaveTextContent(
      'Iphone 11 PRO MAX BRANCO 1',
    );

    await userEvent.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
