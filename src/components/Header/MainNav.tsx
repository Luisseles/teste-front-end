import { CrownIcon } from '../Icons/Icons';
import styles from './Header.module.scss';

const links = [
  { label: 'Todas categorias', href: '#' },
  { label: 'Supermercado', href: '#' },
  { label: 'Livros', href: '#' },
  { label: 'Moda', href: '#' },
  { label: 'Lançamentos', href: '#' },
  { label: 'Ofertas do dia', href: '#', active: true },
  { label: 'Assinatura', href: '#', icon: true },
];

export function MainNav() {
  return (
    <nav className={styles.nav} aria-label="Menu principal">
      <ul className={styles.navInner}>
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className={`${styles.navLink} ${link.active ? styles.navLinkActive : ''}`}
              aria-current={link.active ? 'page' : undefined}
            >
              {link.icon && <CrownIcon size={18} />}
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
