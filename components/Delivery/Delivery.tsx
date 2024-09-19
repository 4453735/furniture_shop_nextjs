import React, { ReactElement } from 'react';
import styles from "@/components/Delivery/Delivery.module.css";
import DeliveryIcon from "/public/delivery-icon.svg";
import cn from "classnames";
import { DeliveryProps } from "@/components/Delivery/Delivery.props";

const Delivery = ({ apperiance }: DeliveryProps): ReactElement => {
  return (
    <div className={styles.deliveryContainer}>
      <div>
        <DeliveryIcon className={cn(styles.deliveryIcon, {
          [styles.white]: apperiance === 'white',
          [styles.grey]: apperiance === 'grey',
        })}/>
      </div>
      <div className={cn(styles.deliveryText, {
        [styles.white]: apperiance === 'white',
        [styles.grey]: apperiance === 'grey',
      })}>Доставка
      </div>
    </div>
  );
};

export default Delivery;
