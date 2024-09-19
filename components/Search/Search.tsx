import React, { ReactElement } from 'react';
import styles from './Search.module.css';

const Search = (): ReactElement => {
  return (
    <div className={styles.searchContainer}>
      <input className={styles.input} placeholder='Поиск'/>
    </div>
  );
};

export default Search;
