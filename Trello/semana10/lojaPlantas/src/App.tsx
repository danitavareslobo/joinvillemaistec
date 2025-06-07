import React, { useState, useEffect } from 'react';
import type { Plant } from './types/Plant';
import PlantGrid from './components/organisms/PlantGrid';
import Button from './components/atoms/Button';
import styles from './App.module.css';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [plants, setPlants] = useState<Plant[]>([]);
  const [cartItems, setCartItems] = useState<Plant[]>([]);

  const mockPlants: Plant[] = [
    { id: "1", name: "Suculenta", price: 29.9, light: "sun" },
    { id: "2", name: "Samambaia", price: 39.9, light: "shade" },
    { id: "3", name: "Cacto", price: 19.9, light: "sun" },
    { id: "4", name: "Violeta", price: 24.9, light: "shade" },
    { id: "5", name: "Rosa do Deserto", price: 45.9, light: "sun" },
    { id: "6", name: "Jiboia", price: 34.9, light: "shade" },
    { id: "7", name: "Espada de São Jorge", price: 32.9, light: "sun" },
    { id: "8", name: "Antúrio", price: 42.9, light: "shade" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setPlants(mockPlants);
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = (plant: Plant) => {
    setCartItems(prev => [...prev, plant]);
    alert(`🌱 ${plant.name} adicionada ao carrinho por ${new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(plant.price)}!`);
  };

  const handleToggleLoading = () => {
    setLoading(!loading);
    if (!loading) {
      setTimeout(() => setLoading(false), 2000);
    }
  };

  const handleClearPlants = () => {
    setPlants([]);
  };

  const handleRestorePlants = () => {
    setPlants(mockPlants);
  };

  const totalCartValue = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            🌱 Loja de Plantas
          </h1>
          
        </header>

        {cartItems.length > 0 && (
          <div className={styles.cart}>
            <h3 className={styles.cartTitle}>
              🛒 Carrinho ({cartItems.length} {cartItems.length === 1 ? 'item' : 'itens'})
            </h3>
            <p className={styles.cartTotal}>
              Total: {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(totalCartValue)}
            </p>
          </div>
        )}

        <div className={styles.controls}>
          <Button 
            variant="primary"
            onClick={handleToggleLoading}
          >
            {loading ? '⏸️ Parar Loading' : '🔄 Simular Loading'}
          </Button>
          <Button 
            variant="secondary"
            onClick={handleClearPlants}
          >
            🗑️ Limpar Grid
          </Button>
          <Button 
            variant="primary"
            onClick={handleRestorePlants}
          >
            🌿 Restaurar Plantas
          </Button>
        </div>

        <PlantGrid 
          plants={plants}
          onAddToCart={handleAddToCart}
          loading={loading}
          emptyStateMessage="Nenhuma planta disponível no momento. Tente novamente mais tarde!"
        />

      </div>
    </div>
  );
};

export default App;