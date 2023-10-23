import { parse } from "papaparse";
import type { ParsedData } from "../types";

export function parseRawData(rawData: string): ParsedData[] {
  const parsed = parse<ParsedData>(rawData, {
    header: true,
    dynamicTyping: true,
  });

  return parsed.data;
}
