import styles from './ProductShowcase.module.scss';

interface CategoryTabsProps {
  tabs: string[];
  active: string;
  onChange: (tab: string) => void;
}

export function CategoryTabs({ tabs, active, onChange }: CategoryTabsProps) {
  return (
    <div className={styles.tabs} role="tablist" aria-label="Categorias de produtos">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          role="tab"
          aria-selected={tab === active}
          className={`${styles.tab} ${tab === active ? styles.tabActive : ''}`}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
