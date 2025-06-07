import React from 'react';
import type { Plant } from '../../../types/Plant';
import PlantCard from '../../molecules/PlantCard';
import { useBreakpoints } from '../../../hooks/useMediaQuery';
import styles from './PlantGrid.module.css';

interface PlantGridProps {
  plants: Plant[];
  onAddToCart?: (plant: Plant) => void;
  className?: string;
  loading?: boolean;
  emptyStateMessage?: string;
}

const PlantGrid: React.FC<PlantGridProps> = ({ 
  plants, 
  onAddToCart, 
  className,
  loading = false,
  emptyStateMessage = "Nenhuma planta encontrada"
}) => {
  const { isMobile, isTablet, isDesktop, getColumns } = useBreakpoints();
  
  if (loading) {
    return (
      <div className={`${styles.grid} ${className || ''}`}>
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner}>🌱</div>
          <p className={styles.loadingText}>Carregando plantas...</p>
        </div>
      </div>
    );
  }

  if (!plants || plants.length === 0) {
    return (
      <div className={`${styles.grid} ${className || ''}`}>
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>🪴</div>
          <h3 className={styles.emptyTitle}>Oops!</h3>
          <p className={styles.emptyMessage}>{emptyStateMessage}</p>
        </div>
      </div>
    );
  }

  const getGridClass = () => {
    if (isMobile) return styles.gridMobile;
    if (isTablet) return styles.gridTablet;
    if (isDesktop) return styles.gridDesktop;
    return styles.gridDesktop; 
  };

  const gridClass = `${styles.grid} ${getGridClass()} ${className || ''}`;

  return (
    <div className={styles.container}>
      <div className={styles.gridInfo}>
        <span className={styles.deviceIndicator}>
          {isMobile && '📱 Mobile (1 coluna)'}
          {isTablet && '📱 Tablet (2 colunas)'}
          {isDesktop && '🖥️ Desktop (3 colunas)'}
        </span>
        <span className={styles.itemCount}>
          {plants.length} planta{plants.length !== 1 ? 's' : ''}
        </span>
      </div>

      <div className={gridClass}>
        {plants.map((plant) => (
          <div key={plant.id} className={styles.gridItem}>
            <PlantCard
              plant={plant}
              onAddToCart={onAddToCart}
            />
          </div>
        ))}
      </div>

      <div className={styles.gridStats}>
        <div className={styles.statItem}>
          <span className={styles.statIcon}>☀️</span>
          <span className={styles.statText}>
            {plants.filter(p => p.light === 'sun').length} plantas de sol
          </span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statIcon}>🌙</span>
          <span className={styles.statText}>
            {plants.filter(p => p.light === 'shade').length} plantas de sombra
          </span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statIcon}>💰</span>
          <span className={styles.statText}>
            Preço médio: {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(plants.reduce((acc, p) => acc + p.price, 0) / plants.length)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlantGrid;