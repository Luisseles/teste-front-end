import { useState, type FormEvent } from 'react';
import { SearchIcon } from '../Icons/Icons';
import styles from './Header.module.scss';

export function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Busca fora do escopo do teste.
  };

  return (
    <form className={styles.search} role="search" onSubmit={handleSubmit}>
      <label htmlFor="site-search" className="sr-only">
        Buscar produtos
      </label>
      <input
        id="site-search"
        type="search"
        placeholder="O que você está buscando?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" aria-label="Buscar">
        <SearchIcon size={24} />
      </button>
    </form>
  );
}
