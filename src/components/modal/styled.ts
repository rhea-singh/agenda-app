import styled, { css } from "styled-components";

const baseStyle = css`
  .modal-overlay {
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    background: #232323;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-box {
    display: block;
    background: ${({ theme }) => theme.colors.background.default};
    width: 744px;
    height: fit-content;
    max-height: 870px;
    padding: 48px 48px 64px 48px;
  }
`;

export const ModalnContainer = styled.div`
  ${baseStyle}
`;
