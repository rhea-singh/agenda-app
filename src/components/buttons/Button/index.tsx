import { ButtonHTMLAttributes, MouseEventHandler, useState } from "react";
import { ButtonContainer, LinkButtonContainer } from "./styled";

type ButtonProps = {
  type?: "submit" | "button" | "reset";
  name?: string;
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
