import React, { ReactElement } from 'react';
import styles from './Phone.module.css';
import PhoneIcon from '/public/phone.svg';
import { PhoneProps } from "@/components/Phone/Phone.props";
import cn from 'classnames';

const Phone = ( {apperiance}: PhoneProps ): ReactElement => {
  return (
    <div className={styles.phoneContainer}>
      <div>
        <PhoneIcon className={cn(styles.phoneIcon, {
          [styles.white]: apperiance === 'white',
          [styles.grey]: apperiance === 'grey',
        } )} />
      </div>
      <div className={cn(styles.phoneNumber, {
        [styles.white]: apperiance === 'white',
        [styles.grey]: apperiance === 'grey',
      })}>8 (964) 89 99 119</div>
    </div>
  );
};

export default Phone;
