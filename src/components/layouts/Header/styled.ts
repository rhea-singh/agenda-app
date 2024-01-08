import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: fit-content;
  display: flex;
  height: fit-content;
  min-height: 76px;
  flex-direction: column;
  gap: 24px;

  > .title-text {
    width: 100%;
    line-clamp: 1;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.colors.typography.dark};
    font-size: ${({ theme }) => theme.typography.size.font80};
  }

  > .subtitle-text {
    color: ${({ theme }) => theme.colors.typography.dark};
    font-size: ${({ theme }) => theme.typography.size.font20};
    font-weight: ${({ theme }) => theme.typography.weight.regular};
  }
  @media ${({ theme }) => theme.media.desktop} {
  }
`;
