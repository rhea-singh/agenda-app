import { ThemeTypes } from "../../utils/types/theme";

export const theme: ThemeTypes = {
  theme: "light",
  colors: {
    background: {
      default: "#E5E5E5",
      light: "#DBDAD8",
      light_grey: "#DADADA",
      grey: "#CACACA",
      dark: "#000000",
      highlighted: "#D7FE51",
    },
    typography: {
      default: "#000000",
      light: "#FFFFFF",
      dark: "#000000",
      highlighted: "#D7FE51",
    },
  },
  typography: {
    weight: {
      light: "300",
      regular: "400",
      medium: "500",
      bold: "600",
    },
    size: {
      font104: "6.5rem",
      font80: "5rem",
      font64: "4rem",
      font40: "2.5rem",
      font32: "2rem",
      font24: "1.5rem",
      font20: "1.1rem",
      font16: "1rem",
      font14: "0.8rem",
      font12: "0.6rem",
    },
  },
  media: {
    mobile: "(min-width: 320px)",
    tablet: "(min-width: 600px)",
    desktop: "(min-width: 1280px)",
    desktop_l: "(min-width: 1920px)",
  },
};
