import React from 'react';
import ThemeToggle from '../../atoms/ThemeToggle';
import PlantIcon from '../../atoms/PlantIcon';
import styles from './StoreLayout.module.css';

interface StoreLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const StoreLayout: React.FC<StoreLayoutProps> = ({ children, className }) => {
  return (
    <div className={`${styles.layout} ${className || ''}`}>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.headerContent}>
            <div className={styles.logo}>
              <PlantIcon size="lg" />
              <div className={styles.logoText}>
                <h1 className={styles.logoTitle}>PlantStore</h1>
                <p className={styles.logoSubtitle}>Sua loja de plantas</p>
              </div>
            </div>

            <nav className={styles.navigation}>
              <a href="#home" className={styles.navLink}>Home</a>
              <a href="#plantas" className={styles.navLink}>Plantas</a>
              <a href="#cuidados" className={styles.navLink}>Cuidados</a>
              <a href="#contato" className={styles.navLink}>Contato</a>
            </nav>

            <div className={styles.headerActions}>
              <button className={styles.searchButton}>
                🔍
              </button>
              <button className={styles.cartButton}>
                🛒
              </button>
              <ThemeToggle size="md" />
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.mainContainer}>
          {children}
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerContent}>
            <div className={styles.footerLogo}>
              <PlantIcon size="md" />
              <div className={styles.footerLogoText}>
                <h3 className={styles.footerTitle}>PlantStore</h3>
                <p className={styles.footerSubtitle}>Cuidando da natureza</p>
              </div>
            </div>

            <div className={styles.footerLinks}>
              <div className={styles.linkGroup}>
                <h4 className={styles.linkGroupTitle}>Produtos</h4>
                <a href="#suculentas" className={styles.footerLink}>Suculentas</a>
                <a href="#cactos" className={styles.footerLink}>Cactos</a>
                <a href="#flores" className={styles.footerLink}>Flores</a>
                <a href="#arvores" className={styles.footerLink}>Árvores</a>
              </div>

              <div className={styles.linkGroup}>
                <h4 className={styles.linkGroupTitle}>Cuidados</h4>
                <a href="#rega" className={styles.footerLink}>Como Regar</a>
                <a href="#luz" className={styles.footerLink}>Iluminação</a>
                <a href="#solo" className={styles.footerLink}>Tipos de Solo</a>
                <a href="#pragas" className={styles.footerLink}>Pragas</a>
              </div>

              <div className={styles.linkGroup}>
                <h4 className={styles.linkGroupTitle}>Suporte</h4>
                <a href="#faq" className={styles.footerLink}>FAQ</a>
                <a href="#contato" className={styles.footerLink}>Contato</a>
                <a href="#entrega" className={styles.footerLink}>Entrega</a>
                <a href="#garantia" className={styles.footerLink}>Garantia</a>
              </div>

              <div className={styles.linkGroup}>
                <h4 className={styles.linkGroupTitle}>Redes Sociais</h4>
                <a href="#instagram" className={styles.footerLink}>📷 Instagram</a>
                <a href="#facebook" className={styles.footerLink}>📘 Facebook</a>
                <a href="#youtube" className={styles.footerLink}>📺 YouTube</a>
                <a href="#whatsapp" className={styles.footerLink}>💬 WhatsApp</a>
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p className={styles.copyright}>
              © 2025 PlantStore. Todos os direitos reservados.
            </p>
            <div className={styles.footerBottomLinks}>
              <a href="#privacidade" className={styles.bottomLink}>Privacidade</a>
              <a href="#termos" className={styles.bottomLink}>Termos</a>
              <a href="#cookies" className={styles.bottomLink}>Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StoreLayout;