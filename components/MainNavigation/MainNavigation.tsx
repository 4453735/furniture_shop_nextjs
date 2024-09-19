import React, { ReactElement } from 'react';
import styles from './MainNavigation.module.css';
import MainNavElement from "@/components/MainNavElement/MainNavElement";
import { MainNavElementProps } from "@/components/MainNavElement/MainNavElement.props";
import EtcIcon from '@/public/etc-icon.svg';

const getNavigation = (): MainNavElementProps[] => {
  return [
    {
      title: 'Кухни',
      url: '/kitchens',
      iconUrl: 'kitchen-icon.svg',
    },
    {
      title: 'Спальни',
      url: '/bedrooms',
      iconUrl: 'kitchen-icon.svg',
    },
    {
      title: 'Гостинные',
      url: '/living-rooms',
      iconUrl: 'kitchen-icon.svg',
    },
    {
      title: 'Прихожие',
      url: '/hallways',
      iconUrl: 'kitchen-icon.svg',
    },
    {
      title: 'Офисная мебель',
      url: '/office-furniture',
      iconUrl: 'kitchen-icon.svg',
    },
    {
      title: 'Детская',
      url: '/childrens',
      iconUrl: 'kitchen-icon.svg',
    },
    {
      title: 'Акция',
      url: '/sale',
      iconUrl: '',
    },
    {
      title: 'Плюс что-то',
      url: '/sale',
      iconUrl: 'kitchen-icon.svg',
    },
  ];
}

const MainNavigation = (): ReactElement => {
  const navigation = getNavigation();
  return (
    <div className={styles.navContainer}>
      {navigation.slice(0, 7).map((element, index) => {
        return(<MainNavElement iconUrl={element.iconUrl} title={element.title} url={element.url} key={index}/>)
      })}
      {navigation.length > 7 && <div><EtcIcon /></div>}
    </div>
  );
};

export default MainNavigation;
