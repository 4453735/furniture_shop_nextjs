import React, { ReactElement } from 'react';
import styles from './Catalog.module.css';
import Card from "@/components/Card/Card";

const catalogData = [
  {
    id: 1,
    title: 'Валенсия Beige',
    category: 'Барные стулья',
    price: 2300,
    imageUrl: 'https://via.placeholder.com/200',
    sizes: {
      width: 50,
      height: 100,
      depth: 50,
    },
  },
  {
    id: 2,
    title: 'Валенсия Beige',
    category: 'Барные стулья',
    price: 2300,
    imageUrl: 'https://via.placeholder.com/200',
    sizes: {
      width: 50,
      height: 100,
      depth: 50,
    },
  },
  {
    id: 3,
    title: 'Валенсия Beige',
    category: 'Барные стулья',
    price: 2300,
    imageUrl: 'https://via.placeholder.com/200',
    sizes: {
      width: 50,
      height: 100,
      depth: 50,
    },
  },
  {
    id: 4,
    title: 'Валенсия Beige',
    category: 'Барные стулья',
    price: 2300,
    imageUrl: 'https://via.placeholder.com/200',
    sizes: {
      width: 50,
      height: 100,
      depth: 50,
    },
  },
  {
    id: 5,
    title: 'Валенсия Beige',
    category: 'Барные стулья',
    price: 2300,
    imageUrl: 'https://via.placeholder.com/200',
    sizes: {
      width: 50,
      height: 100,
      depth: 50,
    },
  },
  {
    id: 6,
    title: 'Валенсия Beige',
    category: 'Барные стулья',
    price: 2300,
    imageUrl: 'https://via.placeholder.com/200',
    sizes: {
      width: 50,
      height: 100,
      depth: 50,
    },
  },
  {
    id: 7,
    title: 'Валенсия Beige',
    category: 'Барные стулья',
    price: 2300,
    imageUrl: 'https://via.placeholder.com/200',
    sizes: {
      width: 50,
      height: 100,
      depth: 50,
    },
  },
  {
    id: 8,
    title: 'Валенсия Beige',
    category: 'Барные стулья',
    price: 2300,
    imageUrl: 'https://via.placeholder.com/200',
    sizes: {
      width: 50,
      height: 100,
      depth: 50,
    },
  },
]

const Catalog = (): ReactElement => {
  return (
    <div className={styles.catalogContainer}>
      {catalogData.map(item => <Card key={item.id} title={item.title} category={item.category} price={item.price} imageUrl={item.imageUrl} sizes={item.sizes} /> )}
    </div>
  );
};

export default Catalog;
