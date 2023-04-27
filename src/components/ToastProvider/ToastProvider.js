import React from "react";

export const ToastsContext = React.createContext();

function ToastProvider({ children }) {

  const [toasts, setToasts] = React.useState([]);
  const value = React.useMemo(() => {
    return { toasts, setToasts };
  }, [toasts]);

  return (
    <ToastsContext.Provider value={value}>
      {children}
    </ToastsContext.Provider>
  )

}

export default ToastProvider;
