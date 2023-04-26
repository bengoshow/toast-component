import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { ToastsContext } from '../ToastPlayground/ToastPlayground';

function ToastShelf() {
  const { toasts } = React.useContext(ToastsContext);
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, variant, message }) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast id={id} variant={variant}>{message}</Toast>
          </li>
        )
      })}
    </ol>
  );
}

export default ToastShelf;
