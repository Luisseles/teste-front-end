import { useState } from 'react';
import tecnologia from '../../assets/images/cat-tecnologia.png';
import supermercado from '../../assets/images/cat-supermercado.png';
import bebidas from '../../assets/images/cat-bebidas.png';
import ferramentas from '../../assets/images/cat-ferramentas.png';
import saude from '../../assets/images/cat-saude.png';
import esportes from '../../assets/images/cat-esportes.png';
import moda from '../../assets/images/cat-moda.png';
import styles from './CategoryList.module.scss';

const categories = [
  { id: 'tecnologia', label: 'Tecnologia', icon: tecnologia },
  { id: 'supermercado', label: 'Supermercado', icon: supermercado },
  { id: 'bebidas', label: 'Bebidas', icon: bebidas },
  { id: 'ferramentas', label: 'Ferramentas', icon: ferramentas },
  { id: 'saude', label: 'Saúde', icon: saude },
  { id: 'esportes', label: 'Esportes e Fitness', icon: esportes },
  { id: 'moda', label: 'Moda', icon: moda },
];

export function CategoryList() {
  const [active, setActive] = useState('tecnologia');

  return (
    <nav className={styles.wrapper} aria-label="Categorias">
      <ul className={styles.list}>
        {categories.map(({ id, label, icon }) => {
          const isActive = id === active;
          return (
            <li key={id}>
              <button
                type="button"
                className={`${styles.item} ${isActive ? styles.active : ''}`}
                aria-pressed={isActive}
                onClick={() => setActive(id)}
              >
                <span className={styles.card}>
                  <img src={icon} alt="" width={64} height={64} />
                </span>
                <span className={styles.label}>{label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
