import type { Writable } from "svelte/store";
import type { CountryName } from ".";
import type { Filters } from "./filters";

export type SetDateFn = (dateString: string) => void;
export type UpdateCountriesFn = (country: CountryName) => void;

export interface FiltersStore {
  setStartDate: SetDateFn;
  setEndDate: SetDateFn;
  updateCountries: UpdateCountriesFn;
  subscribe: Writable<Filters>["subscribe"];
}
