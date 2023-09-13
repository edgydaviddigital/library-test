import React, { ReactNode } from "react";
import "./Button.css";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "flex items-center text-[15px] justify-center px-5 py-2 focus:outline-none font-medium tracking-wider transition-all duration-[300ms] laptop:hover:scale-[1.05] uppercase button text-white h-[54px] rounded-full",
  {
    variants: {
      intent: {
        primary: "bg-blue-500",
        secondary: "bg-white text-black border-1 border-blue-500",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);
type ButtonVariant = VariantProps<typeof buttonVariants>;

const buttonStyle = (
  variant: ButtonVariant["intent"],
  className: string | undefined
) => twMerge(buttonVariants({ intent: variant, className }));

interface Props {
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  variant?: ButtonVariant["intent"];
  onClick?: () => void;
}

export default function Button({
  children,
  isLoading,
  disabled,
  variant,
  className,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`${buttonStyle(variant, className)} ${
        disabled ? "!transform-none !bg-gray-400 !transition-none" : ""
      } ${
        isLoading || disabled ? "cursor-not-allowed hover:transform-none" : ""
      }`}
    >
      {children}
    </button>
  );
}
