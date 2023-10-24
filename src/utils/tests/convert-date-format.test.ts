import { describe, expect, it } from "vitest";
import { convertDateFormat } from "..";

describe("convertDateFormat", () => {
  it("should convert m/d/yy format to YYYY-MM-DD", () => {
    const input = "1/5/21";
    const expectedOutput = "2021-01-05";
    expect(convertDateFormat(input)).toEqual(expectedOutput);
  });

  it("should handle dates with double-digit month and day", () => {
    const input = "12/25/20";
    const expectedOutput = "2020-12-25";
    expect(convertDateFormat(input)).toEqual(expectedOutput);
  });

  it("should return empty string for empty input", () => {
    expect(convertDateFormat()).toEqual("");
  });

  it("should handle dates with single-digit month and double-digit day", () => {
    const input = "1/31/22";
    const expectedOutput = "2022-01-31";
    expect(convertDateFormat(input)).toEqual(expectedOutput);
  });
});
