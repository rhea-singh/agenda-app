import { SpeakersType } from "../../../utils/types/agenda-api";
import { PictureCard } from "./PictureCard";
import { CardContainer } from "./styled";

interface CardProps {
  speakerList: SpeakersType[];
  cardTitle: string;
  time: string;
  category: string;
}

export const Card = ({ speakerList, cardTitle, time, category }: CardProps) => {
  return (
    <>
      <CardContainer>
        <div>
          <div>{time}</div>
          <div>{category}</div>
        </div>
        <p className="card-description">{cardTitle}</p>
        {speakerList.map((speaker, index) => {
          return (
            <PictureCard
              key={speaker.id}
              speakerDetails={speaker} 
              overviewMode={true}            />
          );
        })}
      </CardContainer>
    </>
  );
};
