import React, { ReactElement } from 'react';
import styles from './Header.module.css';
import Image from "next/image";
import Search from "@/components/Search/Search";
import WishlistIcon from "/public/wishlist-icon.svg";
import CartIcon from "/public/cart-full-icon.svg";
import ProfileIcon from "/public/profile-icon.svg";



const Header = (): ReactElement => {
  return (
    <div className={styles.headerContainer}>
      <div>
        <Image
          src='/logo.svg'
          alt='Loft Мебель'
          width={113}
          height={25}
        />
      </div>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.userBar}>
        <div className={styles.icon}>
          <WishlistIcon/>
        </div>
        <div className={styles.icon}>
          <CartIcon />
        </div>
        <div className={styles.icon}>
          <ProfileIcon />
        </div>

      </div>
    </div>
  );
};

export default Header;
