import React, { useState, useEffect } from 'react';
import type { Plant } from '../../types/Plant';
import StoreLayout from '../../components/templates/StoreLayout';
import PlantGrid from '../../components/organisms/PlantGrid';
import Button from '../../components/atoms/Button';
import styles from './PlantStore.module.css';

const PlantStore: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [plants, setPlants] = useState<Plant[]>([]);
  const [cartItems, setCartItems] = useState<Plant[]>([]);
  const [filter, setFilter] = useState<'all' | 'sun' | 'shade'>('all');

  const mockPlants: Plant[] = [
    { id: "1", name: "Suculenta", price: 29.9, light: "sun" },
    { id: "2", name: "Samambaia", price: 39.9, light: "shade" },
    { id: "3", name: "Cacto", price: 19.9, light: "sun" },
    { id: "4", name: "Violeta", price: 24.9, light: "shade" },
    { id: "5", name: "Rosa do Deserto", price: 45.9, light: "sun" },
    { id: "6", name: "Jiboia", price: 34.9, light: "shade" },
    { id: "7", name: "Espada de São Jorge", price: 32.9, light: "sun" },
    { id: "8", name: "Antúrio", price: 42.9, light: "shade" },
    { id: "9", name: "Aloe Vera", price: 27.9, light: "sun" },
    { id: "10", name: "Ficus", price: 55.9, light: "shade" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setPlants(mockPlants);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = (plant: Plant) => {
    setCartItems(prev => [...prev, plant]);
    console.log(`${plant.name} adicionada ao carrinho!`);
  };

  const handleFilterChange = (newFilter: 'all' | 'sun' | 'shade') => {
    setFilter(newFilter);
  };

  const filteredPlants = filter === 'all' 
    ? plants 
    : plants.filter(plant => plant.light === filter);

  const totalCartValue = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <StoreLayout>
      <div className={styles.storePage}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Descubra o Mundo das Plantas
            </h1>
            <p className={styles.heroDescription}>
              Transforme seu espaço com nossas plantas cuidadosamente selecionadas. 
              Desde suculentas resistentes até flores delicadas, temos a planta perfeita para você.
            </p>
            <div className={styles.heroActions}>
              <Button variant="primary">
                🌱 Explorar Coleção
              </Button>
              <Button variant="secondary">
                📚 Guia de Cuidados
              </Button>
            </div>
          </div>
        </section>

        {cartItems.length > 0 && (
          <section className={styles.cartStatus}>
            <div className={styles.cartInfo}>
              <h3 className={styles.cartTitle}>
                🛒 {cartItems.length} {cartItems.length === 1 ? 'item' : 'itens'} no carrinho
              </h3>
              <p className={styles.cartTotal}>
                Total: {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(totalCartValue)}
              </p>
            </div>
            <Button variant="primary">
              Finalizar Compra
            </Button>
          </section>
        )}

        <section className={styles.filters}>
          <h2 className={styles.filtersTitle}>Nossa Coleção</h2>
          <div className={styles.filterButtons}>
            <Button 
              variant={filter === 'all' ? 'primary' : 'secondary'}
              onClick={() => handleFilterChange('all')}
            >
              🌿 Todas ({plants.length})
            </Button>
            <Button 
              variant={filter === 'sun' ? 'primary' : 'secondary'}
              onClick={() => handleFilterChange('sun')}
            >
              ☀️ Sol ({plants.filter(p => p.light === 'sun').length})
            </Button>
            <Button 
              variant={filter === 'shade' ? 'primary' : 'secondary'}
              onClick={() => handleFilterChange('shade')}
            >
              🌙 Sombra ({plants.filter(p => p.light === 'shade').length})
            </Button>
          </div>
        </section>

        <section className={styles.plantsSection}>
          <PlantGrid 
            plants={filteredPlants}
            onAddToCart={handleAddToCart}
            loading={loading}
            emptyStateMessage={
              filter === 'all' 
                ? "Nenhuma planta encontrada. Tente novamente mais tarde!"
                : `Nenhuma planta de ${filter === 'sun' ? 'sol' : 'sombra'} disponível no momento.`
            }
          />
        </section>

        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Não encontrou o que procurava?
            </h2>
            <p className={styles.ctaDescription}>
              Entre em contato conosco! Temos uma vasta coleção e podemos ajudar você a encontrar a planta perfeita.
            </p>
            <div className={styles.ctaActions}>
              <Button variant="primary">
                💬 Falar Conosco
              </Button>
              <Button variant="secondary">
                📧 Newsletter
              </Button>
            </div>
          </div>
        </section>
      </div>
    </StoreLayout>
  );
};

export default PlantStore;