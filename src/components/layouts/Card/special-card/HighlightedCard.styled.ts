import styled from "styled-components";

interface HighlightProps {
  url: string;
  srcset: string;
}

export const HighlightCard = styled.div<HighlightProps>`
  width: auto;
  height: 464px;
  gap: 24px;
  padding: 24px 24px 20px 24px;
  background-image: url(${(props) => props.url});
  background-image: image-set(${(props) => props.srcset});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: slide 3000ms ease-in-out;

  .icon {
    display: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .card-title {
    display: none;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.background.highlighted};
    .card-title {
      display: block;
      font-size: ${({ theme }) => theme.typography.size.font32};
    }
    .speaker-name {
      display: none;
    }
    .icon {
      display: block;
      opacity: 1;
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    min-width: 572px;
    width: min-content;
    padding: 16px;
  }
  @media ${({ theme }) => theme.media.mobile} {
    background-size: contain;
    width: "358px";
    padding: 16px;
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

export const CardContent = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
  padding-top: 24px;
  max-width: 352px;
  max-height: 159px;
  display: flex;
  flex-direction: column;
  align-content: space-between;

  > .speaker-name {
    font-size: ${({ theme }) => theme.typography.size.font64};
    color: ${({ theme }) => theme.colors.typography.highlighted};
  }
`;

export const CardFooter = styled.div`
  display: flex;
  width: 352px;
  height: 54px;
  align-content: space-between;
  align-items: center;
  flex-direction: row;
  gap: 16px;
  padding: 0px 16px;
  background-color: ${({ theme }) => theme.colors.background.highlighted};
  > .company-logo {
    width: 69.99px;
    height: 54px;
    padding: 10.4px 0px;
  }

  @media ${({ theme }) => theme.media.desktop_l} {
    width: 366px;
  }
  @media ${({ theme }) => theme.media.tablet} {
    width: 524px;
  }
  @media ${({ theme }) => theme.media.mobile} {
    width: 342px;
  }
`;
