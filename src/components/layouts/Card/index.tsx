import { BlockAttrsType, SpeakersType } from "../../../utils/types/agenda-api";
import { HighlightedCard } from "./special-card/HighlightedCard";
import arrowIcon from "../../../assets/icons/arrow.svg";
import greenArrowIcon from "../../../assets/icons/arrow_highlight.svg";

import {
  CardTitle,
  CardTopContainer,
  CardTopContentLeft,
  CardTopContentRight,
  Icon,
  ImgContainer,
  StyledCard,
  TimeBadge,
} from "./styled";

interface CardHeaderProps {
  title?: string;
  time: string;
  category?: string;
  isHighlighted?: boolean;
}

interface PhotoContentProps {
  speakerList: SpeakersType[];
  overviewMode: boolean;
}

interface OverviewCardProps {
  agendaItem: BlockAttrsType;
  time: string;
  onClick?: () => void;
}

export const CardHeader = ({
  title,
  time,
  category,
  isHighlighted = false,
}: CardHeaderProps) => {
  return (
    <CardTopContainer>
      <CardTopContentLeft>
        <CardTopContentRight>
          <TimeBadge>{time}</TimeBadge>
          {category && <div>{category}</div>}
        </CardTopContentRight>
        <Icon>
          <img
            className="icon"
            src={isHighlighted ? greenArrowIcon : arrowIcon}
            alt="Arrow Icon"
          />
        </Icon>
      </CardTopContentLeft>
      {title && <CardTitle>{title}</CardTitle>}
    </CardTopContainer>
  );
};

export const PhotoContent = ({
  speakerList,
  overviewMode,
}: PhotoContentProps) => {
  return (
    <div className="photo-container">
      {speakerList.map((speaker) => {
        const { name, position, company_logo, image, title } = speaker;
        return (
          <ImgContainer>
            <img
              className="speaker-img"
              srcSet={image.srcset}
              sizes="(max-width: 600px) 480px,
         800px"
              src={image.url}
              alt={image.alt}
            />
            {overviewMode ? (
              <img className="company-logo" src={company_logo[0]?.mediaUrl} />
            ) : (
              <div>
                <div>{name.toUpperCase()}</div>
                <div>{position}</div>
              </div>
            )}
          </ImgContainer>
        );
      })}
    </div>
  );
};

export const OverviewCard = ({
  agendaItem,
  time,
  onClick,
}: OverviewCardProps) => {
  const { speakerList, title, category } = agendaItem;
  return speakerList.length > 1 ? (
    <StyledCard onClick={onClick} size={speakerList?.length <= 2 ? "md" : "lg"}>
      <CardHeader title={title} time={time} category={category} />
      <PhotoContent speakerList={speakerList} overviewMode={true} />
    </StyledCard>
  ) : (
    <HighlightedCard
      speaker={agendaItem.speakerList[0]}
      time={time}
      onClick={onClick}
    />
  );
};
