# UI Covid Coding Challenge for Rill data

Solution for Rill data recruitment task.

## How to run

You need to have [Node](https://nodejs.org/en) and [npm](https://www.npmjs.com/) installed

Clone repository and run `start-app.sh` script

```
git clone https://github.com/tuswoj/covid_data_dashboard.git
cd covid_data_dashboard
./start-app.sh
```

If you want to run unit tests do:

```
npm run test
```

## Technologies used

I decided to go with `Vite` + `Svelte` + `TS` combination. I thought this is great opportunity to learn Svelte and I also felt that adding SvelteKit here would be a little bit too much to learn at once (and not so useful in a small project like this).

`papaparse` for parsing downloaded csv data.

`chartjs` for line chart.

`vitest` for unit tests.

`svelte-select` for nice user experience when selecting country.
