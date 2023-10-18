import type { CovidDataHeaders } from ".";

interface ParsedCasesData {
  [key: string]: number;
}

interface ParsedLocationData {
  [CovidDataHeaders.ProvinceOrState]: string | undefined;
  [CovidDataHeaders.CountryOrRegion]: string;
  [CovidDataHeaders.Lat]: number;
  [CovidDataHeaders.Long]: number;
}

export type ParsedData = ParsedLocationData & ParsedCasesData;
