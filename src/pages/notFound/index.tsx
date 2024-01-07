import { Button } from '../../components/buttons/Button';
import { DetailedNotFoundMessage, GlitchTextEffect, NotFoundIllustration, NotFoundMessage, NotFoundPageContainer } from './styled';

export const NotFound = () => {
  return (
    <NotFoundPageContainer>
      <GlitchTextEffect data-text='404'>404</GlitchTextEffect>
      <NotFoundMessage>Página não encontrada</NotFoundMessage>
      <DetailedNotFoundMessage>
        Parece que a página que você está procurando não existe. Verifique se a URL informada está correta ou tente voltar para a página inicial.
      </DetailedNotFoundMessage>
      <Button>
        <>voltar para a página inicial</>
      </Button>
    </NotFoundPageContainer>
  );
}