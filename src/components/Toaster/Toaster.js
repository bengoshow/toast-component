import React from "react";
import Button from '../Button';
import styles from '../ToastPlayground/ToastPlayground.module.css';
import { ToastsContext } from "../ToastProvider/ToastProvider";

function Toaster() {
  const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const { toasts, setToasts } = React.useContext(ToastsContext);

  function handleSubmit(event) {
    event.preventDefault();
    const nextToast = {
      id: crypto.randomUUID(),
      variant: variant,
      message: message
    }
    const nextToasts = [
      ...toasts,
      nextToast
    ];
    setToasts(nextToasts);
    setVariant(VARIANT_OPTIONS[0])
    setMessage('')
  }

  return (<form onSubmit={handleSubmit}>
    <div className={styles.controlsWrapper}>
      <div className={styles.row}>
        <label
          htmlFor="message"
          className={styles.label}
          style={{ alignSelf: 'baseline' }}
        >
          Message
        </label>
        <div className={styles.inputWrapper}>
          <textarea
            id="message"
            className={styles.messageInput}
            value={message}
            onChange={event => setMessage(event.target.value)}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.label}>Variant</div>
        <div
          className={`${styles.inputWrapper} ${styles.radioWrapper}`}
        >
          {VARIANT_OPTIONS.map((option) => {
            return (
              <label
                htmlFor={`variant-${option}`}
                key={option}
              >
                <input
                  id={`variant-${option}`}
                  type="radio"
                  name="variant"
                  value={option}
                  checked={option === variant}
                  onChange={event => setVariant(event.target.value)}
                />
                {option}
              </label>
            );
          })}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.label} />
        <div
          className={`${styles.inputWrapper} ${styles.radioWrapper}`}
        >
          <Button>Pop Toast!</Button>
        </div>
      </div>
    </div>
  </form >);
}

export default Toaster;
