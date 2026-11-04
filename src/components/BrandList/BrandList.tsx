import { Logo } from '../Logo/Logo';
import styles from './BrandList.module.scss';

// Os logos do layout são placeholders da própria Econverse.
const brands = Array.from({ length: 5 }, (_, i) => ({ id: i + 1, name: `Econverse ${i + 1}` }));

export function BrandList() {
  return (
    <section className={styles.wrapper} aria-labelledby="marcas-title">
      <h2 id="marcas-title" className={styles.title}>
        Navegue por marcas
      </h2>
      <ul className={styles.list}>
        {brands.map(({ id, name }) => (
          <li key={id}>
            <a href="#" className={styles.brand} aria-label={name}>
              <Logo size={30} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
