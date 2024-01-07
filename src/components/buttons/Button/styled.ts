import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const baseStyle = css`
  gap: 10px;
  height: 44px;
  display: flex;
  padding: 0 24px;
  cursor: pointer;
  align-items: center;
  border-radius: 46px;
  text-decoration: none;
  min-width: fit-content;
  justify-content: center;
  border: 0px solid transparent;
  transition: all 0.4s ease-in-out;
  font-size: ${({ theme }) => theme.typography.size.font24};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  background: ${({ theme }) => theme.colors.background.light};

  &:active {
    color: ${({ theme }) => theme.colors.background.light};
    background: ${({ theme }) => theme.colors.background.dark};
  }
`;

export const ButtonContainer = styled.button`
  ${baseStyle}
`;

export const LinkButtonContainer = styled(Link)`
  ${baseStyle}
`;
