import partnersImage from '../../assets/images/partners.jpg';
import styles from './PartnerBanners.module.scss';

const banners = [
  { id: 'parceiros-1', title: 'Parceiros', text: 'Lorem ipsum dolor sit amet, consectetur', cta: 'Confira' },
  { id: 'parceiros-2', title: 'Parceiros', text: 'Lorem ipsum dolor sit amet, consectetur', cta: 'Confira' },
];

export function PartnerBanners() {
  return (
    <section className={styles.wrapper} aria-label="Parceiros">
      <ul className={styles.list}>
        {banners.map(({ id, title, text, cta }) => (
          <li key={id} className={styles.banner}>
            <img className={styles.image} src={partnersImage} alt="" loading="lazy" />
            <div className={styles.content}>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.text}>{text}</p>
              <a href="#" className={styles.cta}>
                {cta}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
