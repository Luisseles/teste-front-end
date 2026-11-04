import heroImage from '../../assets/images/hero.jpg';
import styles from './Hero.module.scss';

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <img className={styles.image} src={heroImage} alt="" />
      <div className={styles.content}>
        <h1 id="hero-title" className={styles.title}>
          Venha conhecer nossas promoções
        </h1>
        <p className={styles.subtitle}>
          <strong>50% Off</strong> nos produtos
        </p>
        <a href="#produtos" className={styles.cta}>
          Ver produto
        </a>
      </div>
    </section>
  );
}
