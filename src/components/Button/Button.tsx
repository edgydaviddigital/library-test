import React from "react";
import "./Button.css";

interface Props {
  label: string;
  className?: string;
  onClick?: () => void;
}

export default function Button({ label, className, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`bg-black text-white px-[18px] h-[54px] rounded-xl hover:scale-[1.1] transition-all duration-[300ms] ${className}`}
    >
      {label}
    </button>
  );
}
