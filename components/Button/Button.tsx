import React, { ReactElement } from 'react';
import { ButtonProps } from "@/components/Button/Button.props";
import styles from './Button.module.css';
import cn from 'classnames';

const Button = ({ appearance, children, className, ...props }: ButtonProps): ReactElement => {
  return (
    <button className={cn(styles.button, className, {
     [styles.primary]: appearance === 'primary',
     [styles.secondary]: appearance === 'secondary',
    })}
            {...props}>{children}</button>
  );
};

export default Button;
