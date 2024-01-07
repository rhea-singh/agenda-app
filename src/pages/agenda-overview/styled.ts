import styled from "styled-components";

export const OverviewContainer = styled.div`
  gap: 28px;
  width: 100%;
  display: flex;
  height: fit-content;
  flex-direction: column;
  padding: calc(68px + 28px) 16px;

  > .other-sections {
    gap: 28px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  
  @media ${({ theme }) => theme.media.desktop}  {
    width: 100%;
    display: grid;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    padding: 24px 32px 0px 0;
    grid-template-rows: max-content 2fr;
    grid-template-columns: minmax(auto, 2fr) minmax(308px, 1fr);
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

export const SectionHeader = styled.header`
  width: 100%;
  display: flex;
  max-height: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const AgendaSection = styled.div`
  gap: 14px;
  width: 100%;
  display: grid;
  height: fit-content;
  flex-direction: column;
  transition: all .5s ease;

  @media ${({ theme }) => theme.media.desktop} {
    /* grid-row: 1 / 2;
    grid-column: 2 / 3; */
  }
`;
