'use client';

import React, { ReactElement, useState } from 'react';
import styles from './Card.module.css';
import { CardProps } from "@/components/Card/Card.props";
import WishlistIcon from "/public/wishlist-icon.svg";

const Card = ({ title, category, price, imageUrl, sizes }: CardProps): ReactElement => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (): void => {
    setIsHovered(true);
  };

  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <div className={`${styles.cardContainer} ${isHovered ? 'hovered' : ''}`}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}>
      <WishlistIcon className={styles.wishIcon} />
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.cardInfo}>
        <div className={styles.title}>{title}</div>
        <div className={styles.category}>{category}</div>
        <div className={styles.price}>{price.toLocaleString('ru-RU')}₽</div>
        {isHovered && (
          <div className={styles.sizes}>{sizes.width}x{sizes.height}x{sizes.depth} см</div>
        )}

      </div>
    </div>
  );
};

export default Card;
