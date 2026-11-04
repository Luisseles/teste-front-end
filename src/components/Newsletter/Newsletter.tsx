import { useState, type FormEvent } from 'react';
import styles from './Newsletter.module.scss';

export function Newsletter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Integração com backend fora do escopo do teste.
    setSent(true);
    setName('');
    setEmail('');
    setAccepted(false);
  };

  return (
    <section className={styles.newsletter} aria-labelledby="newsletter-title">
      <div className={styles.inner}>
        <div className={styles.text}>
          <h2 id="newsletter-title" className={styles.title}>
            Inscreva-se na nossa newsletter
          </h2>
          <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="newsletter-name">
            Seu nome
          </label>
          <input
            id="newsletter-name"
            type="text"
            placeholder="Digite seu nome"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="sr-only" htmlFor="newsletter-email">
            Seu e-mail
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Digite seu e-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Inscrever</button>

          <label className={styles.terms}>
            <input
              type="checkbox"
              required
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
            />
            Aceito os termos e condições
          </label>

          {sent && (
            <p className={styles.success} role="status">
              Obrigado! Você foi inscrito na newsletter.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
