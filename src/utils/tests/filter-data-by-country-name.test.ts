import { describe, expect, it } from "vitest";
import { filterCovidDataByCountryName } from "..";
import { testCovidData } from "./test-covid-data";

describe("filterDataByCountryName", () => {
  it("should return covid data with only records of selected country", () => {
    const selectedCountry = "Country1";

    const filteredData = filterCovidDataByCountryName(
      testCovidData,
      selectedCountry
    );
    Object.values(filteredData).forEach((countryCases) => {
      expect(Object.keys(countryCases)).toEqual([selectedCountry]);
    });
  });
  it("should return unchanged data if there is no selected country", () => {
    const filteredData = filterCovidDataByCountryName(testCovidData, "");
    expect(filteredData).toEqual(testCovidData);
  });
});
