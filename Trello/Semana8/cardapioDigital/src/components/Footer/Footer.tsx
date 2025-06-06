import React from 'react';
import './Footer.css';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}

const Footer: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/mamamiamassas',
      icon: '📷',
      color: '#E4405F'
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/mamamiamassas',
      icon: '📘',
      color: '#1877F2'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5547999887766',
      icon: '💬',
      color: '#25D366'
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@mamamiamassas',
      icon: '🎵',
      color: '#000000'
    }
  ];

  const contactInfo: ContactInfo = {
    address: 'Rua das Massas, 123 - Centro, Joinville - SC, 89201-100',
    phone: '(47) 9 9988-7766',
    email: 'contato@mamamiamassas.com.br',
    hours: 'Seg à Dom: 11h às 23h'
  };

  const handleSocialClick = (url: string): void => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section restaurant-info">
            <h3 className="footer-title">Mamamia Massas</h3>
            <p className="restaurant-tagline">
              Tradição italiana há mais de 70 anos
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span className="contact-text">{contactInfo.address}</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span className="contact-text">{contactInfo.phone}</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span className="contact-text">{contactInfo.email}</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">⏰</span>
                <span className="contact-text">{contactInfo.hours}</span>
              </div>
            </div>
          </div>

          <div className="footer-section social-section">
            <h3 className="footer-title">Nos Siga</h3>
            <p className="social-subtitle">
              Acompanhe nossas novidades e promoções
            </p>
            <div className="social-links">
              {socialLinks.map((social: SocialLink, index: number) => (
                <button
                  key={social.name}
                  className="social-link"
                  onClick={() => handleSocialClick(social.url)}
                  style={{ 
                    '--social-color': social.color,
                    animationDelay: `${index * 0.1}s`
                  } as React.CSSProperties}
                  aria-label={`Seguir no ${social.name}`}
                  type="button"
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="footer-section hours-section">
            <h3 className="footer-title">Delivery</h3>
            <div className="delivery-info">
              <div className="delivery-item">
                <span className="delivery-icon">🛵</span>
                <div className="delivery-text">
                  <strong>Entrega Grátis</strong>
                  <span>Pedidos acima de R$ 50,00</span>
                </div>
              </div>
              <div className="delivery-item">
                <span className="delivery-icon">⚡</span>
                <div className="delivery-text">
                  <strong>Entrega Rápida</strong>
                  <span>30-45 minutos</span>
                </div>
              </div>
              <div className="delivery-item">
                <span className="delivery-icon">📱</span>
                <div className="delivery-text">
                  <strong>Peça pelo WhatsApp</strong>
                  <span>{contactInfo.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="copyright">
            <span className="copyright-text">
              © {currentYear} Mamamia Massas. Todos os direitos reservados.
            </span>
            <span className="made-with">
              Feito com ❤️ para você
            </span>
          </div>
          <div className="footer-links">
            <button className="footer-link" type="button">Política de Privacidade</button>
            <button className="footer-link" type="button">Termos de Uso</button>
            <button className="footer-link" type="button">Contato</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;