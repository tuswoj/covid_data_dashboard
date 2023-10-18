import { parse } from "papaparse";
import type { ParsedData } from "../types";

export function parseRawData(rawData: string): ParsedData[] {
  const { data } = parse<ParsedData>(rawData, {
    header: true,
    dynamicTyping: true,
  });

  return data;
}
