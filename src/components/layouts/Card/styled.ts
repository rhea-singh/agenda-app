import styled from "styled-components";

interface CardProps {
  size: string;
}

export const StyledCard = styled.div<CardProps>`
  width: ${(props) => (props.size === "md" ? "400px" : "824px")};
  height: 464px;
  gap: 24px;
  padding: 24px 24px 20px 24px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background.light_grey};
  overflow-x: auto; /* Enable horizontal scrolling */
  white-space: nowrap;
  animation: slide 3000ms ease-in-out;

  .icon {
    display: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover .icon {
    display: block;
    opacity: 1;
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
  @media ${({ theme }) => theme.media.mobile} {
    min-width: 488px;
    width: min-content;
    height: 524px;
    padding: 24px, 24px, 20px, 24px;
    overflow-x: auto;
  }
  @media ${({ theme }) => theme.media.tablet} {
    min-width: 571px;
    width: min-content;
    height: 474px;
    padding: 24px, 24px, 20px, 24px;
    overflow-x: auto;
  }
  @media ${({ theme }) => theme.media.desktop_l} {
    width: 414px;
    height: 488px;
    padding: 24px, 24px, 20px, 24px;
  }
  @keyframes slide {
    0% {
      background-position: 100% 0;
    }
    50% {
      background-position: 50% 0;
    }
    100% {
      background-position: 0 0;
    }
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
    padding-bottom: 16px;
  }

  > .company-logo {
    width: 69.99px;
    height: 54px;
    padding: 10.4px 0px;
  }
`;

export const TimeBadge = styled.div`
  width: fit-content;
  height: fit-content;
  max-width: 76px;
  max-height: 29px;
  font-size: ${({ theme }) => theme.typography.size.font12};
  background: ${({ theme }) => theme.colors.background.dark};
  color: ${({ theme }) => theme.colors.typography.light};
  border-radius: 28px;
  padding: 10px 14px;
`;

export const CardTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  max-height: 175px;
  gap: 40px;
`;

export const CardTopContentLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardTopContentRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: fit-content;
  max-height: 29px;
  gap: 16px;
  justify-content: space-between;
`;

export const CardTitle = styled.div`
  color: ${({ theme }) => theme.colors.typography.dark};
  font-size: ${({ theme }) => theme.typography.size.font24};
  font-weight: ${({ theme }) => theme.typography.weight.regular};
  max-lines: 6;
  white-space: pre-wrap;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
`;
