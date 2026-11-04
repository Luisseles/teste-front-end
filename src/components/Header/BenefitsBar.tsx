import { CardIcon, ShieldIcon, TruckIcon } from '../Icons/Icons';
import styles from './Header.module.scss';

export function BenefitsBar() {
  return (
    <ul className={styles.benefits} aria-label="Benefícios">
      <li className={styles.benefit}>
        <ShieldIcon size={18} />
        <span>
          Compra <strong>100% segura</strong>
        </span>
      </li>
      <li className={styles.benefit}>
        <TruckIcon size={18} />
        <span>
          <strong>Frete grátis</strong> acima de R$ 200
        </span>
      </li>
      <li className={styles.benefit}>
        <CardIcon size={18} />
        <span>
          <strong>Parcele</strong> suas compras
        </span>
      </li>
    </ul>
  );
}
