import { describe, expect, it } from "vitest";
import { filterCovidDataByDate } from "../filter-data-by-date";
import { testCovidData } from "./test-covid-data";

describe("filterDataByDate", () => {
  it("should filter data by start date", () => {
    const filteredData = filterCovidDataByDate(
      testCovidData,
      "3/1/20",
      "start"
    );

    expect(Object.keys(filteredData)).toEqual(["3/1/20", "4/1/20", "5/1/20"]);
  });

  it("should filter data by end date", () => {
    const filteredData = filterCovidDataByDate(testCovidData, "3/1/20", "end");

    expect(Object.keys(filteredData)).toEqual(["1/1/20", "2/1/20", "3/1/20"]);
  });
});
