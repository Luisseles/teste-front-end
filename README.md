# Teste Front-End Econverse

Página desenvolvida em **React + TypeScript** com **Sass**, seguindo o layout do Figma, com vitrine de produtos consumindo o JSON da Econverse e modal de detalhes ao clicar em um produto.

## Tecnologias

- [Vite](https://vitejs.dev/) + React 18 + TypeScript
- Sass (SCSS Modules, um arquivo de estilo por componente)
- Vitest + Testing Library (testes)
- Sem bibliotecas de UI (Bootstrap, Foundation etc.) e sem biblioteca de carrossel: o carrossel é próprio (`useCarousel`)

## Pré-requisitos

- Node.js 18 ou superior
- npm

## Como rodar

```bash
# 1. instalar as dependências
npm install

# 2. rodar em modo desenvolvimento (http://localhost:5173)
npm run dev

# 3. rodar os testes
npm test

# 4. gerar o build de produção (checa os tipos e compila em /dist)
npm run build

# 5. visualizar o build localmente
npm run preview
```

## Estrutura do projeto

```
src/
├── assets/images/        # imagens extraídas do layout (hero, parceiros, ícones)
├── components/
│   ├── Header/           # BenefitsBar, SearchBar, MainNav
│   ├── Hero/
│   ├── CategoryList/
│   ├── ProductShowcase/  # SectionTitle, CategoryTabs, ProductCarousel, ProductCard
│   ├── PartnerBanners/
│   ├── BrandList/
│   ├── Newsletter/
│   ├── Footer/
│   ├── ProductModal/
│   ├── Logo/ e Icons/
├── hooks/                # useProducts (dados) e useCarousel (lógica do carrossel)
├── services/             # productService (fetch do JSON)
├── data/products.json    # cópia local do JSON (fallback)
├── styles/               # variáveis, mixins e estilos globais (Sass)
├── types/ e utils/       # tipos e formatação de moeda
└── App.tsx
```

