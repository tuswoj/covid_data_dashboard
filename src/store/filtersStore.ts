import { writable, type Writable } from "svelte/store";
import type { Filters } from "../types/filters";
import type {
  FiltersStore,
  SetDateFn,
  UpdateCountriesFn,
} from "../types/filters-store";
import type { CountryName } from "../types";

const defaultFilterValues: Filters = {
  startDate: null,
  endDate: null,
  countries: [],
};

function createFiltersStore(): FiltersStore {
  const { subscribe, set, update } = writable(defaultFilterValues);

  const setStartDate: SetDateFn = (date: string) => {
    update((state) => ({ ...state, startDate: date }));
  };

  const setEndDate: SetDateFn = (date: string) => {
    update((state) => ({ ...state, endDate: date }));
  };

  const updateCountries: UpdateCountriesFn = (countryName: CountryName) => {
    update(({ countries, ...state }) => {
      let updatedCountries: CountryName[] = [];

      if (countries.includes(countryName)) {
        updatedCountries = countries.filter(
          (country) => country !== countryName
        );
      } else {
        updatedCountries = [...countries, countryName];
      }

      return {
        ...state,
        countries: updatedCountries,
      };
    });
  };

  return { setStartDate, setEndDate, updateCountries, subscribe };
}

export const filtersStore = createFiltersStore();
