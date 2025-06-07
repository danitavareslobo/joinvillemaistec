import React from 'react';
import type { IconSize } from '../../../types/Plant';
import styles from './PlantIcon.module.css';

interface PlantIconProps {
  size: IconSize;
  className?: string;
  color?: string;
}

const PlantIcon: React.FC<PlantIconProps> = ({ size, className, color = '#4caf50' }) => {
  const sizeClass = styles[size];
  const iconClass = `${styles.plantIcon} ${sizeClass} ${className || ''}`;

  return (
    <span 
      className={iconClass}
      style={{ color }}
      role="img" 
      aria-label="Planta"
    >
      🌿
    </span>
  );
};

export default PlantIcon;