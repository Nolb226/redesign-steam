import { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "tertiary" | "ghost" | "danger";
  children: JSX.Element | string;
  className?: string;
  to?: string;
};
