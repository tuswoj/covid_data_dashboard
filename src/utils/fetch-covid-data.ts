import { COVID_DATA_URL } from "../constants";

/**
 * Fetch covid cases report data
 * @returns CSV data converted to string
 */
export async function fetchCovidCSVData(): Promise<
  [data: string | null, errorOccurred: boolean]
> {
  try {
    const response = await fetch(COVID_DATA_URL);
    const rawTextData = await response.text();

    return [rawTextData, false];
  } catch (errorOccurred: unknown) {
    return [null, true];
  }
}
