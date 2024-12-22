import React from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'outline' ;

interface ButtonProps {
    label: string;
    variant?: ButtonVariant;
    onClick?: () => void;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, variant = 'primary', onClick, disabled = false }) => {
    return (
        <button
            className={`${styles.button} ${styles[`button--${variant}`]}`}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;