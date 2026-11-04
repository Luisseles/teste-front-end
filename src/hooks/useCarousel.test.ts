import { act, renderHook } from '@testing-library/react';
import { useCarousel } from './useCarousel';

describe('useCarousel', () => {
  it('não passa dos limites (10 itens, 4 visíveis => índice máximo 6)', () => {
    const { result } = renderHook(() => useCarousel(10, 4));

    expect(result.current.canPrev).toBe(false);
    act(() => result.current.prev());
    expect(result.current.index).toBe(0);

    for (let i = 0; i < 20; i++) act(() => result.current.next());
    expect(result.current.index).toBe(6);
    expect(result.current.canNext).toBe(false);
  });

  it('ajusta o índice quando a quantidade visível aumenta', () => {
    const { result, rerender } = renderHook(({ visible }) => useCarousel(10, visible), {
      initialProps: { visible: 1 },
    });
    for (let i = 0; i < 9; i++) act(() => result.current.next());
    expect(result.current.index).toBe(9);

    rerender({ visible: 4 });
    expect(result.current.index).toBe(6);
  });
});
