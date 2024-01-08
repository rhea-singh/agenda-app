import styled from "styled-components";

interface CardProps {
  size: string;
}

export const Card = styled.div<CardProps>`
  width: 744px;
  height: fit-content;
  max-height: 870px;
  gap: 24px;
  padding: 48px 48px 64px 48px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background.light_grey};

  > .time-badge {
    width: fit-content;
    height: fit-content;
    max-width: 76px;
    max-height: 29px;
    background: ${({ theme }) => theme.colors.background.dark};
    color: ${({ theme }) => theme.colors.typography.light};
    border-radius: 28px;
    padding: 10px 14px;
  }

  > .icon-class {
    width: 40px;
    height: 40px;
  }

  > .card-info {
    display: flex;
    height: fit-content;
    width: 648px;
    height: fit-content;
    max-height: 62px;
    gap: 16px;
  }
  > .card-header {
    display: flex;
    justify-content: space-between;
  }
  > .card-section {
    display: flex;
    flex-direction: column;
    height: fit-content;
    max-height: 175px;
    gap: 40px;
  }
  > .card-description {
    width: 100%;
    line-clamp: 1;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.colors.typography.dark};
    font-size: ${({ theme }) => theme.typography.size.font24};
    font-weight: ${({ theme }) => theme.typography.weight.regular};
  }

  > .card-description {
    color: ${({ theme }) => theme.colors.typography.dark};
    font-size: ${({ theme }) => theme.typography.size.font24};
    font-weight: ${({ theme }) => theme.typography.weight.regular};
    max-lines: 6;
  }

  > .photo-container {
    width: fit-content;
    max-width: 668px;
    display: flex;
    height: fit-content;
    max-height: 202px;
    flex-direction: row;
    gap: 12px;
    bottom: 20px;
    left: 24px;
    position: absolute;
  }
  @media ${({ theme }) => theme.media.desktop} {
  }
`;

export const ImgContainer = styled.div`
  width: fit-content;
  max-width: 124px;
  height: fit-content;
  max-height: 202px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  > .speaker-img {
    width: 124px;
    height: 148px;
  }

  > .company-logo {
    width: 69.99px;
    height: 54px;
    padding: 10.4px 0px;
  }
`;
