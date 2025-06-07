import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  return (
    <header className="header">
      <Navbar currentPage={currentPage} onNavigate={onNavigate} />
    </header>
  );
};

export default Header;