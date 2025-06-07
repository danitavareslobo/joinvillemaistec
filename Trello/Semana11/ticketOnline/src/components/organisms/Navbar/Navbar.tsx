import React from 'react';
import ThemeToggle from '../../atoms/ThemeToggle/ThemeToggle';
import './Navbar.css';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'inicio', label: 'Início', path: 'inicio' },
    { id: 'filmes', label: 'Filmes', path: 'filmes' },
    { id: 'contato', label: 'Contato', path: 'contato' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h2>TicketOnline</h2>
        </div>
        
        <ul className="navbar-menu">
          {navItems.map(item => (
            <li key={item.id} className="navbar-item">
              <button
                className={`navbar-link ${currentPage === item.path ? 'active' : ''}`}
                onClick={() => onNavigate(item.path)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        
        <div className="navbar-controls">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;