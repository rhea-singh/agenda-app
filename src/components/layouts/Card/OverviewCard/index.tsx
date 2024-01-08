import {
  BlockAttrsType,
  SpeakersType,
} from "../../../../utils/types/agenda-api";
import { PictureCard } from "./PictureCard";
import arrowIcon from "../../../../assets/icons/arrow.svg";
import { ActionType } from "../../../../utils/constants";
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
  title: string;
  time: string;
  category: string;
  actionType: ActionType.Close | ActionType.Info | ActionType.Overview;
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
  actionType,
}: CardHeaderProps) => {
  return (
    <CardTopContainer>
      <CardTopContentLeft>
        <CardTopContentRight>
          <TimeBadge>{time}</TimeBadge>
          <div>{category}</div>
        </CardTopContentRight>
        <Icon>
          <img className="icon" src={arrowIcon} alt="Arrow Icon" />
        </Icon>
      </CardTopContentLeft>
      <CardTitle>{title}</CardTitle>
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
  const { speakerList, startTime, title, category } = agendaItem;
  return (
    <StyledCard onClick={onClick} size={speakerList?.length <= 2 ? "md" : "lg"}>
      <CardHeader
        title={title}
        time={time}
        category={category}
        actionType={ActionType.Overview}
      />
      <PhotoContent speakerList={speakerList} overviewMode={true} />
    </StyledCard>
  );
};
