import { formatDate } from "../../../../utils/functions/formatDate";
import { InnerBlocksType } from "../../../../utils/types/agenda-api";
import { Button } from "../../../buttons/Button";
import { PhotoContent } from "../OverviewCard";
import { Card } from "./styled";
import closeIcon from "../../../../assets/icons/close.svg";

interface CardDetailsprops {
  selectedCardAttrs: InnerBlocksType;
  onClick?: () => void;
}

export const CardDetails = ({
  selectedCardAttrs,
  onClick,
}: CardDetailsprops) => {
  const { speakerList, title, category, startTime } = selectedCardAttrs.attrs;
  return (
    <Card size={speakerList?.length <= 2 ? "md" : "lg"}>
      <div className="card-header">
        <div className="card-info">
          <div className="time-badge">{formatDate(startTime)}</div>
          <div>{category}</div>
        </div>
        <Button name="close" ariaLabel="close dialog" onClick={onClick}>
          <img src={closeIcon} className="icon-class" alt="close Icon" />
        </Button>
      </div>
      <div className="card-section">
        <p className="card-title">{title}</p>
        <div className="card-description">
          {selectedCardAttrs.innerBlocks[0].innerHTML}
        </div>
        <PhotoContent speakerList={speakerList} overviewMode={false} />
      </div>
    </Card>
  );
};
