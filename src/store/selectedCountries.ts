import { writable } from "svelte/store";

export const selectedCountries = writable<string[]>([]);
