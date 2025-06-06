import './Menu.css';

const Menu = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="menu">
      <div className="menu-container">
        <h1 className="restaurant-name">Mamamia Massas</h1>
        
        <ul className="menu-list">
          <li className="menu-item">
            <button onClick={() => scrollToSection('inicio')} className="menu-link">Início</button>
          </li>
          <li className="menu-item">
            <button onClick={() => scrollToSection('gnocchi')} className="menu-link">Gnocchi</button>
          </li>
          <li className="menu-item">
            <a href="#pastas" className="menu-link">Pastas</a>
          </li>
          <li className="menu-item">
            <a href="#bebidas" className="menu-link">Bebidas</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;