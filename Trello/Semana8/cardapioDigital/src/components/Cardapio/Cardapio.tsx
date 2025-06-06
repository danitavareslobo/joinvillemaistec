import React from 'react';
import Menu from '../Menu/Menu';
import Apresentacao from '../Apresentacao/Apresentacao';
import Gnocchi from '../Gnocchi/Gnocchi';
import Pastas from '../Pastas/Pastas';
import Bebidas from '../Bebidas/Bebidas';
import Footer from '../Footer/Footer';
import './Cardapio.css';

const Cardapio: React.FC = () => {
  return (
    <div className="cardapio">
      <Menu />
      
      <main className="cardapio-main">
        <Apresentacao />
        
        <Gnocchi />
        
        <Pastas />
        
        <Bebidas />
      </main>
      
      <Footer />
    </div>
  );
};

export default Cardapio;