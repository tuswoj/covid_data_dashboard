import { describe, expect, it } from "vitest";
import { extractDateRange } from "..";
import { testCovidData } from "./test-covid-data";

describe("extractDateRange", () => {
  it("should return first and last date from given data set", () => {
    expect(extractDateRange(testCovidData)).toEqual(["1/1/20", "5/1/20"]);
  });
  it("should return empty strings if there is no data", () => {
    expect(extractDateRange({})).toEqual(["", ""]);
  });
});
