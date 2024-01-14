import styled, { keyframes } from "styled-components";

const ColorGrayCoolDarker = "#b2b7bb";

const placeholderAnimate = keyframes`
  0% { left: -60% }
  100% { left: 125% }
`;

export interface ISkeletonProps {
  /**
   * @default auto
   */
  height: string;
  /**
   * @default auto
   */
  width?: string;
}

const SkeletonStyles = styled.div<ISkeletonProps>`
  background: var(--color-neutral-300);
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius-default);
  opacity: 0.6;
  height: ${({ height }) => height};
  width: ${({ width }) => width};

  &:after {
    width: 60%;
    top: -30%;
    height: 160%;
    transform: rotate(5deg);
    display: block;
    content: "";
    position: absolute;
    left: -60%;
    background: rgb(0, 0, 0);
    opacity: 0.8;
    background: linear-gradient(
      270deg,
      ${ColorGrayCoolDarker}00 0%,
      ${ColorGrayCoolDarker} 50%,
      ${ColorGrayCoolDarker}00 100%
    );
    animation: ${placeholderAnimate} 1.5s linear infinite;
  }
`;

const defaultCardsCount = 6;

export const Skeleton = (props: ISkeletonProps) => (
  <div style={{ height: "100vh", overflow: "hidden" }}>
    {new Array(defaultCardsCount).fill(null).map((_, i) => (
      <SkeletonStyles {...props} key={i}/>
    ))}
  </div>
);
