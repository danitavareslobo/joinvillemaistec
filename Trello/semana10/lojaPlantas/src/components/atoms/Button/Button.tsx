import React from 'react';
import type { ButtonVariant } from '../../../types/Plant';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, children, className, ...props }) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${className || ''}`;

  return (
    <button
      className={buttonClass}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;