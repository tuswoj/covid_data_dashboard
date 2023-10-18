import type { CountryName } from ".";

export interface Filters {
  startDate: string | null;
  endDate: string | null;
  countries: CountryName[];
}
