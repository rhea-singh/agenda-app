import { ButtonHTMLAttributes, MouseEventHandler, useState } from "react";
import { StringLocale } from "yup/lib/locale";
import { ButtonContainer, LinkButtonContainer } from "./styled";

type ButtonProps = {
  type?: "submit" | "button" | "reset";
  name?: string;
  color?: string;
  customClass?: string;
  ariaLabel?: string;
  children: JSX.Element;
  onClick?: MouseEventHandler;
  hasPopup?: boolean;
  as?: string;
  props?: ButtonHTMLAttributes<HTMLButtonElement>;
  customStyle?: JSX.Element;
};

export const Button = ({
  as,
  type = "button",
  color,
  children,
  name,
  customClass,
  ariaLabel,
  customStyle,
  onClick,
}: ButtonProps) => {
  const Element: any = as ? LinkButtonContainer : ButtonContainer;

  const handleClick = (event: any) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <Element
      as={as}
      name={name}
      color={color}
      type={type}
      onClick={(event: any) => handleClick(event)}
      className={customClass}
      aria-label={ariaLabel}
      style={customStyle}
    >
      {children}
    </Element>
  );
};
