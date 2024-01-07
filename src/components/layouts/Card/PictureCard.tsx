import { SpeakersType } from "../../../utils/types/agenda-api";
import { CardContainer } from "./styled";

interface PictureCardProps {
  speakerDetails: SpeakersType;
  overviewMode: boolean;
}

export const PictureCard = ({
  speakerDetails,
  overviewMode,
}: PictureCardProps) => {
  const { name, position, company_logo, image, title } = speakerDetails;
  return (
    <>
      <CardContainer>
        <p className="card-description">{title}</p>
        <img
          srcSet={image.srcset}
          sizes="(max-width: 600px) 480px,
         800px"
          src={image.url}
          alt={image.alt}
        />
        {/* {overviewMode ? (
          <img src={company_logo[0].mediaUrl} alt={company_logo[0].alt} />
        ) : ( */}
          <div>
            <div>{name}</div>
            <div>{position}</div>
          </div>
        {/* )} */}
        <p className="title-text">{title}</p>
      </CardContainer>
    </>
  );
};
