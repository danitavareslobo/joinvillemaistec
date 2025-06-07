import React from 'react';
import type { Plant } from '../../../types/Plant';
import Button from '../../atoms/Button';
import PriceTag from '../../atoms/PriceTag';
import PlantIcon from '../../atoms/PlantIcon';
import styles from './PlantCard.module.css';

interface PlantCardProps {
  plant: Plant;
  onAddToCart?: (plant: Plant) => void;
  className?: string;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant, onAddToCart, className }) => {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(plant);
    }
  };

  const getLightIcon = (light: Plant['light']) => {
    return light === 'sun' ? '☀️' : '🌙';
  };

  const getLightText = (light: Plant['light']) => {
    return light === 'sun' ? 'Sol' : 'Sombra';
  };

  return (
    <div className={`${styles.card} ${className || ''}`}>
      <div className={styles.cardHeader}>
        <PlantIcon size="lg" />
        <div className={styles.lightIndicator}>
          <span className={styles.lightIcon}>{getLightIcon(plant.light)}</span>
          <span className={styles.lightText}>{getLightText(plant.light)}</span>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.imagePlaceholder}>
          <PlantIcon size="md" color="#c8e6c9" />
        </div>
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.plantName}>{plant.name}</h3>
        
        <div className={styles.plantDetails}>
          <div className={styles.lightRequirement}>
            <span className={styles.detailIcon}>🌱</span>
            <span>Prefere {getLightText(plant.light).toLowerCase()}</span>
          </div>
        </div>

        <div className={styles.priceSection}>
          <PriceTag value={plant.price} />
        </div>
      </div>

      <div className={styles.cardFooter}>
        <Button 
          variant="primary" 
          onClick={handleAddToCart}
          className={styles.addButton}
        >
          Adicionar ao Carrinho
        </Button>
        <Button 
          variant="secondary" 
          className={styles.detailsButton}
        >
          Ver Detalhes
        </Button>
      </div>
    </div>
  );
};

export default PlantCard;