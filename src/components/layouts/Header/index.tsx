import { HeaderContainer } from "./styled";

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header = ({ title = "", subtitle = "" }: HeaderProps) => {
  return (
    <HeaderContainer>
      <p className="subtitle-text">{subtitle}</p>
      <p className="title-text">{title}</p>
    </HeaderContainer>
  );
};
