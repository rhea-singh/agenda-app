import { SpeakersType } from "../../../../utils/types/agenda-api";
import { ImgContainer } from "./styled";

interface PictureCardProps {
  speakerDetails: SpeakersType;
  isInOverviewMode: boolean;
}

export const PictureCard = ({
  speakerDetails,
  isInOverviewMode = true,
}: PictureCardProps) => {
  const { name, position, company_logo, image, title } = speakerDetails;
  return (
    <>
      <ImgContainer>
        <img
          className="speaker-img"
          srcSet={image.srcset}
          sizes="(max-width: 600px) 480px,
         800px"
          src={image.url}
          alt={image.alt}
        />
        {isInOverviewMode ? (
          <img
            className="company-logo"
            src={company_logo[0]?.mediaUrl}
          />
        ) : (
          <div>
            <div>{name}</div>
            <div>{position}</div>
          </div>
        )}
      </ImgContainer>
    </>
  );
};
