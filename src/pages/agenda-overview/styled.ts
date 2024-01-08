import styled from "styled-components";

export const OverviewContainer = styled.div`
  width: 1, 440px;
  height: fit-content;
  max-height: 3, 426.25px;
  padding: 112px 64px 200px 64px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 112px;
  transition: all 0.5s ease;
  background: ${({ theme }) => theme.colors.background.default};

  @media ${({ theme }) => theme.media.desktop} {
    /* grid-row: 1 / 2;
    grid-column: 2 / 3; */
  }
`;

export const AgendaSection = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 24px;

  @media ${({ theme }) => theme.media.desktop} {
  }
`;

export const GreetingsSection = styled.section`
  width: 100%;
  overflow: hidden;
  height: fit-content;

  > ul {
    gap: 14px;
    width: 100%;
    display: flex;
    margin: 20px 0 0;
    list-style: none;

    > li {
      flex: 1;
      flex-shrink: 0;
    }
  }

  @media ${({ theme }) => theme.media.desktop} {
    max-width: 100%;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    padding: 0 0 0 32px;

    > ul {
      gap: 18px;
    }
  }
`;

export const AgendaHeader = styled.div`
  width: 1, 248px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-items: center;
  align-items: end;
  gap: 24px;
  height: fit-content;
  max-height: 95px;

  > .timezone-div {
    width: 219px;
    height: 46px;
    font-size: ${({ theme }) => theme.typography.size.font16};
  }
`;
