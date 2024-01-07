import styled from "styled-components";

export const NavContainer = styled.div`
  width: 488px;
  height: fit-content;
  max-height: 215px;
  position: sticky;

  @media ${({ theme }) => theme.media.desktop} {
    width: 203px;
    height: 68px;
    padding: 8px;
    position: static;
  }
`;

export const NavContent = styled.div`
  width: fit-content;
  background: ${({ theme }) => theme.colors.background.light};
  display: flex;
  border-radius: 200px;
  grid-area: navbar;
  padding: 8px;
`;
