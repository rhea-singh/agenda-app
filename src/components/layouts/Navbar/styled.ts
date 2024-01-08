import styled from "styled-components";

export const NavContainer = styled.div`
  width: 184px;
  height: 56px;
  position: sticky;
  margin-bottom: 16px;

  @media ${({ theme }) => theme.media.desktop} {
    width: 203px;
    height: 68px;
    padding: 8px;
    position: static;
  }

  @media ${({ theme }) => theme.media.tablet} {
    width: 184px;
    height: 56px;
  }
  @media ${({ theme }) => theme.media.mobile} {
    width: 168px;
    height: 40px;
  }
`;

export const NavContent = styled.div`
  width: fit-content;
  background: ${({ theme }) => theme.colors.background.light};
  display: flex;
  border-radius: 200px;
  grid-area: navbar;
  padding: 8px;

  @media ${({ theme }) => theme.media.mobile} {
    border-radius: 46px;
  }
  @media ${({ theme }) => theme.media.tablet} {
    border-radius: 46px;
  }
`;