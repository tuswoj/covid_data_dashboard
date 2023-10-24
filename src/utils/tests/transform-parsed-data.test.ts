import { describe, expect, it } from "vitest";
import { transformParsedData } from "..";
import { testParsedData } from "./test-parsed-data";

describe("transformParsedData", () => {
  it("should properly transform parsed data", () => {
    expect(transformParsedData(testParsedData)).toEqual({
      "1/1/20": { Country1: 1, Country2: 2, Country3: 4 },
      "2/1/20": { Country1: 2, Country2: 3, Country3: 5 },
      "3/1/20": { Country1: 3, Country2: 4, Country3: 6 },
      "4/1/20": { Country1: 4, Country2: 5, Country3: 7 },
      "5/1/20": { Country1: 5, Country2: 6, Country3: 8 },
    });
  });
});
