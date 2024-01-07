import {
  ButtonHTMLAttributes,
  MouseEvent,
  MouseEventHandler,
  RefObject,
  useState,
} from "react";
import { ButtonContainer, LinkButtonContainer } from "./styled";

type ButtonProps = {
  type?: "submit" | "button" | "reset";
  name?: string;
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
  ariaLabel,
  customStyle,
  onClick,
}: ButtonProps) => {
  const Element: any = as ? LinkButtonContainer : ButtonContainer;
  const [clicked, setClicked] = useState(false);

  const handleClick = (event: any) => {
    setClicked(true);
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <Element
      as={as}
      type={type}
      onClick={(event: any) => handleClick(event)}
      aria-label={ariaLabel}
      style={customStyle}
    >
      {children}
    </Element>
  );
};
