import { BoxIcon, CartIcon, HeartIcon, UserIcon } from '../Icons/Icons';
import { Logo } from '../Logo/Logo';
import { BenefitsBar } from './BenefitsBar';
import { MainNav } from './MainNav';
import { SearchBar } from './SearchBar';
import styles from './Header.module.scss';

export function Header() {
  return (
    <header>
      <BenefitsBar />
      <div className={styles.main}>
        <a href="/" aria-label="Econverse - página inicial">
          <Logo size={40} />
        </a>
        <SearchBar />
        <div className={styles.actions}>
          <button type="button" aria-label="Meus pedidos">
            <BoxIcon size={28} />
          </button>
          <button type="button" aria-label="Favoritos">
            <HeartIcon size={28} />
          </button>
          <button type="button" aria-label="Minha conta">
            <UserIcon size={28} />
          </button>
          <button type="button" aria-label="Carrinho">
            <CartIcon size={28} />
          </button>
        </div>
      </div>
      <MainNav />
    </header>
  );
}
