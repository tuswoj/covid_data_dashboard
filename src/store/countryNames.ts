import { writable } from "svelte/store";
import type { CountryName } from "../types";

export const countryNames = writable<CountryName[]>([]);
