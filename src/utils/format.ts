const brl = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const formatCurrency = (value: number): string => brl.format(value);

export const formatInstallment = (value: number, times = 2): string =>
  `ou ${times}x de ${formatCurrency(value / times)} sem juros`;
