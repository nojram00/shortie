import { useEffect } from "react";

export interface ToastProps {
    message: string;
    show: boolean;
    onClose: () => void;
}

export default function Toast({ message, show, onClose } : ToastProps) {
  // Auto hide after 3s
  useEffect(() => {
    if (!show) return;

    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [show, onClose]);

  return (
    <div
      className={`
        fixed top-20 right-5 z-50 transition-transform duration-300 w-screen
        ${show ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"}
      `}
    >
      <div className="toast toast-end">
        <div className="alert alert-info shadow-lg">
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
}
