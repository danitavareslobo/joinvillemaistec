import React from 'react';
import styles from './PriceTag.module.css';

interface PriceTagProps {
  value: number;
  className?: string;
}

const PriceTag: React.FC<PriceTagProps> = ({ value, className }) => {
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <span className={`${styles.priceTag} ${className || ''}`}>
      {formatPrice(value)}
    </span>
  );
};

export default PriceTag;