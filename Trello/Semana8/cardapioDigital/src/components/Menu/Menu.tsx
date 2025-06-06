import './Menu.css';

const Menu = () => {
  return (
    <nav className="menu">
      <div className="menu-container">
        <h1 className="restaurant-name">Mamamia Massas</h1>
        
        <ul className="menu-list">
          <li className="menu-item">
            <a href="#inicio" className="menu-link">Início</a>
          </li>
          <li className="menu-item">
            <a href="#gnocchi" className="menu-link">Gnocchi</a>
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