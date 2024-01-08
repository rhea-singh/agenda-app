import {
  BlockAttrsType,
  SpeakersType,
} from "../../../../utils/types/agenda-api";
import { PictureCard } from "./PictureCard";
import { HighlightedCard } from "./HighlightedCard";
import arrowIcon from "../../../../assets/icons/arrow.svg";
import greenArrowIcon from "../../../../assets/icons/arrow_highlight.svg";

import {
  CardTitle,
  CardTopContainer,
  CardTopContentLeft,
  CardTopContentRight,
  Icon,
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
        return (
          <PictureCard
            key={speaker.id}
            speakerDetails={speaker}
            isInOverviewMode={overviewMode}
          />
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
