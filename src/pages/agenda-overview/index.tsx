import { AgendaSection, OverviewContainer } from "./styled";
import { Header } from "../../components/layouts/Header";
import { Card } from "../../components/layouts/Card";
import useFetch from "../../utils/hooks/useFetch";
import { DayOptions, GET_SPEAKERS } from "../../utils/constants";
import { formatDate } from "../../utils/functions/formatDate";
import { Skeleton } from "../../components/skeleton/Skeleton";
import { Navbar } from "../../components/layouts/Navbar";
import { useState } from "react";

export const AgendaOverview = () => {
  const [daySelected, setDaySelected] = useState(DayOptions.Day_1);

  const { data, loading, error } = useFetch({
    url: GET_SPEAKERS,
    type: "POST",
    variables: { post_id: 41298 },
  });

  const handleDaySelected = (selectedDay: DayOptions) => {
    setDaySelected(selectedDay);
  };
  return (
    <OverviewContainer>
      <Header
        title={data?.attrs?.heading || ""}
        subtitle={data?.attrs?.intro || ""}
      />
      <Navbar setDaySelected={handleDaySelected} />
      <AgendaSection aria-labelledby="agenda-overview">
        {loading && <Skeleton height="186px" />}
        {data?.innerBlocks &&
          data.innerBlocks.map((item, blockIndex) => {
            const { speakerList, startTime, title, category, day } = item.attrs;
            const scheduledTime = formatDate(startTime);

            // Filter speakerList based on daySelected before rendering Card
            if (day.toUpperCase === daySelected.toUpperCase) {
              return (
                <Card
                  key={blockIndex}
                  speakerList={speakerList}
                  cardTitle={title}
                  time={scheduledTime}
                  category={category}
                />
              );
            }
          })}
      </AgendaSection>
    </OverviewContainer>
  );
};
