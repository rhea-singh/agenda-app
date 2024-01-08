import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const baseStyle = css`
  gap: 10px;
  width: fit-content;
  height: 40px;
  display: flex;
  padding: 0 8px;
  cursor: pointer;
  align-items: center;
  border-radius: 46px;
  text-decoration: none;
  min-width: fit-content;
  justify-content: center;
  border: 0px solid transparent;
  transition: all 0.4s linear;
  font-size: ${({ theme }) => theme.typography.size.font24};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  background: ${({ theme }) => theme.colors.background.light};

  &.active,
  &:focus {
    background: ${({ theme }) => theme.colors.background.dark};
    color: ${({ theme }) => theme.colors.background.light};
  }
  @media ${({ theme }) => theme.media.desktop_l} {
    max-width: 93px;
  }

  @media ${({ theme }) => theme.media.tablet} {
    max-width: 83px;
  }
  @media ${({ theme }) => theme.media.mobile} {
    max-width: 83px;
  }
`;

export const ButtonContainer = styled.button`
  ${baseStyle}
`;

export const LinkButtonContainer = styled(Link)`
  ${baseStyle}
`;
