import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  height: fit-content;
  max-height: 76px;
  flex-direction: column;
  gap: 24px;
  padding: 0 16px;


  > .title-text {
    width: 100%;
    line-clamp: 1;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.colors.typography.dark};
    font-size: ${({ theme }) => theme.typography.size.font64};
  }

  > .card-description {
    color: ${({ theme }) => theme.colors.typography.dark};
    font-size: ${({ theme }) => theme.typography.size.font24};
    font-weight: ${({ theme }) => theme.typography.weight.regular};
  }
  @media ${({ theme }) => theme.media.desktop} {
  }
`;
