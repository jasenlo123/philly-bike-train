# Philly Bike Train

Map application for the Philly Bike Train which tracks bike train leader and rider locations using `HTML Geolocation API`, displaying the map `maplibre-gl` for the front-end and processing geolocation data with `firebase` for the front-end. 

## To Do

- [ ] Front-end
  - [x] Finialise routes data
  - [x] Drawing and loading routes
  - [x] Styling routes
  - [ ] Load and style starting location icons, destination icons.
  - [ ] Handle loading states
  - [ ] Map legend
  - [ ] App bar + other pages
  - [ ] Serving backend data logic
- [ ] Back-end
  - [ ] Geolocation API interface
  - [ ] Storing geolocation data

## 🚀 Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── routes.json
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
