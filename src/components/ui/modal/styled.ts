import styled, { css } from "styled-components";

const baseStyle = css`
  .modal-overlay {
    z-index: 9999;
    width: 744px;
    height: fit-content;
    max-height: 870px;
    overflow-y: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 48px, 48px, 64px, 48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .overlay-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(35, 35, 35, 0.4);
    z-index: 9998; /* Place it behind the modal */
  }
  .modal-box {
    display: block;
    background: ${({ theme }) => theme.colors.background.default};
    width: 744px;
    height: fit-content;
    max-height: 870px;
    padding: 48px 48px 64px 48px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    .modal-overlay {
      width: 389px;
      max-height: 1472px;
      padding: 16px;
    }
  }
  @media ${({ theme }) => theme.media.tablet} {
    .modal-overlay {
      width: 744px;
      max-height: 944px;
      padding: 48px, 48px, 64px, 48px;
    }
  }
  @media ${({ theme }) => theme.media.desktop_l} {
    .modal-overlay {
      width: 852px;
      max-height: 980px;
      padding: 56px, 56px, 72px, 56px;
    }
  }
`;

export const ModalnContainer = styled.div`
  ${baseStyle}
`;
