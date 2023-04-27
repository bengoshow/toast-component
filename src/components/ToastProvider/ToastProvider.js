import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastsContext = React.createContext();

function ToastProvider({ children }) {

  const [toasts, setToasts] = React.useState([]);

  function dismissAllToasts() {
    setToasts([]);
  }

  // Code to dismiss all toasts
  useEscapeKey(dismissAllToasts);

  const value = React.useMemo(() => {
    function createToast(variant, message) {
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
    }
    function dismissToast(id) {
      const nextToasts = toasts.filter((toast) => {
        return toast.id !== id;
      });
      setToasts(nextToasts)
    }
    return { toasts, setToasts, createToast, dismissToast };
  }, [toasts]);

  return (
    <ToastsContext.Provider value={value}>
      {children}
    </ToastsContext.Provider>
  )

}

export default ToastProvider;
