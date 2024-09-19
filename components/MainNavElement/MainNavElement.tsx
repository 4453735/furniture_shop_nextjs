import React, { ReactElement } from 'react';
import styles from './MainNavElement.module.css';
import { MainNavElementProps } from './MainNavElement.props';
import InlineSVG from 'react-inlinesvg';

const MainNavElement = ( { iconUrl, title, url }: MainNavElementProps ): ReactElement => {
  return (
    <div className={styles.navElementContainer}>
      { iconUrl !== '' && <div className={styles.icon}>
        <InlineSVG src={iconUrl}/>
      </div> }
      <div>
        { iconUrl !== '' ? <a href={url}>{title}</a> : <a href={url} className={styles.red}>{title}</a> }
      </div>
    </div>
  );
};

export default MainNavElement;
