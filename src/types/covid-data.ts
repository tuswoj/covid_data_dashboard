export type CountryName = string;

type NumberOfCases = number;

export type ConfirmedCases = Map<Date, NumberOfCases>;

export type CovidData = Record<CountryName, ConfirmedCases>;
