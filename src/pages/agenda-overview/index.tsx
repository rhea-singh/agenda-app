import { AgendaSection, OverviewContainer, AgendaHeader } from "./styled";
import { Header } from "../../components/layouts/Header";
import { OverviewCard } from "../../components/layouts/Card";
import useFetch, { defaultInnerBlockValue } from "../../utils/hooks/useFetch";
import { DayOptions, GET_SPEAKERS } from "../../utils/constants";
import { formatDate } from "../../utils/functions/formatDate";
import { Skeleton } from "../../components/ui/skeleton/Skeleton";
import { Navbar } from "../../components/layouts/Navbar";
import { useState } from "react";
import Modal from "../../components/ui/modal/Modal";
import useModal from "../../utils/hooks/useModal";
import { AgendaDetails } from "../agenda-details";
import { InnerBlocksType } from "../../utils/types/agenda-api";

export const AgendaOverview = () => {
  const [daySelected, setDaySelected] = useState(DayOptions.Day_1);
  const [selectedCard, setSelectedCard] = useState<InnerBlocksType>(
    defaultInnerBlockValue
  );
  const { isOpen, toggle } = useModal();

  const { data, loading, error } = useFetch({
    url: GET_SPEAKERS,
    type: "POST",
    variables: { post_id: 41298 },
  });

  const onCardClick = (agenda?: InnerBlocksType) => {
    agenda && setSelectedCard(agenda);
    toggle();
  };

  return (
    <OverviewContainer>
      <AgendaHeader aria-labelledby="agenda-header">
        {data?.attrs && (
          <Header title={data.attrs.heading} subtitle={data.attrs.intro} />
        )}
        <Navbar setDaySelected={(selectedDay) => setDaySelected(selectedDay)} />
        <div className="timezone-div">Timezone: Europe/Amsterdam</div>
      </AgendaHeader>
      {loading && <Skeleton height="186px" />}
      <AgendaSection aria-labelledby="agenda-overview">
        {data?.innerBlocks &&
          data.innerBlocks.map((item, cardIndex) => {
            const { startTime, day } = item.attrs;
            const scheduledTime = formatDate(startTime);

            // Filter speakerList based on daySelected before rendering Card
            if (day === daySelected) {
              return (
                <OverviewCard
                  key={cardIndex}
                  agendaItem={item.attrs}
                  time={scheduledTime}
                  onClick={() => onCardClick(item)}
                />
              );
            }
          })}
      </AgendaSection>
      <Modal isOpen={isOpen} toggle={toggle}>
        <AgendaDetails
          selectedCardAttrs={selectedCard}
          onClick={() => onCardClick()}
        />
      </Modal>
    </OverviewContainer>
  );
};
