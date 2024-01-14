import { NavContainer, NavContent } from "./styled";
import { Button } from "../../ui/buttons/Button";
import { DayOptions } from "../../../utils/constants";
import { useState } from "react";

type DayType = DayOptions.Day_1 | DayOptions.Day_2;
interface NavbarProps {
  setDaySelected: (day: DayType) => void;
}

export const Navbar = ({ setDaySelected }: NavbarProps) => {
  const [buttonActive, setButtonActive] = useState<DayType>(DayOptions.Day_1);

  const handleDayClick = (selectedDay: DayType) => {
    setButtonActive(selectedDay);
    setDaySelected(selectedDay);
  };

  return (
    <NavContainer>
      <NavContent>
        <Button
          name="Day_1"
          ariaLabel="day 1"
          onClick={() => handleDayClick(DayOptions.Day_1)}
          customClass={buttonActive === DayOptions.Day_1 ? "active" : ""}
        >
          <>DAY 1</>
        </Button>
        <Button
          name="Day_2"
          ariaLabel="day 2"
          onClick={() => handleDayClick(DayOptions.Day_2)}
          customClass={buttonActive === DayOptions.Day_2 ? "active" : ""}
        >
          <>DAY 2</>
        </Button>
      </NavContent>
    </NavContainer>
  );
};
