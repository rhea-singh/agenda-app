import styled from "styled-components";

export const OverviewContainer = styled.div`
  width: 1,440px;
  height: fit-content;
  max-height: 3,426.25px;
  padding: 112px 64px 200px 64px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 112px;
  transition: all 0.5s ease;
  background: ${({ theme }) => theme.colors.background.default};

  @media ${({ theme }) => theme.media.desktop_l} {
    width: 1,920px;
    max-height: 2,720px;
    padding: 144px 0px 288px 0px;
    gap: 144px;
  }
  @media ${({ theme }) => theme.media.tablet} {
    width: 1, 280px;
    max-height: 3,426.25px;
    padding: 112px 0px 200px 0px;
    gap: 72px;
  }
  @media ${({ theme }) => theme.media.mobile} {
    width: 599px;
    max-height: 2,934px;
    padding: 72px 0px 144px 0px;
    gap: 48px;
  }
`;

export const AgendaSection = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  @media ${({ theme }) => theme.media.desktop_l} {
    gap: 24px;
  }
  @media ${({ theme }) => theme.media.tablet} {
    gap: 24px;
  }
  @media ${({ theme }) => theme.media.mobile} {
    gap: 24px;
  }
`;

export const AgendaHeader = styled.div`
  width: 1,248px;
  justify-items: center;
  align-items: end;
  gap: 24px;
  height: fit-content;
  max-height: 95px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;

  @media ${({ theme }) => theme.media.desktop_l} {
    grid-template-columns: 1fr 2fr 1fr;
  }
  @media ${({ theme }) => theme.media.tablet} {
    max-height: 215px;
    grid-template-columns: 1fr;
    justify-items: flex-start;
  }
  @media ${({ theme }) => theme.media.mobile} {
    max-height: 215px;
    grid-template-columns: 1fr;
    justify-items: flex-start;
  }

  > .timezone-div {
    width: 219px;
    height: 46px;
    font-size: ${({ theme }) => theme.typography.size.font16};
    @media ${({ theme }) => theme.media.tablet} {
      display: none;
    }
    @media ${({ theme }) => theme.media.mobile} {
      display: none;
    }
  }
`;
