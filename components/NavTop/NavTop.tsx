import React, { ReactElement } from 'react';
import { NavTopProps, NavTopPropsData } from "@/components/NavTop/NavTop.props";
import style from './NavTop.module.css';
import cn from 'classnames';

const navTopData = (): NavTopPropsData[] => {
  return [
    {
      id: 1,
      title: 'Главная',
      href: '/',
    },
    {
      id: 2,
      title: 'О нас',
      href: '/about',
    },
    {
      id: 3,
      title: 'Контакты',
      href: '/contacts',
    },
  ];
}

const NavTop = async ( { apperiance }: NavTopProps ): Promise<ReactElement> => {
  const data: NavTopPropsData[] = navTopData();
  return (

      <ul className={style.ul}>
        {data.map((item) => (<li className={style.li} key={item.id}><a className={cn(style.a, {
          [style.primary]: apperiance === 'primary',
          [style.secondary]: apperiance === 'secondary',
        })} href={item.href}>{item.title}</a></li>))}
      </ul>

);
};

export default NavTop;
