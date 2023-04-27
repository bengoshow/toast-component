import React from 'react';

import ToastProvider from '../ToastProvider/ToastProvider';
import ToastShelf from '../ToastShelf'
import Toaster from '../Toaster/Toaster';
import styles from './ToastPlayground.module.css';

function ToastPlayground() {
  return (
    <ToastProvider>
      <div className={styles.wrapper}>
        <header>
          <img alt="Cute toast mascot" src="/toast.png" />
          <h1>Toast Playground</h1>
        </header>
        <ToastShelf />
        <Toaster />
      </div>
    </ToastProvider>
  );
}

export default ToastPlayground;
