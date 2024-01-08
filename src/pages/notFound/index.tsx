import { NotFoundMessage, NotFoundPageContainer } from "./styled";

export const NotFound = () => {
  return (
    <NotFoundPageContainer>
      <NotFoundMessage>404</NotFoundMessage>
      <NotFoundMessage>Page Not Found</NotFoundMessage>
    </NotFoundPageContainer>
  );
};
