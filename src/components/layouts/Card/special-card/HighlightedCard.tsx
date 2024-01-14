import { SpeakersType } from "../../../../utils/types/agenda-api";
import { CardHeader } from "../index";

import {
  CardContent,
  CardFooter,
  HighlightCard,
} from "./HighlightedCard.styled";

interface HighlightSpeakerProps {
  speaker: SpeakersType;
  time: string;
  onClick?: () => void;
}

export const HighlightedCard = ({
  speaker,
  time,
  onClick,
}: HighlightSpeakerProps) => {
  const { name, position, company_logo, image, title } = speaker;
  return (
    <HighlightCard onClick={onClick} url={image.url} srcset={image.srcset}>
      <CardHeader time={time} isHighlighted={true}/>
      <CardContent>
        <div className="speaker-name">{name}</div>
        <div className="card-title">{title}</div>
        <CardFooter>
          <div className="speaker-position">{position}</div>
          <img className="company-logo" src={company_logo[0]?.mediaUrl} />
        </CardFooter>
      </CardContent>
    </HighlightCard>
  );
};
