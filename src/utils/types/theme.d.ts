export interface ThemeTypes {
  theme: string;
  colors: ColorsTypes;
  typography: {
    weight: {
      light: string;
      regular: string;
      medium: string;
      bold: string;
    };
    size: {
      font104: string;
      font80: string;
      font64: string;
      font40: string;
      font32: string;
      font24: string;
      font20: string;
      font16: string;
      font14: string;
      font12: string;
    };
  };
  media: {
    mobile: string;
    tablet: string;
    desktop: string;
    desktop_l: string;
  };
}

interface ColorShades {
  default: string;
  light: string;
  light_grey?: string;
  grey?: string;
  dark: string;
  highlighted?: string;
}

interface ColorsTypes {
  [background: string]: ColorShades;
  [typography: string]: ColorShades;
}
