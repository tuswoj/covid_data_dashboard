import { describe, expect, it } from "vitest";
import { getCountryNames } from "../get-country-names";
import { testParsedData } from "./test-parsed-data";

describe("getCountryNames", () => {
  it("should return names of all countries in data set", () => {
    expect(getCountryNames(testParsedData)).toEqual([
      "Country1",
      "Country2",
      "Country3",
    ]);
  });
});
