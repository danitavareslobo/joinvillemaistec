import React from 'react';
import './Menu.css';

const Menu: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToGnocchi = () => {
    const element = document.getElementById('gnocchi');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToPastas = () => {
    const element = document.getElementById('pastas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToBebidas = () => {
    const element = document.getElementById('bebidas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="menu">
      <div className="menu-container">
        <h1 className="restaurant-name">Mamamia Massas</h1>
        
        <ul className="menu-list">
          <li className="menu-item">
            <button 
              onClick={scrollToTop}
              className="menu-link"
              type="button"
            >
              Início
            </button>
          </li>
          <li className="menu-item">
            <button 
              onClick={scrollToGnocchi}
              className="menu-link"
              type="button"
            >
              Gnocchi
            </button>
          </li>
          <li className="menu-item">
            <button 
              onClick={scrollToPastas}
              className="menu-link"
              type="button"
            >
              Pastas
            </button>
          </li>
          <li className="menu-item">
            <button 
              onClick={scrollToBebidas}
              className="menu-link"
              type="button"
            >
              Bebidas
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
