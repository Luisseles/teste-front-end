import { formatCurrency, formatInstallment } from './format';

// Intl usa espaço não separável (U+00A0) entre "R$" e o valor.
const normalize = (text: string) => text.replace(/ /g, ' ');

describe('format', () => {
  it('formata valores em reais', () => {
    expect(normalize(formatCurrency(15000))).toBe('R$ 15.000,00');
    expect(normalize(formatCurrency(520))).toBe('R$ 520,00');
  });

  it('formata o parcelamento em 2x sem juros', () => {
    expect(normalize(formatInstallment(9000))).toBe('ou 2x de R$ 4.500,00 sem juros');
  });
});
