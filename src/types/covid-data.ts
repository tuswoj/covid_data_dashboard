export type CountryName = string;

export type NumberOfCases = number;

export type CountryCases = Record<CountryName, NumberOfCases>;

export type CovidData = Record<string, CountryCases>;
