import styled from "styled-components";

interface CardProps {
  size: string;
}

export const CardDetailsContainer = styled.div<CardProps>`
  width: 648px;
  height: fit-content;
  max-height: 870px;
  gap: 24px;
  position: relative;
  overflow-y: wrap;
  
  a {
    width: fit-content;
    padding-bottom: 5px;
    border-bottom: 1px solid;
  }
  > .icon-class {
    width: 40px;
    height: 40px;
  }
  > .card-section {
    display: flex;
    flex-direction: column;
    height: fit-content;
    gap: 40px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    > .icon-class {
      width: 78px;
      height: 28px;
    }
    width: 389px;
    height: 1472px;
    padding: 16px;
  }
  @media ${({ theme }) => theme.media.tablet} {
    width: 600px;
    max-height: 910px;
    padding: 48px, 48px, 64px, 48px;
  }
  @media ${({ theme }) => theme.media.desktop_l} {
    width: 1279px;
    max-height: 900px;
    padding: 48px, 56px, 144px, 56px;
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

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;
  padding-bottom: 24px;
`;

export const TimeBadge = styled.div`
  width: fit-content;
  height: fit-content;
  min-width: 128px;
  min-height: 29px;
  padding: 10px;
  border-radius: 28px;
  background: ${({ theme }) => theme.colors.background.dark};
  color: ${({ theme }) => theme.colors.typography.light};
`;

export const CardTitle = styled.p`
  font-size: ${({ theme }) => theme.typography.size.font40};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  max-lines: 6;

  @media ${({ theme }) => theme.media.mobile} {
    font-size: ${({ theme }) => theme.typography.size.font32};
  }
`;

export const PhotoGallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  > .photo-container {
    width: fit-content;
    max-width: 668px;
    display: flex;
    height: fit-content;
    max-height: 202px;
    flex-direction: row;
    gap: 24px;
  }
`;

export const PhotoContent = styled.div`
  width: fit-content;
  max-width: 668px;
  display: flex;
  height: fit-content;
  max-height: 202px;
  flex-direction: row;
  gap: 24px;
  bottom: 20px;
  left: 24px;
  position: absolute;
`;
