import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export const Button = ({ children, variant = "primary", className = "", ...props }: ButtonProps) => {
  const variants = {
    primary: "bg-primary text-white hover:bg-blue-800",
    secondary: "bg-secondary text-white hover:bg-purple-700",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  return (
    <button
      className={`px-6 py-3 rounded-lg font-medium transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};