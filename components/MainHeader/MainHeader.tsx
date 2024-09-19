import React, { ReactElement } from 'react';
import style from './MainHeader.module.css';
import NavTop from "@/components/NavTop/NavTop";
import Phone from "@/components/Phone/Phone";
import Delivery from "@/components/Delivery/Delivery";

const MainHeader = (): ReactElement => {
  return (
    <>
      <div className={style.mainHeader}>
        <div className={style.headerBox}>
          <nav className={style.nav}>
            <NavTop apperiance='primary' />
          </nav>
          <div className={style.phoneBlock}>
            <Phone apperiance='white' />
          </div>
          <div>
            <Delivery apperiance='white' />
          </div>
        </div>
      </div>
      {/*<NavTop apperiance='secondary' />*/}
      {/*<Phone apperiance='grey' />*/}
      {/*<Delivery apperiance='grey' />*/}
    </>
  );
};

export default MainHeader;
