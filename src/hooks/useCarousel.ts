import { useCallback, useEffect, useState } from 'react';

/** Quantos cards cabem por vez, conforme a largura da tela. */
export function useVisibleSlides(): number {
  const calc = () => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth >= 1100) return 4;
    if (window.innerWidth >= 700) return 2;
    return 1;
  };
  const [visible, setVisible] = useState(calc);

  useEffect(() => {
    const onResize = () => setVisible(calc());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return visible;
}

/** Controla o índice do carrossel (avança de 1 em 1 card). */
export function useCarousel(total: number, visible: number) {
  const maxIndex = Math.max(0, total - visible);
  const [index, setIndex] = useState(0);

  // Se a quantidade visível muda (resize), garante que o índice continue válido.
  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  const next = useCallback(() => setIndex((i) => Math.min(i + 1, maxIndex)), [maxIndex]);
  const prev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), []);

  return {
    index,
    next,
    prev,
    canPrev: index > 0,
    canNext: index < maxIndex,
  };
}
