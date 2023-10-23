import type { CountryName, NumberOfCases } from ".";

export interface TableDataElement {
  countryName: CountryName;
  cases: NumberOfCases;
}

export type TableData = TableDataElement[];
