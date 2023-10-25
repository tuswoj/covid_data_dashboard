import type { CountryCases, CovidData } from "../types";

export function filterCovidDataByCountryName(
  covidData: CovidData,
  selectedCountry: string
): CovidData {
  if (!selectedCountry.length) {
    return covidData;
  }

  const covidDataEntries = Object.entries(covidData);

  return covidDataEntries.reduce<CovidData>(
    (filteredCovidData, [date, casesData]) => {
      const casesDataEntries = Object.entries(casesData);

      const filteredCasesData = casesDataEntries.reduce<CountryCases>(
        (acc, [countryName, cases]) => {
          if (selectedCountry === countryName) {
            acc[countryName] = cases;
          }

          return acc;
        },
        {}
      );

      filteredCovidData[date] = filteredCasesData;

      return filteredCovidData;
    },
    {}
  );
}
