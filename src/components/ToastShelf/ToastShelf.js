import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { ToastsContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {
  const { toasts } = React.useContext(ToastsContext);
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
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
