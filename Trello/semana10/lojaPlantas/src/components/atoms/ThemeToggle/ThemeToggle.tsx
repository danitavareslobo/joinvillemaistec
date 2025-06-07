import React from 'react';
import { useTheme } from '../../../theme/ThemeContext';
import styles from './ThemeToggle.module.css';

interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className, size = 'md' }) => {
  const { themeMode, toggleTheme } = useTheme();

  const getIcon = () => {
    return themeMode === 'light' ? '🌙' : '☀️';
  };

  const getLabel = () => {
    return themeMode === 'light' ? 'Modo Escuro' : 'Modo Claro';
  };

  const toggleClass = `${styles.toggle} ${styles[size]} ${className || ''}`;

  return (
    <button
      className={toggleClass}
      onClick={toggleTheme}
      aria-label={getLabel()}
      title={getLabel()}
    >
      <span className={styles.icon}>{getIcon()}</span>
      <span className={styles.label}>{getLabel()}</span>
    </button>
  );
};

export default ThemeToggle;