import { formatDate } from "../../utils/functions/formatDate";
import { InnerBlocksType } from "../../utils/types/agenda-api";
import { Button } from "../../components/ui/buttons/Button";
import { PhotoContent } from "../../components/layouts/Card/index";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import {
  CardDetailsContainer,
  CardHeader,
  CardTitle,
  PhotoGallery,
  TimeBadge,
} from "./styled";
import closeIcon from "../../assets/icons/close.svg";

interface CardDetailsprops {
  selectedCardAttrs: InnerBlocksType;
  onClick?: () => void;
}

interface DynamicHTMLComponentProps {
  htmlString: string | TrustedHTML;
}

const DynamicHTMLComponent = ({ htmlString }: DynamicHTMLComponentProps) => {
  return (
    <div
      className="card-description"
      dangerouslySetInnerHTML={{ __html: htmlString }}
    />
  );
};

export const AgendaDetails = ({
  selectedCardAttrs,
  onClick,
}: CardDetailsprops) => {
  const { speakerList, title, category, duration, startTime } =
    selectedCardAttrs.attrs;
  return (
    <CardDetailsContainer size={speakerList?.length <= 2 ? "md" : "lg"}>
      <CardHeader>
        <TimeBadge className="time-badge">{`${formatDate(
          startTime
        )} | ${duration} MIN`}</TimeBadge>
        <Button
          color="#E5E5E5"
          name="close"
          ariaLabel="close dialog"
          onClick={onClick}
        >
          <img src={closeIcon} className="icon-class" alt="close Icon" />
        </Button>
      </CardHeader>
      <div className="card-section">
        <div>{category}</div>
        <CardTitle>{title}</CardTitle>
        <DynamicHTMLComponent
          htmlString={selectedCardAttrs.innerBlocks[0].innerHTML}
        />
        <AddToCalendarButton
          name="Agenda-event"
          startDate="2024-01-15"
          options={["Apple", "Google"]}
          timeZone="Europe/Amsterdam"
        />
        <PhotoGallery>
          <div>SPEAKERS</div>
          <PhotoContent speakerList={speakerList} overviewMode={false} />
        </PhotoGallery>
      </div>
    </CardDetailsContainer>
  );
};
