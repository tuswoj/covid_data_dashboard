/**
 *  Transform date format used in covid data report to date format that is accepted by <input>
 * @param inputDateString Date string formatted as m/d/yy
 * @returns Date string formatted as YYYY-MM-DD
 */
export function convertDateFormat(inputDateString = ""): string {
  if (!inputDateString) {
    return "";
  }

  const [monthPart, dayPart, yearPart] = inputDateString.split("/");
  const day = dayPart.padStart(2, "0");
  const month = monthPart.padStart(2, "0");
  const year = "20" + yearPart;

  return `${year}-${month}-${day}`;
}
