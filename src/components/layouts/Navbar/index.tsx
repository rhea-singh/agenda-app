import { NavContainer, NavContent } from "./styled";
import { Button } from "../../buttons/Button";
import { DayOptions } from "../../../utils/constants";
import { useState } from "react";

interface NavbarProps {
  setDaySelected: (day: DayOptions.Day_1 | DayOptions.Day_2) => void;
}

export const Navbar = ({ setDaySelected }: NavbarProps) => {
  const handleDayClick = (selectedDay: DayOptions.Day_1 | DayOptions.Day_2) => {
    setDaySelected(selectedDay);
  };
  return (
    <NavContainer>
      <NavContent>
        <Button
          name="Day_1"
          ariaLabel="day 1"
          onClick={() => handleDayClick(DayOptions.Day_1)}
        >
          <>DAY 1</>
        </Button>
        <Button
          name="Day_2"
          ariaLabel="day 2"
          onClick={() => handleDayClick(DayOptions.Day_2)}
        >
          <>DAY 2</>
        </Button>
      </NavContent>
    </NavContainer>
  );
};
