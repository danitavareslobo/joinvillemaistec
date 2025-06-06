import './Menu.css';

const Menu = () => {
  const scrollToSection = (sectionId: string) => {
    console.log('Tentando navegar para:', sectionId);
    const element = document.getElementById(sectionId);
    
    if (element) {
      console.log('Elemento encontrado:', element);
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = Math.max(0, elementPosition - headerOffset);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      console.log('Elemento não encontrado, usando fallback');
      if (sectionId === 'inicio') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className="menu">
      <div className="menu-container">
        <h1 className="restaurant-name">Mamamia Massas</h1>
        
        <ul className="menu-list">
          <li className="menu-item">
            <button onClick={() => scrollToSection('inicio')} className="menu-link">
              Início
            </button>
          </li>
          <li className="menu-item">
            <button onClick={() => scrollToSection('gnocchi')} className="menu-link">
              Gnocchi
            </button>
          </li>
          <li className="menu-item">
            <button onClick={() => scrollToSection('pastas')} className="menu-link">
              Pastas
            </button>
          </li>
          <li className="menu-item">
            <button onClick={() => scrollToSection('bebidas')} className="menu-link">
              Bebidas
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;