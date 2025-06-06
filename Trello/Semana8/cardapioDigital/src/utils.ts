export type CategoriaType = "Água" | "Refrigerante" | "Sucos";

export const CATEGORIA_COLORS: Record<CategoriaType, string> = {
  "Água": "#3498db",
  "Refrigerante": "#e74c3c",
  "Sucos": "#f39c12"
};

export const CATEGORIA_ICONS: Record<CategoriaType, string> = {
  "Água": "💧",
  "Refrigerante": "🥤",
  "Sucos": "🧃"
};

export const scrollToSection = (sectionId: string, headerOffset: number = 80): void => {
  const element = document.getElementById(sectionId);
  
  if (element) {
    const elementPosition = element.offsetTop;
    const offsetPosition = Math.max(0, elementPosition - headerOffset);

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  } else {
    if (sectionId === 'inicio') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
};

export const getCategoriaIcon = (categoria: CategoriaType): string => {
  return CATEGORIA_ICONS[categoria] || "🥤";
};

export const getCategoriaColor = (categoria: CategoriaType): string => {
  return CATEGORIA_COLORS[categoria] || "#95a5a6";
};

export const formatPrice = (preco: string): string => {
  return preco.replace(/[^\d,]/g, '').replace(',', '.');
};

export const openExternalLink = (url: string): void => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

export const getAnimationDelay = (index: number, baseDelay: number = 0.1): string => {
  return `${index * baseDelay}s`;
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidBrazilianPhone = (phone: string): boolean => {
  const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
  return phoneRegex.test(phone);
};

export const getCurrentYear = (): number => {
  return new Date().getFullYear();
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const generateRandomId = (length: number = 8): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  return result;
};