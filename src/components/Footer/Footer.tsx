import { FacebookIcon, InstagramIcon, LinkedinIcon } from '../Icons/Icons';
import { Logo } from '../Logo/Logo';
import styles from './Footer.module.scss';

const columns = [
  { title: 'Institucional', links: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'] },
  { title: 'Ajuda', links: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'] },
  { title: 'Termos', links: ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'] },
];

const socials = [
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'LinkedIn', Icon: LinkedinIcon },
];

export function Footer() {
  return (
    <footer>
      <div className={styles.main}>
        <div className={styles.inner}>
          <div className={styles.brand}>
            <Logo size={48} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul className={styles.socials}>
              {socials.map(({ label, Icon }) => (
                <li key={label}>
                  <a href="#" aria-label={label}>
                    <Icon size={24} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className={styles.columns} aria-label="Rodapé">
            {columns.map(({ title, links }) => (
              <div key={title}>
                <h3 className={styles.columnTitle}>{title}</h3>
                <ul>
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>
      <p className={styles.copy}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </footer>
  );
}
