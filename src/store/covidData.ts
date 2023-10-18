import { writable } from "svelte/store";
import type { CovidData } from "../types";

export const covidData = writable<CovidData>({});
