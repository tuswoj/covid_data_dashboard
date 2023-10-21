import { CSSVariables } from "./types";

export const COVID_DATA_URL =
  "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv";

export const DATA_CACHE_KEY = "COVID_DATA_REPORT";

export const black = "#0d1321";
export const darkBlue = "#1d2d44";
export const grey = "#3e5c76";
export const lightGrey = "#748cab";
export const butterWhite = "#f0ebd8";

export const cssVariables = `
  ${CSSVariables.Black}: ${black};
  ${CSSVariables.DarkBlue}: ${darkBlue};
  ${CSSVariables.Grey}: ${grey};
  ${CSSVariables.LightGrey}: ${lightGrey};
  ${CSSVariables.ButterWhite}: ${butterWhite}
`;
