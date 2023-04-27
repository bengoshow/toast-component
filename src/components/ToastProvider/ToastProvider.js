import React from "react";

export const ToastsContext = React.createContext();

function ToastProvider({ children }) {

  const [toasts, setToasts] = React.useState([]);
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
    function dismissAllToasts() {
      setToasts([]);
    }
    return { toasts, setToasts, createToast, dismissToast, dismissAllToasts };
  }, [toasts]);

  return (
    <ToastsContext.Provider value={value}>
      {children}
    </ToastsContext.Provider>
  )

}

export default ToastProvider;
