"use client";
import { ButtonHTMLAttributes, HtmlHTMLAttributes } from "react";

type ButtonProps = {
  buttonSize?: "full" | "medium" | "small";
  rounded?: "rounded" | "full";
  paddingY?: "small" | "medium" | "big";
  margintop?: "small" | "medium" | "big";
  marginBotton?: "small" | "medium" | "big";
  text: string;
  ico?: React.ReactNode;
  textColor?: string;
  bg?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const buttonSizes = {
  full: "w-full",
  medium: "w-56",
  small: "w-24",
};

const roundedSizes = {
  rounded: "rounded",
  full: "rounded-full",
};
const marginSizes = {
  small: "mt-2",
  medium: "mt-3",
  big: "mt-5",
};

const paddingSizes = {
  small: "py-2",
  medium: "py-3",
  big: "py-4",
};
function Button({
  bg = "bg-cian-500",
  buttonSize = "full",
  paddingY = "medium",
  margintop = "big",
  marginBotton = "big",
  text,
  rounded = "full",
  ico,
  textColor = "text-gray-200",
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={`${bg} ${textColor} ${roundedSizes[rounded]} ${paddingSizes[paddingY]} ${marginSizes[marginBotton]}  ${marginSizes[margintop]} text-sm hover:opacity-90 py-3 mt-5 mb-5 flex gap-3 justify-center items-center ${buttonSizes[buttonSize]} `}
    >
      {ico && ico}
      {text}
    </button>
  );
}

export default Button;
