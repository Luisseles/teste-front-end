import logo from '../../assets/images/logo.png';
import styles from './Logo.module.scss';

interface LogoProps {
  width?: number;
  className?: string;
}

export function Logo({ width = 139, className = '' }: LogoProps) {
  return (
    <img
      className={`${styles.logo} ${className}`}
      src={logo}
      alt="Econverse"
      width={width}
      style={{ width }}
    />
  );
}